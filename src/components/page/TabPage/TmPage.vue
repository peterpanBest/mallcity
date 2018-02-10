<template>
    <div class="hauto">
        <ul class="header-box">
            <li class="header-item">
                <span class="icon-div"><img src="../../../assets/image/TmIcon/type.jpg" alt=""></span>
                <span class="header-span hauto">分类</span>
            </li>
            <li class="header-item">
                <span class="icon-div"><img src="../../../assets/image/TmIcon/sign.jpg" alt=""></span>
                <span class="header-span hauto">签到</span>
            </li>
            <li class="header-item">
                <span class="icon-div"><img src="../../../assets/image/TmIcon/tuan.jpg" alt=""></span>
                <span class="header-span hauto">凑团</span>
            </li>
            <li class="header-item">
                <span class="icon-div"><img src="../../../assets/image/TmIcon/box.jpg" alt=""></span>
                <span class="header-span hauto">宝箱</span>
            </li>
            <li class="header-item">
                <span class="icon-div"><img src="../../../assets/image/TmIcon/money.jpg" alt=""></span>
                <span class="header-span hauto">颜值贷</span>
            </li>
        </ul>
        <div class="time-div">
            <div class="time-tile">好物低价-限时购</div>
            <div class="time-now">{{time}}</div>
            <ul class="timing">
                <li class="timing-item">{{hourNum}}</li>
                <li class="timing-item">:</li>
                <li class="timing-item">{{minNum}}</li>
                <li class="timing-item">:</li>
                <li class="timing-item">{{secondNum}}</li>
                <li class="timing-item">倒计时</li>
            </ul>
        </div>
        <scroller lock-y :scrollbar-x=false>
            <div class="box1" ref="box1">
                <div class="sdiv-item" v-for="(item, index) in datas" @click="goDetailPage(item.id)">
                    <div class="sdiv-img-box">
                        <span class="item-img"><img :src="item.img" alt=""></span>
                        <span class="item-sale">{{item.save}}</span>
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-price hauto">
                            <span class="price-now">￥ {{item.nowPrice}}</span>
                            <span class="price-old">￥ {{item.oldPrice}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
        <line-height :type="1" />
        <div class="active w95">
            <div class="hauto line-bot">
                <span class="active-left">今日十点上线</span>
                <span class="active-right">明日10点预告</span>
            </div>
            <div class="active-img"><img src="../../../assets/goods/3059407_1000_1000.jpg" alt=""></div>
            <div class="active-box">
                <div class="active-title hauto">美国•【诠释唇色】魅可（MAC）时尚唇膏3g，爆款色号上架，诱惑无法抗拒!</div>
                <div class="actice-now">￥148</div>
                <div class="acticve-old">￥188</div>
                <div class="active-num hauto">4166人购买</div>
            </div>
        </div>
        <line-height :type="2" />
        <line-height :type="3" />
        <ad-list :brandImg="imgListData" :brandTitle="brandtitle" />
        <height-div />
    </div>    
</template>

<script>
    import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Scroller } from 'vux'
    import { mapActions, mapGetters } from "vuex"
    import LineHeight from "@/components/coms/LineHeight"
    import AdList from "@/components/coms/AdList"
    import HeightDiv from "@/components/coms/HeightDiv"
    import api from "@/api/public"
    import http from "@/api/api"
    import axios from 'axios' 

    export default {
        components: {
            Scroller,
            LineHeight,
            AdList,
            HeightDiv
        },
        data(){
            return {
                time: "",
                hourNum: 8,
                minNum: 59,
                secondNum: 59,
                swiperItemIndex: 6,
                datas: [],
                datasLen: "",
                brandtitle:"今日服饰鞋包",
                imgListData: []
            }
        },
        mounted() {
            let temp = api.getDate()
            this.time = temp.h + ":" + temp.m
            this.timingFn()
            http.TmGoodsList("/tm/data", 1).then(res => {
                    let _temp = "";
                    _temp = res.data.success.goodslist
                    this.datasLen = _temp.length
                    this.datas = _temp
                    //this.$store.dispatch("setTmList", _temp)  
                    this.setTm(_temp)
            }).catch(err => {
                    this.$vux.toast.show({
                        text: err,
                        type: "text",
                        width: "50%",
                        position: "middle",
                        time: 1500
                    })
                }
            );

            http.post("/ms/data").then(res => {
                    let _temp = "";
                    _temp = res.data.success.adImg
                    this.imgListData = _temp

            }).catch(err => {
                    this.$vux.toast.show({
                        text: err,
                        type: "text",
                        width: "50%",
                        position: "middle",
                        time: 1500
                    })
                }
            );
            //console.log("datas" + "  " + JSON.stringify(this.datas))
            //this.$store.dispatch('getTmList');
            //console.log(JSON.stringify(this.$store.state.tmGoodsList))
        },
        methods: {
            ...mapActions({
                setTm: 'setTmList',
                goToDetail: "goToDetail"
            }),
            timingFn: function(){
                let interval = window.setInterval(()=>{
                    if(this.secondNum > 0){
                        --this.secondNum;
                    }

                    if(this.secondNum <= 0){
                        this.secondNum = 0;
                        --this.minNum;
                        this.secondNum = 59;
                    }

                    if(this.minNum <= 0){
                        this.minNum = 0;
                        --this.hourNum;
                        this.secondNum = 60;
                    }

                    if(this.hourNum <= 0){
                        this.hourNum = 0;
                        this.secondNum = 0;
                        window.clearInterval(interval);
                    }
                },1000)
            },
            goDetailPage: function(value){
                this.goToDetail(value)
                this.$router.push({name: 'product',params: {"id":value}})
            }
        },
        watch: {
            datasLen: function(){
               this.$refs.box1.style.width = this.datasLen * 1.25 + 0.5*3 +"rem";
               //console.log( this.$refs.box1.style.width)
            }
        }
    }
