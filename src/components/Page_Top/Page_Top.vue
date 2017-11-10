<template>

<div id="page_top">
  <!-- 页面顶部黑条部分-->
  <div id="page_top_black_bar">
    <div class="container" id="black_bar_box">
      <ul>
      <li >您好 <strong id="user_name" v-if="userInfo"> {{userInfo.user_name}} </strong> ,欢迎来到居里居外家具!</li>
      <li>
        <router-link to="/login_register">登录</router-link>
        <!-- <a href="#"></a> -->
      </li>
      <li>
         <router-link to="/login_register">注册</router-link>
        <!-- <a href="#">注册</a> -->
      </li>
      <li>
         <router-link to="/login_register">注册设计联盟会员</router-link>
        <!-- <a href="#">注册设计联盟会员</a> -->
      </li>
    </ul>
    <ul>
    
      <li>
        <a href="#">我的订单</a>
      </li>
      <li>
        <a href="#">帮助中心</a>
      </li>
      <li>
        <a href="#">收藏本站</a>
      </li>
       <li>
         <!-- <span class="fa fa-id-badge"></span> -->
         <span class="el-icon-setting" style="color:red;"></span>
         &nbsp;
         <span ><a href="#" style="color:red;" >后台管理系统</a> </span>
       </li>
    </ul>
    </div>
    
  </div>

  <!-- 页面顶部中间 logo 搜索框 购物车 部分 -->
  <div class="container" id="page_top_middle_bar">
     <div id="page_top_middle_bar_logo">
       <a href="/" title="居里居外家居商城">
          <img src="/static/imgs/logo.png" alt="居里居外家居" title="居里居外家居|家具成套设计|整体软装设计|室内装修设计|家具搭配|软装设计师|拎包入住装修服务商">
       </a>
      
     </div>
     <div id="page_top_middle_bar_search">
       <div id="page_top_middle_bar_search_top">
        
            <el-input placeholder="请输入内容" v-model="search_content" class="input-with-select">
              <el-select v-model="select_content" slot="prepend" placeholder="请选择">
                <el-option label="沙发" value="1"></el-option>
                <el-option label="床" value="2"></el-option>
                <el-option label="餐桌" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>

       </div>
       <div id="page_top_middle_bar_search_bottom">
         <ul>
           <li>热门搜索:&#x3000;</li>
           <li><a href="#">十里银滩</a>  </li>
           <li><a href="#">惠州 山水龙城</a></li>
           <li><a href="#">海南 西京雅居</a></li>
           
         </ul>
       </div>
     </div>
     <div id="page_top_middle_bar_shopping_cart">
       <el-badge :value="12" class="item">
          <span class="fa fa-cart-plus"></span>
      </el-badge>
     </div>
  </div>

  <!-- 页面顶部tab切换 -->
  <div class="container" id="page_top_tab_bar">
    <el-tabs type="border-card">
       <el-tab-pane >

          <span slot="label"><i class="el-icon-date"></i> 首页</span>
         
      </el-tab-pane>
      <el-tab-pane label="整体家居" >
          <span slot="label"><i class="el-icon-date"></i> 整体家居</span>
          <ul class="kind_list">
              <li v-for="(items_kind,key) in kind_list.整体家居" :key="key">
                {{key}}
                <div>
                   <a href="" v-for="(item,index) in items_kind" :key="index">{{item}}</a>
                </div>
                
              </li>
          </ul></el-tab-pane>
      <el-tab-pane label="家具产品">
          <span slot="label"><i class="el-icon-date"></i> 家具产品</span>
          <ul class="kind_list">
              <li v-for="(items_kind,key) in kind_list.家具产品" :key="key">
                {{key}}
                <div>
                   <a href="" v-for="(item,index) in items_kind" :key="index">{{item}}</a>
                </div>
                
              </li>
          </ul></el-tab-pane>
      <el-tab-pane label="家居用品" >
          <span slot="label"><i class="el-icon-date"></i> 家居用品</span>
          <ul class="kind_list">
              <li v-for="(items_kind,key) in kind_list.家居用品" :key="key">
                {{key}}
                <div>
                   <a href="" v-for="(item,index) in items_kind" :key="index">{{item}}</a>
                </div>
                
              </li>
          </ul></el-tab-pane>
      <el-tab-pane label="家居饰品" >
          <span slot="label"><i class="el-icon-date"></i> 家居饰品</span>
          <ul class="kind_list">
              <li v-for="(items_kind,key) in kind_list.家居饰品" :key="key">
                {{key}}
                <div>
                   <a href="" v-for="(item,index) in items_kind" :key="index">{{item}}</a>
                </div>
                
              </li>
          </ul></el-tab-pane>
       <el-tab-pane label="城市楼盘" >
          <span slot="label"><i class="el-icon-date"></i> 城市楼盘</span>
            <ul class="kind_list">
              <li v-for="(items_kind,key) in kind_list.城市楼盘" :key="key">
                {{key}}
                <div>
                   <a href="" v-for="(item,index) in items_kind" :key="index">{{item}}</a>
                </div>
                
              </li>
          </ul></el-tab-pane>
       <el-tab-pane label="艺术单品" >
          <span slot="label"><i class="el-icon-date"></i> 艺术单品</span>
           <ul class="kind_list">
              <li v-for="(items_kind,key) in kind_list.艺术单品" :key="key">
                {{key}}
                <div>
                   <a href="" v-for="(item,index) in items_kind" :key="index">{{item}}</a>
                </div>
                
              </li>
          </ul>
          </el-tab-pane>
    </el-tabs>
  </div>
 
