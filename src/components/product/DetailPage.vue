<template>
    <div class="hauto">
        <div class="header-div hauto line-bot">
            <router-link to="/">
                <span class="pre"><img src="../../../static/icon/pre_left.png" alt=""></span>
            </router-link>
            <ul class="header-tab">
                <li class="tab-item" :class="tabIndex==index?'tabActive':''" v-for="(item , index) in tabList" @click="tabChange(index)">{{item}}</li>
            </ul>
            <span class="save-icon"><img src="../../../static/icon/star.png" alt=""></span>
            <span class="cart-icon"><img src="../../../static/icon/share.png" alt=""></span>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabList: ["商品","详情","评价"],
                tabIndex: 0
            }
        },
        mounted() {
            let _URL = this.$route.params.id
             this.$router.push({name: 'good',params: {"id":_URL}})
        },
        methods: {
            tabChange: function(value){
                this.tabIndex = value
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/public.scss";

    .tabActive{
        color: $primaryColor;
        border-bottom: 0.01rem solid $primaryColor;
    }
    .pre{
        display: block;
        width: .4rem;
        height: .5rem;
        float: left;
        text-align: center;
    }
    .pre img{
        display: inline-block;
        width: .33rem;
        height: .34rem;
        margin-top: .07rem;
    }
    .header-tab{
        height: auto;
        overflow: hidden;
        width: 2rem;
        float: left;
        margin-left: .2rem;
        margin-top: .05rem;
    }
    .tab-item{
        height: .4rem;
        width: .5rem;
        line-height: .4rem;
        float: left;
        margin-left: .1rem;
        text-align: center;
        font-size: $primaryFontSize16;
    }
    .save-icon{
        margin-left: .2rem;
    }
    .cart-icon{
         margin-left: .05rem;
    }
    .save-icon, .cart-icon{
        display: block;
        width: .4rem;
        height: .5rem;
        float: left;
        text-align: center;
    }
    .save-icon img, .cart-icon img {
        display: inline-block;
        width: .3rem;
        height: .3rem;
        margin-top: .1rem;
    }
</style>
