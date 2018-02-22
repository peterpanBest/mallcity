<template>
    <section class="select" :class="{transiton1:selectCon,transiton2:closeCondition}">
        <section class="bg-div"></section>
        <section class="box">
            <div class="header-div line-bot">
                <div class="img-box"><img src="../../../static/img/1341680_1000_1000.jpg" alt=""></div>
                <div class="info-div">
                    <p class="close-icon hauto" @click="closeSelectCom"><img :src="closeIcon" alt=""></p>
                    <div class="price-div hauto">
                        <span class="price-icon-now">
                            <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fe4070" d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" /></svg>
                        </span>
                        <span class="now-price">{{selectData.nowPrice}}</span>
                    </div>
                    <p class="num">库存：{{selectData.repoNum}}</p>
                    <p class="select-ino">已选：{{selectInfo}}</p>
                </div>
                <section class="lineDiv"></section>
            </div>
            <div class="select-type">
                <p class="type-title w95">颜色分类</p>
                <ul class="type-list w92">
                    <li class="type-item">A品正货</li>
                    <li class="type-item">A品正货</li>
                    <li class="type-item">A品正货</li>
                    <li class="type-item">A品正货</li>
                    <li class="type-item">A品正货</li>
                    <li class="type-item">A品正货</li>
                    <li class="type-item">A品正货</li>
                    <li class="type-item">A品正货</li>
                </ul>
            </div>
            <div class="count-div">
                <group>
                    <x-number :title="countTitle" :value="cartCount" :min="0" @on-change="change"></x-number>
                </group>
            </div>
            <footer class="footer hauto" v-show="selectCon">
                <span class="footer-left" @click="addToCart">加入购物车</span>
                <span class="footer-right">立即购买</span>
            </footer>
        </section>
    </section>
</template>

<script>
    import { Group, XNumber, XSwitch, Divider } from 'vux'
    import { mapActions } from 'vuex'

    export default {
        components: {
            XNumber,
            Group,
            XSwitch,
            Divider  
        },
        props: {
            selectData: {
                type: Object
            }
        },
        data() {
            return {
                closeIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAMAAAA0X5qLAAAAclBMVEUAAABdY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY21dY20tW12wAAAAJXRSTlMA+AoFS+zkdiWiUUKruYIW8V3Uxj4xv6+NHZRuaTgP581rLdhsW1bF6wAAAaBJREFUOMuVlVeWwyAMRWGMG3biErf0MqP9b3EQLqIkOYf3E6zcvMhCCOaokqch4QA8GU6yYl8UNTuwtGuiT+g5AU/J+S3etYCKx1T2WdbLdIwB1Xa+7R5QpYiMmCgBtXfMf0aNZq5HpvHxx2IHFboL9kbiDgCDQUdYhMOHQlUHLAtlMuGj8WMnRbSatn9CX2J9Gr3Fsk4Akq+bVSExu2HRCvZVBRYQF7caIF+LnVvFO56mJbscoL6pzxSAH+dQA5BkBvsLkC5LPi9bNKY3jV/bhmCrNGyzblXIzDidaWInM+uMPdXXjFl0j6tXTCxKPT7Rv2Q2XV8Z62NdAFKJ2T505qSLpq81YNx2eaC9ZC7Nkf2zwhLTVdGOuTTq4pwNFUK4Z7Ym2PIl9Qj7zoIjzAvf2c+5gVlceDl71Wg0JznRVA23zpclA0E01dnZwTNWuVsz542zg9QbtH9aBcc+snrD6jq5dgbRhdF1dj+na88RvTf62T4pt9weM9f2cDROSsgZDDrdIXMjZCIFzbqQKRoyn0Mmf8CdEnxbhd+DQTfsPweDSEtbXT+MAAAAAElFTkSuQmCC",
                selectInfo: "A品正货",
                nowPrice: "0.00",
                repoNum: "0",
                countTitle: "购买数量",
                closeCondition: false,
                goodCount: "",
                cartCount: 1
            }
        },
        methods: {
            ...mapActions(['addCart']),
            change (val) {
                this.goodCount = val;
            },
            closeSelectCom(){
                this.$store.dispatch("bgdivCondition",false)
                this.closeCondition = true
            },
            addToCart: function(){
               let selectedObj = {
                    id: "",
                    price: "",
                    title: "",
                    img:"",
                    count: 0
                }

                selectedObj.id = this.selectData.id
                selectedObj.price = this.selectData.nowPrice
                selectedObj.title = this.selectData.longTitle
                selectedObj.img = this.selectData.img
                selectedObj.count = this.goodCount
                console.log("data",JSON.stringify(selectedObj))
                this.addCart(selectedObj)
                //console.log(this.$store.state.cart.cart.length)
            }
        },
        computed: {
            selectCon(){
                return this.$store.state.bgdivCondition
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/public.scss";

    .select{
        position: fixed;
        top: 200%;
        height: 5rem;
        z-index: 999;
        background: rgba($color: #e7e4e4, $alpha: 0);
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .bg-div{
        width: 100%;
        height: 10%;
    }
    .box{
        width: 100%;
        height: 90%;
        background: white;
    }

    .header-div{
        height: 4rem;
        width: 100%;
        height: 1.3rem;
        position: relative;
        background: white;
    }

    .img-box{
        position: absolute;
         z-index: 1000;
        width: 1.3rem;
        height: 1.35rem;
        overflow: hidden;
        border-radius: .05rem;
        border: 2px solid #eee;
      
        left: .1rem;
        top: -.2rem;
    }
    .img-box img{
        width: 1.3rem;
        height: 1.35rem;
    }

    .info-div{
        width: 2.25rem;
        height: auto;
        overflow: hidden;
        float: right;
        padding-bottom: .2rem;
    }
    .close-icon img{
        width: .2rem;
        height: .2rem;
        float: right;
        margin: .05rem 0;
        margin-right: .05rem;
    }
    .price-icon-now{
        display: block;
        width: .15rem;
        height: .3rem;
        line-height: .26rem;
        float: left;
        font-size: .2rem;
        color: $primaryColor;
    }
    .now-price{
        display: block;
        width: 1.3rem;
        height: .3rem;
        line-height: .27rem;
        float: left;
        font-size: .17rem;
        padding-left: .05rem;
        text-align: left;
        color: $primaryColor;
    }
    .num, .select-ino{
        height: .2rem;
        line-height: .2rem;
        font-size: .15rem;
        text-align: left;
        color: #333;
    }

    .lineDiv{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10px;
        background: white;
    }

    .type-title{
        padding-top: .15rem;
        color: #333;
        font-size: .17rem;
    }

    .type-list{
        margin-top: .1rem;
    }

    .type-item{
        display: inline-block;
        height: .28rem;
        line-height: .28rem;
        text-align: center;
        margin-right: .1rem;
        background: #eee;
        padding: 0 .1rem;
        border-radius: .06rem; 
        margin-bottom: .15rem;
    }

    .count-div{
        height: .5rem;
        width: 100%;
    }

    .transiton1{
        transform: translateY(-200%);
        transition: all .5s ease;
     }
     .transiton2{
        bottom: 0;
        transition: all 1s ease;
     }
    
     .footer{
         position: fixed;
         bottom: 0;
         border-top: 1px solid #eee;
     }
     .footer-left{
         display: block;
         width: 50%;
         height: .45rem;
         line-height: .45rem;
         text-align: center;
         float: left;
         color: $primaryColor;
         background: white;
     }
     .footer-right{
         display: block;
         width: 50%;
         height: .45rem;
         line-height: .45rem;
         text-align: center;
         float: left;
         color: white;
         background: $primaryColor;
     }
</style>