</div>

</template>
<script>
import "static/libs/typeahead/jquery.typeahead.js";
import kind_list from './kind_list'
export default {

  data() {
    return {
      //搜索内容
      search_content: '',

      //下拉选择内容
      select_content: '',
      kind_list,
    }
  },
  computed:{
    userInfo:{
         // getter
        get() {
            return this.$store.state.userInfo;
        },
        // setter
        set(payload) {
            this.$store.state.userInfo = payload;
        }
    },
  },
  mounted(){
   

  }
};
</script>
<style scoped>
@import url("/static/css/style.css");
@import url("/static/libs/font-awesome-4.7.0/css/font-awesome.min.css");
@import url("/static/libs/typeahead/jquery.typeahead.min.css");
#page_top{
 /* position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 z-index: 1000; */
 
}
#user_name{
  color: red;
  font-size: 1.2rem;
}
#page_top_black_bar {
  width: 100%;
  height: 40px;
  background-color: #333333;
}
#black_bar_box {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
#page_top_middle_bar{
  padding: 20px 0;
}
#black_bar_box ul,
#page_top_middle_bar_search_bottom ul{
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
#black_bar_box ul li,
#page_top_middle_bar_search_bottom ul li{
  padding-right: 10px;
}
#black_bar_box ul li::after,
#page_top_middle_bar_search_bottom ul li::after {
  content: "|";
  padding-left: 10px;
}
#black_bar_box ul li,
#black_bar_box ul li  a {
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
  font-weight: 300;
  display: flex;
  align-items: center;
}
#black_bar_box ul li  a:hover {
  text-decoration: underline;
}
#page_top_middle_bar {
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
#page_top_middle_bar_logo {
  width: 350px;
}
#page_top_middle_bar_logo img {
  width: 100%;
}
#page_top_middle_bar_search {
  width: 500px;
  /* background-color: red; */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#page_top_middle_bar_search_top {
  height: 70%;
  /* background-color: orange; */
  display: flex;
  align-items: center;
}
#kind_select {
  display: inline-block;
  width: 60px;
  height: 45px;
}
.el-select .el-input {
    width: 150px;
  }
.input-with-select .el-input-group__prepend {
    
    background-color: #fff;
}
#page_top_middle_bar_search_bottom ul li,
#page_top_middle_bar_search_bottom ul li  a{
   font-size: 0.8rem;
  color: grey;
  text-decoration: none;
  font-weight: 400;
  display: flex;
  align-items: center;
}
#page_top_middle_bar_shopping_cart{
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: rgb(176, 158, 122);
}
#page_top_tab_bar{
 color: rgb(176, 158, 122) !important;

}
ul.kind_list{
  list-style:none ;
 
}
ul.kind_list a{
  display: inline-block;
  padding:5px;
  height: 20px;
  width: 100px;
  color: grey;
  font-size: 0.8rem;
  text-decoration: none;
}
ul.kind_list a:hover{
  color: rgb(176, 158, 122);
}

</style>
