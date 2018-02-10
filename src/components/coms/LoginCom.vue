<template>
    <div class="container">
        <div class="inpt-box hauto">
            <div class="phone-box hauto">
                <input type="number" class="phone-inpt" v-model="phoneNum" placeholder="请输入手机号">
                <span class="sub-btn">语音验证码</span>
            </div>
        </div>
         <div class="inpt-box hauto">
            <div class="phone-box hauto">
                <input type="number" class="phone-inpt" placeholder="请输入验证码">
            </div>
        </div>
         <div class="login-btn" @click="checkPhone">
             <x-button type="warn" style="background:#ff4891;">登录</x-button>
         </div>
         <p class="show">为方便您及时查询订单信息，需要验证您的手机号来登录</p>
    </div>
</template>

<script>
    import { XButton } from 'vux';
    import api from "../../api/public";

    export default {
        components: {
            XButton
        },
        data(){
             return {
                phoneNum: ""
             }
         },
         methods: {
           checkPhone: function(){
              let _temp =  api.checkPhoneNum(this.phoneNum);
              if(this.phoneNum == ""){
                this.$vux.toast.show({
                    text: '手机号码不能为空',
                    type: "text",
                    width: "50%",
                    position: "middle"
                })
              }else{
                if(!_temp){
                    this.$vux.toast.show({
                        text: '手机号码格式不正确',
                        type: "text",
                        width: "50%",
                        position: "middle"
                    })
                }else{
                    this.$router.push({name: 'index',params: {"token":"success"}});
                }
              }
              
           } 
         }  
    }
</script>

<style scoped>
    input{
        border: none;
        font-size: .16rem;
        outline: none;
    }
    .container{
        width: 3rem;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
        margin-top: .6rem;
    }
    .inpt-box{
        margin: 0 auto;
    }
    .phone-box{
        border-bottom: 1px solid #eeeeee;
    }
    .phone-inpt{
        width: 70%;
        height: .35rem;
        float: left;
        margin-bottom: .1rem;
    }
    .sub-btn{
        display: block;
        height: .25rem;
        line-height: .22rem;
        text-align: center;
        color: #ff4891;
        border: 1px solid #ff4891;
        border-radius: .05rem; 
        width: 28%;
        margin-top: .06rem;
        float: left;
        font-size: .14rem;
    }

    input::-webkit-input-placeholder { 
        color:#999;
        font-size: .16rem;
    }
    input:-moz-placeholder { 
        color:#999;
        font-size: .16rem;
    }
    input::-moz-placeholder { 
        color:#999;
        font-size: .16rem;
    }
    input:-ms-input-placeholder { 
        color:#999;
        font-size: .16rem;
    }

    .login-btn{
        margin-top: .4rem;
    }

    .show{
        width: 70%;
        margin: 0 auto;
        color: #969696;
        font-size: 13px;
        margin-top: .3rem
    }
</style>
