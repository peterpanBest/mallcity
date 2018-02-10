<template>
    <section class="select">
        <section class="bg-div"></section>
        <section class="header-div line-bot">
            <div class="img-div">
                <div class="img-box"><img src="../../../static/img/1341680_1000_1000.jpg" alt=""></div>
            </div>
            <div class="info-div">
                <span class="close-icon"></span>
                <div class="price-div">
                    <span class="price-icon-now">
                        <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fe4070" d="M783.6119140625001 167.56542968750006L575.0254882812499 463.25761718749993H739.4169921875v65.36689453125H547.9103515625v90.02460937500001H739.4169921875v66.18427734375001H547.9103515625v131.08710937499998H449.38144531250003V684.8333984374999H250.86464843749997v-66.18427734375001h198.516796875V528.6245117187499H250.86464843749997v-65.36689453125h169.3740234375L213.64560546874998 167.56542968750006h111.08935546875c96.53642578125 146.85029296874998 155.141015625 240.00644531250003 175.921875 279.39638671875h1.9924804687499997c7.046191406249999-16.225488281249998 26.33115234375-48.89091796875 57.786328125000004-97.9962890625L678.5711914062499 167.56542968750006h105.04072265625001z" /></svg>
                    </span>
                    <span class="now-price">{{nowPrice}}</span>
                </div>
                <p class="num"></p>
                <p class="select-ino">已选：{{selectInfo}}</p>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                selectInfo: "",
                nowPrice: ""
            }
        }
    }
</script>

<style lang="scss" scoped>
    .select{
        position: fixed;
        bottom: 0;
        height: 5rem;
        z-index: 999;
        background: rgba($color: #e7e4e4, $alpha: 0);
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .bg-div{
        width: 100%;
        height: 1rem;
        background: rgba($color: #333232, $alpha: .7)
    }

    .header-div{
        height: 4rem;
        width: 100%;
        height: 3rem;
        position: relative;
        background: white;
    }
    .img-div{
        width: 30%;
        height: auto;
        overflow: hidden;
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
    .img-div img{
        width: 1.3rem;
        height: 1.35rem;
    }
</style>
