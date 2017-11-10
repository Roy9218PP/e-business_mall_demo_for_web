<template>
  <div id="bgImg">
      <div class="container">
        <div class="login_register_box">
            <el-card class="box-card">
          <el-tabs  v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="居里居外会员登录" name="first">
                 <el-form   :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
                            <el-form-item label="用户名:" prop="user_name">
                                <el-input v-model="loginForm.user_name" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="密码:" prop="user_psw">
                                <el-input v-model="loginForm.user_psw" placeholder="请输入密码" type="password"></el-input>
                               
                            </el-form-item>
                           
                            <el-form-item>
                                <el-checkbox label="记住用户名" name="remmber_me" v-model="loginForm.remmber_me"></el-checkbox>

                                <el-checkbox label="自动登录" name="auto_login" v-model="loginForm.auto_login"></el-checkbox>
                                
                            </el-form-item>
                           
                             <el-form-item >
                                <el-button type="primary" @click="submitForm_Login('loginForm')">立即登录</el-button>
                                <el-button @click="resetForm('loginForm')">重置</el-button>
                            </el-form-item>
                             <el-form-item>
                                 <el-button type="text" @click="goToResetPsw()">忘记密码？</el-button>
                            </el-form-item>
                             <el-form-item  label="其他方式登录:">
                            <el-button type="text" @click="QQLogin()"><span class="el-icon-picture"></span> QQ登录</el-button>
                                <el-button type="text" @click="weiboLogin"><span class="el-icon-picture"></span>微博登录</el-button>
                            </el-form-item>
                           
                           
                        </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
                <el-form  :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="demo-registerForm">
                            <el-form-item label="用户名" prop="user_name">
                                <el-input v-model="registerForm.user_name"></el-input>
                            </el-form-item>
                              <el-form-item label="密码" prop="user_psw">
                                <el-input v-model="registerForm.user_psw" type="password"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="user_psw_again">
                                <el-input v-model="registerForm.user_psw_again" type="password"></el-input>
                               
                            </el-form-item>
                            <el-form-item label="邮箱" prop="user_email">
                                <el-input v-model="registerForm.user_email"></el-input>
                            </el-form-item>
                             <el-form-item label="推荐人" prop="recommend_user">
                                <el-input v-model="registerForm.recommend_user"></el-input>
                            </el-form-item>
                         <el-form-item>
                             <el-checkbox label=" 已经阅读" name="type" v-model="registerForm.accept_license"></el-checkbox>
                            
                              <el-button type="text" @click="submitForm('loginForm')">《用户协议》</el-button>
                             
                      
                            </el-form-item>
                            <el-form-item>
                               <el-button  size="" type="primary" @click="submitForm_register('registerForm')" :disabled="!registerForm.accept_license">立即注册</el-button> 
                               <el-button @click="resetForm('loginForm')">重置</el-button>
                            </el-form-item>
                     </el-form>
        
            </el-tab-pane>
           
        </el-tabs>   
        </el-card>

        </div>

        <dialog-component></dialog-component> 
  </div>
</div>
</template>



