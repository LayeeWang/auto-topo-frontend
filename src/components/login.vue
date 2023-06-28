<template>
  <el-row>
    <el-col :span="8" :offset="8" class="login-card">
      <h1 class="login-title">拓扑自动化系统</h1>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-button" type="primary" :loading="loading" @click="handleLogin">登录</el-button>
        </el-form-item>
        <el-form-item>
          <p>学生: 用户名 user</p>
          <p>管理员: 用户名 admin</p>
          <p>密码: 123</p>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import {mapActions} from 'vuex';


export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{required: true, trigger: 'blur'}],
        password: [{required: true, trigger: 'blur'}],
      },
      loading: false,
    }
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    handleLogin() {
      this.loading = true
      let obj = {
        username: this.loginForm.username,
        password: this.loginForm.password
      };
      if (obj.username === 'user' && obj.password === '123') {
        this.$message.success({message: '登录成功'})
        this.$router.push({path: '/dashboard'});
        this.login('user')
      } else if (obj.username === 'admin' && obj.password === '123') {
        this.$message.success({message: '登录成功'})
        this.$router.push({path: '/task'});
        this.login('admin')
      } else {
        this.$message.error({message: '登录用户名不存在'})
      }


      // this.login(obj)

    },
  }
}
</script>

<style scoped>
.login-card {
  margin-top: 13vh;
  border-radius: 10px;
  padding: 50px;
  border: 1px solid lightgrey;
  box-shadow: lightgrey 3px 3px 3px;
}

.login-title {
  /*color: #409EFF;*/
  font-size: 35px;
  font-weight: bold;
  padding-bottom: 20px;
}

.login-button {
  width: 100%;
}
</style>
