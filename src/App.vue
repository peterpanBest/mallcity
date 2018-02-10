<template>
  <div id="app">
    <keep-alive include="index,myaccount"> 
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  
  export default {
  name: 'app',
  components: {
    
  },
  mounted: function(){
    this.$router.push('/');
  }
}
</script>

<style>
.vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
    background-color: #fe4070!important;
}
</style>
