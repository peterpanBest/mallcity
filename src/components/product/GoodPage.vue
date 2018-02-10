<template>
    <div class="hauto">
        <swiper height="3.5rem" dots-position="center">
            <swiper-item class="swiper-demo-img" v-for="(item, index) in swiperList" :key="index"><img :src="item"></swiper-item>
        </swiper>
        <section class="good-title w95">{{goodTitle}}</section>
        <section class="price-div w95">
            <span class="price-icon-now">
                <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fe4070" d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" /></svg>
            </span>
            <span class="now-price">{{nowPrice}}</span>
            <span class="price-icon">
                <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" /></svg>
            </span>
            <span class="old-price">{{oldPrice}}</span>
        </section>
        <section class="w95">
            <span class="express">快递：{{express}}元</span>
            <span class="sale">月销{{saleNum}}笔</span>
            <span class="maker">{{maker}}</span>   
        </section>
        <line-height :type="1" />
        <line-height :type="2" />
        <line-height :type="3" />
        <line-height :type="4" />
        <section class="select-div w95">
            <span class="select-title">{{selectTitle}}</span>
            <div class="pre-div">
                <span class="select-pre"><img :src="preImg" alt=""></span>
            </div>
        </section>
        <line-height :type="5" />
        <line-height :type="6" />
        <line-height :type="7" />
        <line-height :type="8" />
        <select-com />
    </div>
</template>

<script>
    import { Swiper, GroupTitle, SwiperItem } from 'vux'
    import LineHeight from "@/components/coms/LineHeight"
    import SelectCom from "@/components/product/SelectCom"
    import http from "@/api/api"
    import api from "@/api/public" 

    export default {
        components: {
            Swiper,
            SwiperItem,
            GroupTitle,
            LineHeight,
            SelectCom
        },
        data () {
            return {
                preImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDBEMUQ1NzYxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDBEMUQ1NzcxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MEQxRDU3NDE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MEQxRDU3NTE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnEh02YAAAFpSURBVHjanNW7S8NgFMbhtAYHBxdBrZdF8I6bszQuTg6CW9FBoYODY+zgKoKriG5SxUGcdBEEFdFZ/4I2bV1dXBzE2++DtxCE4nc88NCE9j0naZIvmTiOh4IgOMQKKoGxstjHDO4x+Z8GBTwihztMWxu8YBYP6MK1jsi7gatXzOEKnbjUvncDV2+Yxzk6cIEFSwNX71jECdpxhiVLA1cfWMYB2lDGmqWBqy+FdpDBHkqWBq6+sYFN7W+Ld4NmbWFdDUs6moylgatdrOJTp1bW/+PdINDzUtCVclfmCYNZ461/iqK2p3BkbdCNWNvP7rQsDXpwiwk0kEc1NIbHFY5c2PdP7E2F683JzS9Dz/CYwm5y4nsj5VLhmiYnv38U/hEeVTjSp9ez0JcKJ5pca3WYYYvwiMKRzt1rPehPhauaXPddkVz4JhWOdL291sSB1OSKJjcsq/IxhhWOdI+b3gtFvVDy1rCrHwEGALDWT5nVls1TAAAAAElFTkSuQmCC",
                swiperList: [],
                goodTitle: "",
                nowPrice: "0.00",
                oldPrice: "0.00",
                express: "0.00",
                saleNum:"0",
                maker: "北京",
                selectTitle: "请选择分类"
            }
        },
        mounted() {
            let _para = this.$route.params.id
            console.log(_para)
            if(!_para){
                    this.$vux.toast.show({
                        text: "缺少参数 !",
                        type: "text",
                        width: "50%",
                        position: "middle",
                        time: 2000
                    })
            }else{
                http.post("/tm/data").then(res => {
                    let _temp = []
                    let _arr = ""
                    _temp = res.data.success.goodslist
                    _arr = this.findPara(_para,_temp)
                    this.goodTitle = _arr.longTitle
                    this.nowPrice = _arr.nowPrice
                     console.log(_arr)
                   this.swiperList = _arr.banner
                }).catch(err => {
                        this.$vux.toast.show({
                            text: err,
                            type: "text",
                            width: "50%",
                            position: "middle",
                            time: 1500
                        })
                    }
                )
            }
        },
        methods: {
            findPara: function(value,arr){
                let _len = arr.length;
                if(_len>0){
                    let _arrF = [];
                    let _arrL = [];
                    let _index = parseInt(_len/2);
                    _arrF = arr.slice(0, _index);
                    _arrL = arr.slice(_index, _len+1);
         
                    if(_arrF.length>0){
                        for(let i=0; i<_arrF.length; i++){
                            if(_arrF[i].id == value){
                                return _arrF[i];
                            }
                        }  
                    }

                    if(_arrL.length>0){
                        for(let i=0; i<_arrL.length; i++){
                            if(_arrL[i].id == value){
                                return _arrL[i];
                            }
                        }  
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/public.scss";

    .swiper-demo-img img{
        width: 100%;
        height: 3.5rem;
        color: #fff;
    }
    .good-title{
        font-weight: 400;
        font-size: 18px;
        padding: .05rem 0;
        line-height: .25rem;
    }
    .price-icon-now{
        width: .25rem;
        line-height: .43rem;
        display: block;
        font-size: .25rem;
        color: $primaryColor;
        float: left;
        text-align: right;
    }
    .now-price{
        display: block;
        width: .55rem;
        text-align: left;
        font-size: .22rem;
        color: $primaryColor;
        float: left;
    }
    .price-icon{
        display: block;
        width: .25rem;
        line-height: .43rem;
        font-size: .16rem;
        color: $primaryColor;
        float: left;
        text-align: right;
    }
    .old-price{
        display: block;
        width: .5rem;
        float: left;
        padding-top: .1rem;
        text-decoration:line-through;
        color: #333;
    }

    .express,{
        @include fontSpan;
    }
    .sale{
        @include fontSpan;
        text-align: center;
    }
    .maker{
        @include fontSpan;
        text-align: right;
    }

    .pre-div{
        width: .25rem;
        height: .45rem;
        float: right;
    }

    .select-title{
        height: .45rem;
        line-height: .45rem;
        width: 70%;
        float: left;
         display: table;
    }
    .select-pre{
        display: table-cell;
        height: .45rem;
        width: .25rem;
        text-align: center;
        vertical-align: middle;
    }
     .select-pre img{
          vertical-align: middle;
         width: .08rem;
         height: .15rem;
     }
</style>
