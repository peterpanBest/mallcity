<template>
    <div>
       <swiper-com :swiperList="swiperListData" style="margin-top:.02rem;" />
       <ul class="list">
            <li class="list-item" v-for="item in imgItemData">
               <img :src="item" alt="">
            </li>
       </ul>
       <line-height :type="1" />
       <ad-list :brandImg="imgListData" :brandTitle="brandtitle" />
       <line-height :type="2" />
       <line-height :type="3" />
       <ad-list :brandImg="tabListData" :brandTitle="tabTitle" />
       <height-div />
    </div>    
</template>

<script>
    import http from "@/api/api"
    import LineHeight from "@/components/coms/LineHeight"
    import AdList from "@/components/coms/AdList"
    import HeightDiv from "@/components/coms/HeightDiv"
    import SwiperCom from "@/components/coms/SwiperCom"

    export default {
        components: {
            SwiperCom,
            LineHeight,
            AdList,
            HeightDiv
        },
        data() {
            return {
                swiperListData: [],
                imgItemData: [],
                brandtitle:"今日特惠",
                imgListData: [],
                tabListData: [],
                tabTitle: "活动推荐"
            }
        },
        mounted() {
            http.post("/ms/data").then(res => {
                    let _temp = "";
                    _temp = res.data.success.qsSwiper
                    this.swiperListData = _temp;
                    this.imgItemData = res.data.success.qsItem
                    this.imgListData.push(_temp[3])
                    this.tabListData = res.data.success.adImg
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
        }
    }
</script>

<style scoped>
    ul.list{
        width: 95%;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
    }
    ul.list .list-item{
        width: .85rem;
        height: .85rem;
        float: left;
        margin: .05 0;
        margin-left: .04rem;
    }
    ul.list .list-item img{
        display: inline-block;
        width: .85rem;
        height: .85rem;
    }
</style>
