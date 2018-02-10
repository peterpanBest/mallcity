<template>
    <div>
        <ul class="hauto">
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test13"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">收藏商品</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test15"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">收藏品牌</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">浏览记录</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test5"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">开售提醒</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test10"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">心愿单</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test14"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">签到领钱</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test18"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">大姨妈</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test9"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">意见反馈</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test19"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">客服中心</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test4"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">售后服务</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test6"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">我的评价</span>
            </li>
            <li class="item">
                <span class="item-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-test8"></use>
                    </svg>
                </span>
                <span class="item-tile hauto">我的影票</span>
            </li>
        </ul>
    </div>    
</template>

<script>
    export default {
        components: {
          
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/scss/public.scss";

    .item{
       @include iconSpan2;
    }
    .item-icon{
        width: 100%;
        height: .4rem;
        line-height: .5rem;
        display: block;
       font-size: .4rem;
       text-align: center;
    }
    .item-tile{
        display: block;
        font-size: .15rem;
        text-align: center;
    }
</style>

