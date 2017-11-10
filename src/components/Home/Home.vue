<template>

  <div class="container">
      <!-- 轮播图 -->
      <el-carousel indicator-position="inside">
        <el-carousel-item v-for="item in 4" :key="item">
            <img src="http://www.indooroutdoor.cn/Upload/flashAD/flash_2017-09-13-02-56-19_b.jpg" alt="">
        </el-carousel-item>
     </el-carousel>

     <!-- 产品列表 -->
     <div id="commodity_list">
         <div v-for="(commodity_kind_one,index) in 4" :key="index">
             <div class="commodity_kind_one_top">
                 <span  class="el-icon-date commodity_kind_one_top_left" >家居饰品</span>
                  <ul class="commodity_kind_one_top_right">
                        <li v-for="(commodity_style,index) in 4" :key="index"><a href="#">现代风格</a></li>
                    </ul>
             </div>
            <div class="commodity_kind_one_list">
                <ul>
                    <li v-for="(commodity,index) in 6" :key="index">
                        <a href="#">
                            <img src="http://www.indooroutdoor.cn/upload/ProductImg/927/27/4db9df4400a9122b.jpg" alt="">
                            <p><a href="#">中式风格 全屋活动家具 28件套装</a> </p>
                            <p><strong>￥29999.00</strong> <del>￥59999.00</del> </p>
                        </a>
                    </li>
                </ul>
            </div>
             
         </div>
     </div>
  
</div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    const self = this;
    this.$nextTick(() => {

      axios
        .get("/api/user/login_status")
        .then(response => {
          if(response.data.userInfo){

                self.$store.state.userInfo = response.data.userInfo;

               this.$notify({
                        title: `您好 ${response.data.userInfo.user_name} ,欢迎回来! `,
                        message: `上次登录时间:${response.data.userInfo.last_login_time} `,
                        type: 'success'
                  });
                 
              } 
         
        })
        .catch(() => {
          this.$notify.error({
                title: "提示",
                message: `哎呀,出错了！`
            });
        });
    });
  }
};
</script>

<style>
.el-carousel,
.el-carousel__container,
.el-carousel__item {
  width: 100%;
  height: 400px;
  background-color: orange;
}
.el-carousel__item img {
  height: 100%;
  background-color: orange;
}
.commodity_kind_one_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted #878d99;
}
.commodity_kind_one_top_left {
  font-size: 1.2rem;
  color: rgb(176, 158, 122);
}
.commodity_kind_one_top_right {
  display: flex;
  list-style: none;
}

.commodity_kind_one_top_right li::after {
  content: "|";
  padding-left: 10px;
}
.commodity_kind_one_top_right li,
.commodity_kind_one_top_right a {
  font-size: 0.8rem;
  color: #878d99;
  text-decoration: none;
  font-weight: 300;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.commodity_kind_one_top_right li > a:hover {
  text-decoration: underline;
  color: rgb(176, 158, 122);
}
.commodity_kind_one_list {
  padding-top: 10px;
}
.commodity_kind_one_list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.commodity_kind_one_list ul > li {
  width: 30%;
  text-align: center;
  color: rgb(176, 158, 122);
  margin-bottom: 20px;
}
.commodity_kind_one_list ul > li:hover {
  transform: scale(1.02);
  transition-duration: 0.3s;
  box-shadow: 0 0 3px rgb(176, 158, 122);
}

.commodity_kind_one_list a {
  color: #878d99;
  text-decoration: none;
}
.commodity_kind_one_list p > a:hover {
  color: rgb(176, 158, 122);
  text-decoration: underline;
}
.commodity_kind_one_list p > strong {
  color: red;
}
.commodity_kind_one_list p > del {
  font-size: 0.8rem;
}
</style>

