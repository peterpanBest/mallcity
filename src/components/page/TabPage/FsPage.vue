<template>
    <div>
       <ad-list :brandImg="imgListData" :brandTitle="brandtitle" />
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
                brandtitle:"今日服饰特惠",
                imgListData: []
            }
        },
        mounted() {
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
