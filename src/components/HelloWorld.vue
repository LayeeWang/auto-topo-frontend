<template>
  <el-container id="container" style="height: calc(100vh - 70px);margin-top:70px">
    <el-aside width="50%" style="background-color: #eeeeee">
      <div id="g6Data">

      </div>
    </el-aside>
    <el-main style="padding: 0">
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="拓扑配置及校验管理" name="manage" class="tab-pane">
          <div id="btn-area">
            <el-upload
                class="question-upload"
                action="#"
                :multiple="false"
                limit="1"
                :auto-upload="false">
              <el-button slot="trigger" type="primary" :loading="fileLoading">选择文件<i
                  class="el-icon-upload el-icon--right" id="icon"></i>
              </el-button>
              <el-button style="margin-left: 10px;" type="success" @click="onSubmit">提交配置文件
              </el-button>
              <el-button type="danger" @click="onClear" style="margin-top: 12px">清空</el-button>
              <el-button type="primary" @click="handleSave">保存</el-button>
              <el-button type="success">提交校验文件</el-button>
            </el-upload>
          </div>
          <el-input
              type="textarea"
              v-model="fileContent"
              :rows="rows"
              style="margin-top: 12px"/>
        </el-tab-pane>
        <el-tab-pane label="路由器信息" name="info" class="tab-pane">
          <h1 style="text-align: center">{{ routerTitle }}</h1>
          <el-table
              :data="routerData"
              style="width: 100%">
            <el-table-column
                prop="port"
                label="PORT">
            </el-table-column>
            <el-table-column
                prop="ip"
                label="IP">
            </el-table-column>
            <el-table-column
                prop="status"
                label="STATUS">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                    type="primary"
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">配置
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="命令行交互" name="command" class="tab-pane">
          <el-input v-model="command" style="width: 75%"></el-input>
          <el-button type="primary" style="margin-left: 12px">执行</el-button>
          <el-input
              type="textarea"
              v-model="executeResult"
              :autosize="{ minRows: 10, maxRows: rows}"
              style="margin-top: 12px"/>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import {mapActions} from 'vuex';
import G6 from '@antv/g6';

export default {
  name: 'HelloWorld',
  data() {
    return {
      activeName: 'manage',
      fileLoading: false,
      fileContent: `Sample Data:

RouterA:
  ip: 172.16.0.1
  password: CISCO
  port:
    - s0 0 0: 192.168.12.1/24
    - 0/0: 172.16.0.1/24
    - 1o0: 1.1.1.1/24
  command:
    - ip route 2.2.2.0 255.255.255.0 s0/0/0
    - ip route 3.3.3.0 255,255,255,0 192.168.12.2
  ping:
    - 2.2.2.2
    - 3.3.3.3 source 1.1.1.1
  show: sh ip route
  showtest: 3.3.3.0 [1/0] via 192.168.12.2`,
      rows: 30,
      routerTitle: 'RouterA',
      routerData: [
        {
          port: 's0/0/0',
          ip: '192.168.2.6/24',
          status: 'up'
        },
        {
          port: 'f0/0',
          ip: '172.16.0.1/24',
          status: 'up'
        },
        {
          port: 'lo0',
          ip: '1.1.1.1/24',
          status: 'up'
        },
        {
          port: 's0/0/1',
          ip: 'unassigned',
          status: 'down'
        },
        {
          port: 'f0/1',
          ip: 'unassigned',
          status: 'down'
        }
      ],
      command: '',
      executeResult: '',
    }
  },
  mounted() {
    let screenHeight = document.getElementById('container').clientHeight;
    let btnHeight = document.getElementById('btn-area').clientHeight;
    this.rows = (screenHeight - btnHeight) / 24 - 1;
    this.handle();
  },
  methods: {
    ...mapActions([
      'file',
      'send',
      'execute',
      'topologyTest',
      'update',
      'clear'
    ]),
    handle() {
      const data = {
        nodes: [
          {
            id: 'node1',
            img: require('../assets/router.png'),
            x: 150,
            y: 50,
            label: 'Router_1',
          },
          {
            id: 'node2',
            img: require('../assets/router.png'),
            x: 300,
            y: 300,
            label: 'Router_2',
          },
          {
            id: 'node3',
            img: require('../assets/switch.png'),
            x: 60,
            y: 300,
            label: 'Switch_1',
          },
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2',
            // label: 'edge 1',
          },
          {
            source: 'node2',
            target: 'node3',
            type: 'line'
            // label: 'edge 2',
          },
          {
            source: 'node3',
            target: 'node1',
            type: 'line'
            // label: 'edge 3',
          },
        ],
      };
      const width = document.getElementById('g6Data').scrollWidth;
      const height = document.getElementById('g6Data').scrollHeight || 500;
      G6.registerEdge(
          'circle-running',
          {
            afterDraw(cfg, group) {
              // get the first shape in the group, it is the edge's path here=
              const shape = group.get('children')[0];
              // the start position of the edge's path
              const startPoint = shape.getPoint(0);

              // add red circle shape
              const circle = group.addShape(
                  'image', {
                    attrs: {
                      x: startPoint.x,
                      y: startPoint.y,
                      width: 30,
                      height: 30,
                      img: require('../assets/message.png'),
                    },
                    name: 'image-shape',
                  }
              );

              // animation for the red circle
              circle.animate(
                  (ratio) => {
                    // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
                    // get the position on the edge according to the ratio
                    const tmpPoint = shape.getPoint(ratio);
                    // returns the modified configurations here, x and y here
                    return {
                      x: tmpPoint.x,
                      y: tmpPoint.y,
                    };
                  },
                  {
                    repeat: true, // Whether executes the animation repeatly
                    duration: 3000, // the duration for executing once
                  },
              );
            },
          },
          'line', // extend the built-in edge 'cubic'
      );
      const graph = new G6.Graph({
        container: 'g6Data',
        width,
        height,
        // translate the graph to align the canvas's center, support by v3.5.1
        fitCenter: true,
        defaultNode: {
          type: 'image',
          size: [60, 60],
          clipCfg: {
            show: false,
            // Clip type options: circle, ellipse, rect, path
            type: 'rect',
            // circle
            r: 40,
            // clip style
            style: {
              lineWidth: 1,
            },
          },

        },
        defaultEdge: {
          type: 'circle-running',
          style: {
            lineWidth: 2,
            stroke: 'gray',
          },
          // labelCfg:{ show:false}
        },
        modes: {
          default: ['drag-canvas', 'drag-node'],
        },
      });

      graph.data(data);
      graph.render();

    },
    handleSave() {
      this.$message.success({message: '保存成功'})
    },
    onSubmit() {

    },
    onClear() {
      this.fileContent = '';
      alert('clear success')
    },
    handleEdit(index, row) {

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tab-pane {
  padding: 0 12px;
  text-align: left;
}
</style>
