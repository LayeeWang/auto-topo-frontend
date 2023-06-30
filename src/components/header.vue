<template>
  <div>
    <div class="header">
      <div class="mytitle">
        <img class="myLogo" src="../assets/logo.png">
      </div>

      <el-menu
          router
          :default-active="$route.path"
          @click="routeLink"
          mode="horizontal"
          style="background-color: transparent;color: white;font-weight: bolder"
          class="menu-top">
        <el-menu-item class="menu-top-item" index="/dashboard">
          <!--          <a-icon type="desktop"/>-->
          <span>主页</span>
        </el-menu-item>
        <el-menu-item class="menu-top-item" index="/task" v-if="userType === 'admin'">
          <!--          <a-icon type="search" />-->
          <span>任务管理</span>
        </el-menu-item>
        <el-menu-item class="menu-top-item" index="/myTask" v-if="userType !== 'admin'">
          <!--          <a-icon type="search" />-->
          <span>我的任务</span>
        </el-menu-item>
        <el-menu-item class="menu-top-item" index="/manageUser" v-if="userType === 'admin'">
          <!--          <a-icon type="search" />-->
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item class="menu-top-item" index="/login">
          <!--          <a-icon type="car"/>-->
          <span>退出登录</span>
        </el-menu-item>
      </el-menu>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "header",
  data() {
    return {
      // isLoading:
    }
  },
  computed: {
    ...mapGetters([
      "userType"
    ]),

  },
  async mounted() {
    // this.userType =
  },
  methods: {
    // ...mapActions([
    //   'logout',
    //   'getUserInfo'
    // ]),
    // ...mapMutations([
    //   'set_message',
    // ]),
    routeLink(e) {
      this.$router.push(e.index)
    },

  }
}


</script>

<style>
.menu-top {
  width: 540px;
  height: inherit;
  display: inline-block;
  margin-left: -7em;
  background-color: transparent;
}

.menu-top-item {
  height: inherit
  /*background-color: #01111f;*/
}

.header {
  display: flex;
  background-color: white;
  /*line-height: 45px;*/
  /*height: 46px;*/
  align-items: center;
  /*justify-content: space-between;*/
  min-width: 100%;
  /*box-shadow: 0 1px 1px rgba(0, 0, 0, .2);*/
  margin-bottom: 1px;
}

.mytitle {
  font-size: 26px;
  margin: 0 0 0 0;
  color: #ffffff;
  float: left;
}

/*.ant-menu.ant-menu-dark .ant-menu-item-selected {*/
/*  color: #a51f1f;*/
/*}*/
/*#user{*/

/*}*/
#user:hover {
  color: rgba(0, 0, 0, 0.71);
  background-color: transparent;
}

/*.ant-dropdown-open{*/
/*  background-color: rgba(0, 0, 0, 0.67);*/
/*}*/

/*.ant-dropdown-menu-item:hover{*/
/*  background-color: #a51f1f;*/
/*}*/
.ant-dropdown-menu-item-active {
  color: white;
}

.userinfo {
  width: 200px;
  overflow: hidden;
}

.myLogo {
  height: 55px;
  width: 200px;
  filter: Invert();
  margin-top: 5px;
}

#user {
  float: right;
  margin-bottom: 8px;
  margin-right: 4em;
  width: 3em;
  height: 2em;
  color: whitesmoke;
  font-size: medium;
  font-weight: 500;
  padding-top: 2px;
}
</style>
