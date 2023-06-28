<template>
  <el-container style="padding-top: 100px;text-align: center">
    <el-aside style="width: 50%;display: inline-block;"
              width="50%"
    >
      <el-table
          :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}"
          :data="taskData"
          style="margin-top: 3em;">
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
      taskData: [
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

    }
  },
  mounted() {
    this.handleEcharts()
  },
  methods: {
    dataProcess() {
      let box = [0, 0, 0, 0, 0]
      for (let i of this.taskData) {
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
      this.taskData.splice(idx, 1);
      this.handleEcharts();
    }
  }
}
</script>

<style scoped>

</style>
