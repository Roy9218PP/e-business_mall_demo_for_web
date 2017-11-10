import Vue from 'vue'
//第一步:引入vuex
import Vuex from 'vuex'

//第二步:如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    dialogVisible: false,
    dialogContent: "",
    userInfo:null,
    //用户名正则
    nameValidator(rule, value, callback) {
        console.log(rule)
      if (!/^[A-Za-z0-9\u4e00-\u9fa5_]+$/.test(value)) {
        callback(new Error("请输入合法用户名"));
      } else {
        callback();
      }
    },
    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    pswValidator(rule, value, callback) {
      if (!/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(
          value
        )) {
        callback(new Error("请包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"));
      } else {
        callback();
      }
    },
    //邮箱正则
    emailValidator(rule, value, callback) {
      if (!/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(
          value
        )) {
        callback(new Error("邮箱不合法!"));
      } else {
        callback();
      }
    }
  },
  mutations: {
    _dialogVisibleChange(state, payload) {

      state.dialogVisible = payload.dialogVisible
      state.dialogContent = payload.content
    }
  }
})
