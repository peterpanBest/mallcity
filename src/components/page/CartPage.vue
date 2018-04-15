<template>
  <div>
      <header class="header">购物车({{cartCount}})</header>
      <line-height :type="1" />
      <line-height :type="1" />
      <line-height :type="1" />
      <cart-item />
      <tabBar/>
  </div>
</template>


<script>
    import tabBar from "@/components/coms/TabBar"
    import CartItem from "@/components/coms/CartItem"
    import LineHeight from "@/components/coms/LineHeight"

    export default {
        components: {
            tabBar,
            CartItem,
            LineHeight
        },
        data() {
            return {
                cartCount: 0
            }
        },
        mounted () {
            
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: .5rem;
        line-height: .5rem;
        text-align: center;
        font-size: .18rem;
    }
</style>