<script>
import axios from "axios";
import dialogComponent from "@/components/Dialog/Dialog";
import cryptoEncoding from '@/utils/cryptoEncoding';
// import 'static/libs/moveline-master/js/jquery.easing';
// import 'static/libs/moveline-master/js/moveline';
// import 'static/libs/moveline-master/js/toast';
import CryptoJS from 'crypto-js'
export default {
  data() {
     var pswValidator = (rule, value, callback) => {
       if (!/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(
          value
        )) {
        callback(new Error("请包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"));
      } else {
         if (this.registerForm.user_psw_again !== '') {
            this.$refs.registerForm.validateField('user_psw_again');
          }
        callback();
      }
       
      };
      var psw_againValidator = (rule, value, callback) => {
        
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.user_psw) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
      };
    const self = this;
    return {
      activeName: "first",
      loginForm: {
        //设置输入框的默认值
        user_name: "roy",
        user_psw: "123Aa@",
        remmber_me: false,
        auto_login: false
      },
      registerForm: {
        //设置输入框的默认值
        user_name: "roy",
        user_psw: "123Aa@",
        user_psw_again: "",
        user_email: "",
        recommend_user: "",
        accept_license: false
      },
      rules: {
        user_name: [
          { required: true, message: "请输入用户名!", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" },
          { validator: self.$store.state.nameValidator, trigger: "change" }
        ],
        user_psw: [
          { required: true, message: "请输入密码!", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
          { validator: pswValidator, trigger: "change" }
        ],
        user_psw_again: [
          { required: true, message: "请输入密码!", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
          { validator: psw_againValidator, trigger: "change" }
        ],
         user_email: [
          { required: true, message: "请输入邮箱!", trigger: "blur" },
          { validator: self.$store.state.emailValidator, trigger: "change" }
        ],
        recommend_user: [
          { min: 2, max: 12, message: "长度在 2 到 12 个字符", trigger: "blur" },
          { validator: self.$store.state.nameValidator, trigger: "change" }
        ]
      }
    };
  },
  components: {
    dialogComponent
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    goToResetPsw() {
      this.$router.push('/reset_password')
    },
    weiboLogin() {},
    QQLogin() {},
  
    //登录提交
    submitForm_Login(formName) {
      const self = this;

      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(self.loginForm);
          var data = JSON.parse(JSON.stringify(self.loginForm));
          //对数据加密
          data.user_psw = cryptoEncoding(self.loginForm.user_psw);
          console.log('=====',data)
          //发起post请求
          axios.post("/api/user/login_info", data)
            .then((response) => {
                console.log(response)
              //self.$store.commit('_dialogVisibleChange',{dialogVisible:true,content:"恭喜你,登陆成功"})

              if(response.data.code){
                    
                     this.$notify({
                        title: "登录成功",
                        message: "恭喜您,登录成功了！",
                        type: "success"
                    });
                    self.$store.state.user_name = data.user_name;
                    this.$router.push('/home')
                }else{
                      this.$notify.error({
                        title: "登录失败",
                        message: "请确保用户名以及密码正确"
                    });
                }
            })
            .catch(() => {});
        } else {
          this.$notify.error({
            title: "登录失败",
            message: "请检查网络连接后重试"
          });
          return false;
        }
      });
    },
    //注册提交
    submitForm_register(formName) {
      const self = this;

      this.$refs[formName].validate(valid => {
        if (valid) {
           
        
           var data = JSON.parse(JSON.stringify(self.registerForm));
         
           //对数据加密
            data.user_psw = cryptoEncoding(self.registerForm.user_psw);
            data.user_psw_again= cryptoEncoding(self.registerForm.user_psw_again);
          
          //发起put请求
          axios
            .put("/api/user/register_info", data)
            .then((response) => {
                if(response.data.code == 1){
                     this.$notify({
                        title: "注册成功",
                        message: "恭喜您,注册成功了！",
                        type: "success"
                    });

                    self.$store.state.user_name = data.user_name;
                    this.$router.push('/home')
                }else if(response.data.code == 0){
                      this.$notify.error({
                        title: "注册失败",
                        message: "请稍后重试!"
                    });
                }else{
                  this.$notify.error({
                        title: "注册失败",
                        message: "该用户已经存在"
                    });
                }
                
            })
            .catch(() => {});
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.$notify.info({
          title: '提示',
          message: '输入内容已经重置,请重新输入'
        });
    }
  },
  //vue2.0版本废弃了ready定义的方法，使用mounted来代替，不过需要加上this.$nextTick（function（）{}） 。
  mounted() {
    const self = this;
    this.$nextTick(() => {
     
    });
  }
};
</script>
<style>
/* @import url('/static/libs/moveline-master/css/toast.css'); */
#bgImg {
  width: 100%;
  height: 600px;
  background-image: url("/static/imgs/loginbg.jpg");
  background-size: cover;
  background-position: center;
}
.container {
  position: relative;
}
.login_register_box {
  width: 450px;
  position: absolute;
  right: 0;
  top: 50px;
}
/* 
http://www.jb51.net/article/115170.htm

这个正则要求密码长度最少12位，包含至少1个特殊字符，2个数字，2个大写字母和一些小写字母。
(?=^.{12,25}$)(?=(?:.*?\d){2})(?=.*[a-z])(?=(?:.*?[A-Z]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$
分解
(?=^.{12,25}$) -- 密码长度12-25，自己改变数字可以调节 
 
(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1}) -- 至少一个特殊字母，FYI 
 
(?=(?:.*?\d){2}) -- 至少2个数字，FYI 
 
(?=.*[a-z]) -- a-z的小写字母 
 
  (?=(?:.*?[A-Z]){2}) -- 至少2个大写字母，FYI  */
</style>

