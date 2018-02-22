<template>
  <div id="app">
    <keep-alive include="index,myaccount"> 
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
  
  export default {
  name: 'app',
  components: {
    Loading
  },
  mounted: function(){
    this.$router.push('/');
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style>
.weui-cell{
  padding: 15px 15px!important;
}
.vux-slider > .vux-indicator > a > .vux-icon-dot.active, .vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
    background-color: #fe4070!important;
}
.vux-number-selector.vux-number-disabled svg {
    fill: rgb(204, 201, 201)!important;
}
.vux-number-selector svg{
    fill: #333!important;
}
</style>
