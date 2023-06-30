<template>
  <div style="margin: 6em 3em 3em;">
    <el-table
        stripe border
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}"
        :data="userData"
    >      <el-table-column
        prop="id"
        label="ID">
    </el-table-column>
      <el-table-column
          prop="name"
          label="姓名">
      </el-table-column>

      <el-table-column
          prop="type"
          label="用户类型">
      </el-table-column>
      <el-table-column
          prop="email"
          label="电子邮件">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible">
            <el-form :model="userData[0]">
              <el-form-item label="Username" :label-width="formLabelWidth">
                <el-input v-model="userData[0].name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Email" :label-width="formLabelWidth">
                <el-input v-model="userData[0].email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Type" :label-width="formLabelWidth">
                <el-input v-model="userData[0].type" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="onConfirmForm">确 定</el-button>
            </div>
          </el-dialog>

          <el-button
              type="primary"
              size="mini"
              @click="handleEdit"
          >修改信息
            <!--          @click="handleEdit(scope.$index, scope.row)"-->
          </el-button>
          <el-button
              type="danger"
              size="mini"
          >删除用户

          </el-button>
        </template>
      </el-table-column>


    </el-table>


  </div>
</template>

<script>
export default {
  name: "manageUser",
  data(){
    return {
      formLabelWidth: '80px',
      dialogFormVisible: false,
      userData: [
        {
          name: '张三',
          id: '12345678',
          type: 'user',
          email: '123@qq.com',
        },
        {
          name: '张四',
          id: '112233',
          type: 'user',
          email: '234@qq.com',
        },
        {
          name: '张五',
          id: '445566',
          type: 'user',
          email: '345@qq.com',
        },
        {
          name: '李一',
          id: '888',
          type: 'admin',
          email: '888@qq.com',
        },

      ]
    }
  },
  methods: {
    handleEdit(){
      this.dialogFormVisible = true;
    }
  }
}
</script>

<style scoped>

</style>
