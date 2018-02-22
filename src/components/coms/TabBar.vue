<template>
   <tabbar style="height:.65rem;position:fixed;bottom:0;"> 
      <tabbar-item style="margin-top:.05rem;" link="/index/tm" @click.native="tabChange('index')" :class="{active:tab == 'index'}">
        <img slot="icon" src="../../assets/image/icon/home.png">
        <span slot="label" style="font-size: .13rem;" :class="{active:tab == 'index'}">首页</span>
      </tabbar-item>
      <tabbar-item show-dot style="margin-top:.05rem;" link="/myaccount" @click.native="tabChange('myaccount')" :class="{active:tab == 'inmyaccountdex'}">
        <img slot="icon" src="../../assets/image/icon/my.png">
        <span slot="label" style="font-size: .13rem;" :class="{active:tab == 'myaccount'}">我的</span>
      </tabbar-item>
      <tabbar-item badge="count" style="margin-top:.05rem;" link="/cart"  @click.native="tabChange('cart')" :class="{active:tab == 'cart'}">
        <img slot="icon" src="../../assets/image/icon/cart.png">
        <span slot="label" style="font-size: .13rem;" :class="{active:tab == 'cart'}">购物车</span>
      </tabbar-item>
      <tabbar-item badge="4" style="margin-top:.05rem;" link="/order" @click.native="tabChange('order')" :class="{active:tab == 'order'}">
        <img slot="icon" src="../../assets/image/icon/order.png">
        <span slot="label" style="font-size: .13rem;" :class="{active:tab == 'order'}">订单</span>
      </tabbar-item>
    </tabbar>
</template>

<script>
    import { Tabbar, TabbarItem, Group, Cell, Icon } from 'vux';
    export default {
        name: "tabBar",
        data(){
            return {
                count: 0
            }
        },
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell,
            Icon
        },
        mounted() {
           let _con = this.$store.state.tabBarCon
           this.$store.dispatch("tabBarChange",_con)

           if(_con == ""){
               this.$store.dispatch("tabBarChange","index")
           }

           this.count = this.$store.state.cart.cart.length
        },
        computed: {
            tab(){
                return this.$store.state.tabBarCon
            }
        },
        watch: {
           
        },
        methods:{
            tabChange: function(value){
                this.$store.dispatch("tabBarChange",value)
            }
        }
    }
</script>

<style>
    .active{
        color: #fe4070!important;
    }
    .font-self{
        display: block;
        font-size: .18rem;
        color: black;
    }
    .color-font{
        color: rgb(254, 64, 112)!important;
    }
   
    .weui-tabbar a.weui-tabbar__item p.weui-tabbar__label{
        margin-top:.03rem!important;
    }
</style>
