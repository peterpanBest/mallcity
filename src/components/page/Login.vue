<template>
    <div class="container hauto">
      <div class="header-box hauto">
           <div class="header">
            <span class="back el-icon-back"></span>
            <span class="title">验证手机</span>
           </div>
      </div>
      <loginCom ></loginCom>
    </div>
</template>

<script>;
    import loginCom from "../coms/LoginCom";
    export default {
        name: 'Login',
        components: {
           loginCom
        },
        data () {
            return {
                msg: '这个是登录页面'
            }
        }
    }
</script>

<style scoped>
    .header-box{
        border-bottom: 1px solid #eeeeee;
    }
    .header{
        width: 3rem;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
    }
    .back{
        display: block;
        float: left;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        width: .45rem;
        color: black;
        font-size: 22px;
    }
    .title{
        width: 2.1rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        color: black;
        font-size: 22px;
        display: block;
        float: left;
    }
</style>