</script>

<style scoped>
    .header-box{
        width: 3.4rem;
        height: auto;
        overflow: hidden;
        margin: .14rem auto;
        padding: 0;
    }
    
    .header-item{
        display: block;
        width: .5rem;
        height: auto;
        overflow: hidden;
        margin-top: 0;
        float: left;
        margin-right: .22rem;
    }
    .icon-div{
        display: block;
        width: .5rem;
        height: auto;
        overflow: hidden;
        font-size: .14rem;
        text-align: center;
        margin: 0 auto;
    }
    .icon-div img{
        width: .5rem;
        height: .5rem;
        display: block;
        text-align: center;
    }
    .header-span{
        display: block;
        width: .5rem;
        height: auto;
        overflow: hidden;
        font-size: .14rem;
        text-align: center;
        padding: .05rem 0;
        margin: 0 auto;
    }

    .header-item:nth-of-type(5){
       margin-right: 0;
       float: right; 
    }

    .time-div{
        width: 3.5rem;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
        padding-bottom: .05rem;
    }
    .time-tile{
        height: .3rem;
        line-height: .3rem;
        width: 1.4rem;
        font-size: .16rem;
        color: #fe4070;
        text-align: left;
        float: left;
    }
    .time-now{
        float: left;
        width: .5rem;
        height: .3rem;
        line-height: .3rem;
        font-size: .17rem;
        font-weight: 600;
    }

    .timing{
        width: 1.5rem;
        height: auto;
        overflow: hidden;
        float: right;
    }
    .timing li.timing-item{
        width: .20rem;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        float: left;
        font-size: .13rem;
        color: #fe4070;
    }

    .timing li:nth-of-type(2n){
        width: .12rem!important;
    }

    .timing li:nth-of-type(6){
        width: .5rem!important;
        text-align: right;
    }
    .box1{
        height: 1.9rem;
        overflow: hidden;
        position: relative;
        width: 8rem;
    }
    .sdiv-item{
        width: 100px;
        height: 100px;
        background-color: #ccc;
        display:inline-block;
        margin-left: .5rem;
        float: left;
        text-align: center;
        line-height: 100px;
    }
    .sdiv-item:nth-of-type(1){
        margin-left: 0;
    }
    .sdiv-img-box{
        width: 1.25rem;
        height: auto;
        overflow: hidden;
        float: left;
        position: relative;
    }

    .item-img{
        display: block;
        width: 1.25rem;
        height: 1.3rem;
    }

    .item-img img{
        display: block;
        width: 1.25rem;
        height: 1.3rem;
    }
    .item-sale{
        display: block;
        width: .36rem;
        height: .36rem;
        line-height: .36rem;
        border-radius: 50%;
        background: #fe4070;
        position: absolute;
        top: .01rem;
        left: .02rem;
        font-size: .13rem;
        color: white;
        text-align: center;
    }
    .item-title{
        height: .3rem;
        white-space: pre-wrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: .15rem;
       margin: 0 auto;
       width: 92%;
       padding: 0 .05rem;
       text-align: left;
       font-size: .13rem;
       color: black; 
       font-weight: 650;
    }
    .price-now{
        width: 50%;
        margin: 0 auto;
        display: block;
        height: .25rem;
        line-height: .25rem;
        font-weight: 600;
        font-size: .14rem;
        float: left;
        color: #fe4070;
    }
    .price-old{
        width: 50%;
        margin: 0 auto;
        display: block;
        height: .25rem;
        line-height: .25rem;
        float: left;
        text-decoration: line-through;
    }

    .active{
        margin-bottom: .0;
    }

    .active-left{
        display: block;
        width: 50%;
        text-align: center;
        padding: .05rem 0;
        float: left;
        color: #fe4070;
        font-size: .15rem;
    }
    .active-right{
        display: block;
        width: 50%;
        text-align: center;
        padding: .05rem 0;
        float: left;
        font-size: .15rem;
        color:rgba(7,17,27,0.8);
    }

    .active-img{
        width: 40%;
        height: auto;
        overflow: hidden;
        text-align: center;
        vertical-align: middle;
        float: left;
    }
    .active-img img{
        display: inline-block;
        text-align: center;
        width: 80%;
        height: 1.5rem;
    }

    .active-box{
        width: 60%;
        height: auto;
        float: left;
        margin-top: .1rem;
    }
    .active-title{
        font-size: .14rem;
        line-height: .2rem;
        color: black;
    }
    .actice-now{
        width: 40%;
        height: auto;
        overflow: auto;
        float: left;
        text-align: center;
        font-size: .17rem;
        color: #fe4070;
         padding-top: .05rem;
    }
    .acticve-old{
        width: 60%;
        height: auto;
        overflow: auto;
        float: left;
        text-align: left;
        font-size: .14rem;
        padding-top: .05rem;
        text-decoration: line-through;
    }
    .active-num{
        padding-left: .1rem;
        color: #999;
    }
</style>
