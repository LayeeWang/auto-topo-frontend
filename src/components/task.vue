<template>
  <el-container style="padding-top: 100px;text-align: center">
    <el-aside style="width: 50%;display: inline-block;"
              width="50%"
    >
      <div style="text-align: left;padding-left: 2em;margin-bottom: 1em">
        <el-button type="primary" @click="handleLaunchTask" style="margin-right: 3em"
        >发布任务
        </el-button>
        <el-dialog title="发布任务" :visible.sync="launchTaskVisible">
          <el-form :model="form">
            <el-form-item label="任务名称" :label-width="formLabelWidth">
              <el-input v-model="form.taskName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="任务描述" :label-width="formLabelWidth">
              <el-input v-model="form.des" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="截止日期" :label-width="formLabelWidth">
<!--              <el-select v-model="form.date" placeholder="请选择当前状态">-->
<!--                <el-option label="UP" value="up"></el-option>-->
<!--                <el-option label="DOWN" value="down"></el-option>-->
<!--              </el-select>-->
              <el-date-picker
                  v-model="form.date"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>

            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="launchTaskVisible = false">取 消</el-button>
            <el-button type="primary" @click="onConfirmForm">确 定</el-button>
          </div>
        </el-dialog>

        <el-select v-model="value" placeholder="请选择当前任务" @change="setTableData">
          <el-option v-for="(item,index) in currentTask" :label="item" :value="item"

          ></el-option>

        </el-select>
      </div>
      <el-table
          :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}"
          :data="tableData"
      >
        <el-table-column
            prop="id"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="score"
            label="分数">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
                type="primary"
                size="mini"
            >修改
              <!--          @click="handleEdit(scope.$index, scope.row)"-->
            </el-button>
            <el-button
                type="danger"
                size="mini"
                @click="handleDel(scope.$index, scope.row)"
            >删除

            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-aside>
    <el-main
        id="e" style="background-color: transparent;width: 30%;height: 80vh"></el-main>
  </el-container>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "task",
  data() {
    return {
      formLabelWidth: '80px',
      form: {
        taskName: '',
        des: '',
        date: '',
      },
      taskData: [
            {
              taskName: 'Task1',
              score: [
                {
                  id: '181250111',
                  name: '潘越',
                  score: '59'
                },
                {
                  id: '123456',
                  name: '王馨逸',
                  score: '100'
                },
                {
                  id: '100',
                  name: '张三',
                  score: '89'
                },
                {
                  id: '5567897',
                  name: '张四',
                  score: '79'
                },
                {
                  id: '563432432',
                  name: '张五',
                  score: '94'
                },
                {
                  id: '98765432',
                  name: '张六',
                  score: '66'
                },
                {
                  id: '100',
                  name: '张三三',
                  score: '90'
                },
                {
                  id: '5567897',
                  name: '张四四',
                  score: '77'
                },
                {
                  id: '563432432',
                  name: '张五五',
                  score: '84'
                },
                {
                  id: '98765432',
                  name: '张六六',
                  score: '56'
                },

              ],
            },
            {
              taskName: 'Task2',
              score: [
                {
                  id: '100',
                  name: '张三',
                  score: '89'
                },
                {
                  id: '5567897',
                  name: '张四',
                  score: '79'
                },
                {
                  id: '563432432',
                  name: '张五',
                  score: '94'
                },
                {
                  id: '98765432',
                  name: '张六',
                  score: '66'
                },

              ],
            }
            ],
      tableData:  [
        {
          id: '181250111',
          name: '潘越',
          score: '59'
        },
        {
          id: '123456',
          name: '王馨逸',
          score: '100'
        },
        {
          id: '100',
          name: '张三',
          score: '89'
        },
        {
          id: '5567897',
          name: '张四',
          score: '79'
        },
        {
          id: '563432432',
          name: '张五',
          score: '94'
        },
        {
          id: '98765432',
          name: '张六',
          score: '66'
        },
        {
          id: '100',
          name: '张三三',
          score: '90'
        },
        {
          id: '5567897',
          name: '张四四',
          score: '77'
        },
        {
          id: '563432432',
          name: '张五五',
          score: '84'
        },
        {
          id: '98765432',
          name: '张六六',
          score: '56'
        },

      ],
      launchTaskVisible: false,
      currentTask: ["拓扑结构初始化", "路由器参数配置","子网划分","NAT练习"],
      value: '拓扑结构初始化'
    }
  },
  mounted() {
    this.handleEcharts()
    // this.tableData = this.taskData[0].score;
  },
  methods: {
    setTableData(item){
      console.log(item)
      console.log(this.taskData)
      // console.log(index)
      for(let i of this.taskData){
        if(i.taskName === item){
          this.tableData = i.score
        }
      }
      console.log(this.tableData)
      this.handleEcharts()
      // this.tableData = this.taskData[index].score;
    },
    dataProcess() {
      let box = [0, 0, 0, 0, 0]
      for (let i of this.tableData) {
        let s = i.score;
        if (s < 60) box[0]++;
        else if (s < 70) box[1]++;
        else if (s < 80) box[2]++;
        else if (s < 90) box[3]++;
        else box[4]++;
      }
      return box;
    },
    handleEcharts() {
      let chartDom = document.getElementById('e');
      let myChart = echarts.init(chartDom);
      let option;
      option = {
        xAxis: {
          type: 'category',
          data: ['0-59', '60-69', '70-79', '89-89', '90-100']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.dataProcess(),
            type: 'bar'
          }
        ]
      };

      option && myChart.setOption(option);
    },
    handleDel(idx, row) {
      this.tableData.splice(idx, 1);
      this.handleEcharts();
    },
    handleLaunchTask() {
      this.launchTaskVisible = true;
    },
    onConfirmForm(){
      this.currentTask.push(this.form.taskName)
      this.taskData.push({taskName: this.form.taskName,score: []})
      this.launchTaskVisible = false;
    }
  }
}
</script>

<style scoped>

</style>
