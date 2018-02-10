<template>
    <div>
        <ul class="tab-div r95">
            <li class="tab-item" v-for="item in tabImg">
                <img :src="item" alt="">
            </li>
        </ul>
        <line-height :type="1" />
        <brand-list :brandImg="brandImgData" :brandTitle="title1" />
        <ad-list :brandImg="adImgData" :brandTitle="title2" />
        <height-div />
    </div>
</template>

<script>
    import http from "@/api/api"
    import LineHeight from "@/components/coms/LineHeight"
    import BrandList from "@/components/coms/BrandList"
    import AdList from "@/components/coms/AdList"
    import HeightDiv from "@/components/coms/HeightDiv"
    import { mapState, mapActions, mapGetters } from "vuex"

    export default {
        components: {
            LineHeight,
            BrandList,
            AdList,
            HeightDiv
        },
        data(){
            return {
                tabImg: "",
                brandImgData: [],
                title1: "全球热销母婴品牌",
                adImgData: [],
                title2: "疯抢专场 早10点上新"
            }
        },
        mounted () {
            http.post("/ms/data").then(res => {
                    let _temp = "";
                    _temp = res.data.success.muyin
                    this.tabImg = _temp;
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
                    _temp = res.data.success.muyinBrand
                    this.brandImgData = _temp;
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
                    this.adImgData = _temp;
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
        },
        methods: {
            getObj: function(){
                let _obj = this.$store.state.tmGoodsList
                alert(JSON.stringify(_obj))
                this.getGoodsDetail
            }
        },
        computed: {
            ...mapState({
                tmGoodsList: "tmGoodsList"
            }),
            ...mapGetters([
                'getGoodsDetail'
            ])
        }
    }
</script>

<style scoped>
    .tab-div{
        margin: .05rem auto;
    }
    .tab-item{
        width: 1.7rem;
        height: .8rem;
        float: left;
    }
    .tab-item:nth-of-type(2n-1){
        margin-right: .1rem;
    }
    .tab-item img {
        display: inline-block;
        width: 100%;
        padding: 0;
    }
</style>
