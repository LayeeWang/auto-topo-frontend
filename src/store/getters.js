const getters = {
  // isLogin: state => state.isLogin,
    userType: state => state.module.userType || localStorage.getItem("userType")


};

export default getters
