<template>
<div><el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <strong>{{dialogContent}}</strong>
  <span slot="footer" class="dialog-footer">
    <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog></div>
  
</template>
<script>
//引入mapState
import { mapState } from 'vuex'

export default {
  data() {
    return {
      //dialogVisible: true
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
},
computed:{
    dialogVisible:{
         // getter
        get: function () {
            return this.$store.state.dialogVisible;
        },
        // setter
        set: function (payload) {
            this.$store.state.dialogVisible = payload;
        }
    },
    dialogContent:{
        get: function () {
            return this.$store.state.dialogContent;
        },
        // setter
        set: function (payload) {
            this.$store.state.dialogContent = payload;
        }
    }
    
}
//下边的写法报错 暂时无解
// computed:mapState({
     
//     dialogVisible:'dialogVisible'
        
//   })
};
</script>
<style scoped>

</style>

