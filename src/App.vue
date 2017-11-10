<template>
  <div id="app">
   <page-top></page-top>
   <router-view></router-view>
   <page-foot></page-foot>
  </div>
</template>

<script>
import PageTop from '@/components/Page_Top/Page_Top';
import PageFoot from '@/components/Page_Foot/Page_Foot';

export default {
  name: 'app',
  components:{
    PageTop,
    PageFoot
  }
}
</script>

<style>

</style>
