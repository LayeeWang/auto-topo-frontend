<template>
  <div style="margin: 6em 3em 3em;">
    <el-table
        stripe border
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}"
        :data="myTaskData"
    >
      <el-table-column
          prop="name"
          label="姓名">
      </el-table-column>
      <el-table-column
          prop="taskName"
          label="任务名称">
      </el-table-column>
      <el-table-column
          prop="ddl"
          label="截止时间">
      </el-table-column>
      <el-table-column
          prop="score"
          label="分数">
      </el-table-column>
      <el-table-column
          prop="date"
          label="提交时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              v-if="scope.row.date === '-'"
              type="primary"
              size="mini"
              @click="handleGo"
          >去完成
          </el-button>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
export default {
  name: "myTask",
  data(){
    return {
      myTaskData: [
        {
          name: '张三',
          taskName: '拓扑结构初始化',
          score: '100',
          ddl: '2023-06-30',
          date: '2023-06-27'
        },
        {
          name: '张三',
          taskName: '路由器参数配置',
          score: '99',
          ddl: '2023-06-30',

          date: '2023-06-27'
        },
        {
          name: '张三',
          taskName: '子网划分',
          score: '98',
          ddl: '2023-06-30',

          date: '2023-06-28'
        },
        {
          name: '张三',
          taskName: 'NAT练习',
          ddl: '2023-06-30',

          score: '未提交',
          date: '-'
        },
        {
          name: '张三',
          taskName: 'OSPF练习',
          ddl: '2023-06-30',

          score: '未提交',
          date: '-'
        },
      ]
    }
  },
  methods : {
    handleGo(){
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>

</style>
