<template>
    <div>
        <div class="box w95">
            <div class="left">
                <icon type="success" v-show="iconCon"  @click.native="cancelBtn" style="margin: 0 auto;float:left;margin-top:.06rem;margin-left: .05rem;"></icon>
                <icon type="circle" v-show="!iconCon"  @click.native="cancelBtn" style="margin: 0 auto;float:left;margin-top:.06rem;margin-left: .05rem;"></icon>
            </div>
            <span class="item-title">问妆化妆品热销网上电商</span>
            <div class="pre-icon"></div>
            <span class="edit">编辑</span>
        </div>
        <div class="w95">
            <div class="info-left">
                <icon type="success" v-show="iconCon"  @click.native="cancelBtn" style="float:left;margin-top:.4rem;margin-left: .05rem;"></icon>
                <icon type="circle" v-show="!iconCon"  @click.native="cancelBtn" style="float:left;margin-top:.4rem;margin-left: .05rem;"></icon>
            </div>
            <div class="info-right">
                <span class="good-img"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520143469316&di=57eb5edc2309a169f859b55bf089a1c8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F902397dda144ad3478d0f0a0daa20cf431ad85ad.jpg" alt=""></span>
                <div class="title-box">
                    <span class="good-title hauto">正品室外水泥地耐磨篮球牛皮质感真皮手感5号儿童7号学生翻毛篮球</span>
                    <span class="introduce hauto">升级款，7号，加厚耐磨，翻毛灰色【送大礼包】</span>
                    <div class="price-div w95">
                        <span class="price-icon-now">
                            <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fe4070" d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" /></svg>
                        </span>
                        <span class="now-price">{{nowPrice}}</span>
                        <span class="price-icon">
                            <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#333333" d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" /></svg>
                        </span>
                        <span class="old-price">{{oldPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Icon } from 'vux'
    import LineHeight from "@/components/coms/LineHeight"

    export default {
        components: {
            Icon
        },
        data() {
            return {
                iconCon: true,
                pre: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDBEMUQ1NzYxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDBEMUQ1NzcxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MEQxRDU3NDE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MEQxRDU3NTE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnEh02YAAAFpSURBVHjanNW7S8NgFMbhtAYHBxdBrZdF8I6bszQuTg6CW9FBoYODY+zgKoKriG5SxUGcdBEEFdFZ/4I2bV1dXBzE2++DtxCE4nc88NCE9j0naZIvmTiOh4IgOMQKKoGxstjHDO4x+Z8GBTwihztMWxu8YBYP6MK1jsi7gatXzOEKnbjUvncDV2+Yxzk6cIEFSwNX71jECdpxhiVLA1cfWMYB2lDGmqWBqy+FdpDBHkqWBq6+sYFN7W+Ld4NmbWFdDUs6moylgatdrOJTp1bW/+PdINDzUtCVclfmCYNZ461/iqK2p3BkbdCNWNvP7rQsDXpwiwk0kEc1NIbHFY5c2PdP7E2F683JzS9Dz/CYwm5y4nsj5VLhmiYnv38U/hEeVTjSp9ez0JcKJ5pca3WYYYvwiMKRzt1rPehPhauaXPddkVz4JhWOdL291sSB1OSKJjcsq/IxhhWOdI+b3gtFvVDy1rCrHwEGALDWT5nVls1TAAAAAElFTkSuQmCC",
                nowPrice: 99.99,
                oldPrice: 199.00
            }
        },
        props: {

        },
        methods: {
            cancelBtn(){
                this.iconCon = !this.iconCon
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box{
        background: white;
    }
    .left{
        width: .45rem;
        height: .35rem;
        float: left;
    }
    .item-title{
        display: inline-block;
        height: .35rem;
        line-height: .35rem;
        font-size: .15rem;
        float: left;
    }
    .pre-icon{
       float: left;
        width: .2rem;
        height: .35rem;
        text-align: center;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDBEMUQ1NzYxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDBEMUQ1NzcxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MEQxRDU3NDE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MEQxRDU3NTE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnEh02YAAAFpSURBVHjanNW7S8NgFMbhtAYHBxdBrZdF8I6bszQuTg6CW9FBoYODY+zgKoKriG5SxUGcdBEEFdFZ/4I2bV1dXBzE2++DtxCE4nc88NCE9j0naZIvmTiOh4IgOMQKKoGxstjHDO4x+Z8GBTwihztMWxu8YBYP6MK1jsi7gatXzOEKnbjUvncDV2+Yxzk6cIEFSwNX71jECdpxhiVLA1cfWMYB2lDGmqWBqy+FdpDBHkqWBq6+sYFN7W+Ld4NmbWFdDUs6moylgatdrOJTp1bW/+PdINDzUtCVclfmCYNZ461/iqK2p3BkbdCNWNvP7rQsDXpwiwk0kEc1NIbHFY5c2PdP7E2F683JzS9Dz/CYwm5y4nsj5VLhmiYnv38U/hEeVTjSp9ez0JcKJ5pca3WYYYvwiMKRzt1rPehPhauaXPddkVz4JhWOdL291sSB1OSKJjcsq/IxhhWOdI+b3gtFvVDy1rCrHwEGALDWT5nVls1TAAAAAElFTkSuQmCC") no-repeat center;
        background-size: .1rem .14rem;
    }
    .edit{
        display: block;
        float: right;
        height: .35rem;
        line-height: .35rem;
        width: .3rem;
        font-size: .15rem;
    }

    .info-left{
        width: .45rem;
        height: 1.1rem;
        float: left;
    }
    .info-right{
        width: 3rem;
        height: 1rem;
        float: right;
    }

    .good-img{
        display: block;
        width: .7rem;
        height: .7rem;
        float: left;
        margin-top: .15rem;
    }
    .good-img img{
        width: 100%;
        height: 100%;
    }
    .title-box{
        width: 2.2rem;
        float: right;
        height: auto;
        overflow: hidden;
    }

    .good-title{
        display: block;
        font-size: .13rem;
        line-height: .18rem;
    }
    .introduce{
            color:lightgrey;
    }
</style>
