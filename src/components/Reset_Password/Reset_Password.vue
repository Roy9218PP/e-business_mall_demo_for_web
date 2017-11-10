<template>
  <div class="container">
      <div id="box">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>找回密码</span> 
            </div>
            <el-steps :active="activeIndex">
                <el-step title="填写验证信息" icon="el-icon-edit"></el-step>
                <el-step title="重置密码" icon="el-icon-upload"></el-step>
                <el-step title="完成" icon="el-icon-picture"></el-step>
            </el-steps>
            <div id="stepContent">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
              
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>
            </div>
            
        </el-card>
        
      </div>
     
  </div>
</template>
<script>
export default {
  data(){
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
          activeIndex:2,
          ruleForm2: {
            pass: '',
            checkPass: '',
           
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
#box{
    width: 80%;
    margin: 20px auto;

}
#stepContent{
    padding: 50px 0;
}
</style>

