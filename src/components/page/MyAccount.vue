<template>
    <div>
        <div class="header-div hauto">
            <div class="header-top hauto">
                <span class="top-left"><img src="../../../static/icon/setwhite.png" alt=""></span>
                <span class="top-right"><img src="../../../static/icon/msgwhite.png" alt=""></span>
            </div>
            <div class="logo-div">
                <span class="logo"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1082195034,4139527125&fm=27&gp=0.jpg" alt=""></span>
                <span class="phone">157113766333</span>
                <span class="contents">我需要一个长势旺盛的个性签名</span>
            </div>
            <ul class="tab-div hauto">
                <li class="tab-item">
                    <span class="item-num tab-item-p">0</span>
                    <span class="item-title tab-item-p">粉丝</span>
                </li>
                <li class="tab-item reg">
                    <span class="item-num tab-item-p">0</span>
                    <span class="item-title tab-item-p">关注</span>
                </li>
                <li class="tab-item reg">
                    <span class="item-num tab-item-p">0</span>
                    <span class="item-title tab-item-p">留言</span>
                </li>
                <li class="tab-item reg">
                    <span class="item-num tab-item-p myinfo">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-icon-test17"></use>
                        </svg>
                    </span>
                    <span class="item-title tab-item-p">个人资料</span>
                </li>
            </ul>
        </div>
        <line-height :type="1" />
        <line-height :type="2" />
        <line-height :type="3" />
        <line-height :type="4" />
        <line-tab :leftTitle="tabLeftTitle" :rightTitle="tabRightTitle" />
        <list-top />
        <list-bot />
        <div class="ad">
            <img src="http://demo-test.su.bcebos.com/timg.jpg?authorization=bce-auth-v1%2F6c7031ec5ff84bd6b63eb606d9891933%2F2018-02-07T12%3A46%3A23Z%2F-1%2Fhost%2F077c26af7e0b828d46a3d3f84dcab6ee85bb5c15a4a2842ca0f563ed42ed3842" alt="">
            <height-div />
        </div>
        <tabBar/>
    </div>
</template>

<script>
    import LineHeight from "@/components/coms/LineHeight"
    import LineTab from "@/components/coms/LineTab"
    import ListTop from "@/components/coms/MyAccount/ListTop"
    import ListBot from "@/components/coms/MyAccount/ListBot"
    import tabBar from "@/components/coms/TabBar"
    import HeightDiv from "@/components/coms/HeightDiv"
    
    export default {
        components: {
            tabBar,
            LineHeight,
            LineTab,
            ListTop,
            ListBot,
            HeightDiv
        },
        data() {
            return {
                tabLeftTitle: "买买买",
                tabRightTitle: "查看全部订单"
            }
        }
    }
</script>

<style scoped>
    .header-top{
        margin-top: .1rem;
    }
    .header-div{
        background: skyblue;
    }
    .top-left{
        display: inline-block;
        height: auto;
        overflow: hidden;
        float: right;
        margin-right: .05rem;
    }
    .top-left img{
        
    }
    .top-right{
        float: right;
        display: inline-block;
        height: auto;
        overflow: hidden;
        float: right;
        margin-right: .05rem;
    }

    .logo-div{
        width: 3.3rem;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
        margin-top: .1rem;
        margin-bottom: .3rem;
    }
    .logo{
        display: block;
        width: .65rem;
        height: .65rem;
        border-radius: 50%;
         overflow: hidden; 
         float: left;
    }
    .logo img{
        display: block;
        width: .65rem;
        height: .65rem;
    }
    .phone, .contents{
        display: block;
        width: 2.5rem;
        height: auto;
        overflow: hidden;
        float: left;
        margin-left: .1rem;
        margin-top: .05rem;
        color: white;
        font-size: 15px;
    }
    .contents{
        margin-top: 0;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .tab-div{
        background: rgba(83, 82, 82, 0.2);
    }
    .tab-div .tab-item{
        width: 25%;
        height: auto;
        overflow: hidden;
        float: left;
    }

    .tab-item-p{
        display: block;
        width: 100%;
        height: .3rem;
        text-align: center;
        color: white;
        font-weight: 500;
        font-size: .15rem;
    }

    .tab-div .item-num{
        line-height: .45rem;
    }
    .tab-div .item-title{
        line-height: .3rem;
    }
    .myinfo{
        font-size: .3rem!important;
    }
    .ad{
        margin-top: .1rem;
        width: 100%;
        height: .1rem;
    }
    .ad{
        width: 100%;
    }
</style>