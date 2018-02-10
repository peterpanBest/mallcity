<template>
    <div>
        <ul class="list1 hauto">
            <li class="list1-item" v-for="item in liData">
                <span class="item-icon hauto"><img :src="item.img" alt=""></span>
                <span class="item-title hauto">{{item.title}}</span>
            </li>
        </ul>
        <ol class="list2 hauto">
            <li class="list2-item">
                <span class="item-num hauto">0个</span>
                <span class="item-num-title hauto">红包</span>
            </li>
            <li class="list2-item">
                <span class="item-num hauto">0张</span>
                <span class="item-num-title hauto">现金券</span>
            </li>
            <li class="list2-item">
                <span class="item-num hauto">0元</span>
                <span class="item-num-title hauto">聚美余额</span>
            </li>
            <li class="list2-item">
                <span class="item-num hauto">0元</span>
                <span class="item-num-title hauto">粉丝红包</span>
            </li>
            <li class="list2-item">
                <span class="item-num hauto">0元</span>
                <span class="item-num-title hauto">礼品卡</span>
            </li>
        </ol>
        <line-height :type="1" />
        <line-height :type="2" />
        <line-height :type="3" />
    </div>
</template>

<script>
    import LineHeight from "@/components/coms/LineHeight"

    export default {
        components: {
            LineHeight
        },
        data() {
            return {
                liData: [
                    {
                        img: "http://demo-test.su.bcebos.com/priceIcon1.png?authorization=bce-auth-v1%2F6c7031ec5ff84bd6b63eb606d9891933%2F2018-02-07T06%3A57%3A00Z%2F-1%2Fhost%2F1a7c4c494b5acdaa7d6cdc8ffc589a99d6b217ef538d16a8278412fb050f356f",
                        title: "代付款"
                    },
                    {
                        img: "http://demo-test.su.bcebos.com/priceIcon2.png?authorization=bce-auth-v1%2F6c7031ec5ff84bd6b63eb606d9891933%2F2018-02-07T06%3A57%3A23Z%2F-1%2Fhost%2Fd7524660033e47b6282193fc9903c889cd294d1b5b147459641da2ace5e19ea6",
                        title: "代发货"
                    },
                    {
                        img: "http://demo-test.su.bcebos.com/priceIcon2_.png?authorization=bce-auth-v1%2F6c7031ec5ff84bd6b63eb606d9891933%2F2018-02-07T06%3A57%3A38Z%2F-1%2Fhost%2F544686952200d955d12d9a7ec537070b25b81d8935d19a5e4ab7a17044af3dc5",
                        title: "待收货"
                    },
                    {
                        img: "http://demo-test.su.bcebos.com/priceIcon3.png?authorization=bce-auth-v1%2F6c7031ec5ff84bd6b63eb606d9891933%2F2018-02-07T06%3A57%3A52Z%2F-1%2Fhost%2F6fcc1c29d4f854084aa9a3cd1716ba676f64d24973c7252f900631460bb403da",
                        title: "待评价"
                    },
                    {
                        img: "http://demo-test.su.bcebos.com/priceIcon5.png?authorization=bce-auth-v1%2F6c7031ec5ff84bd6b63eb606d9891933%2F2018-02-07T06%3A58%3A05Z%2F-1%2Fhost%2F20bfd4ab2f9a6d06abe0fb3ac4181b3ed2f6d4f0227b2b6f71234d29d0f4ed60",
                        title: "退款/收货"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/scss/public.scss";

    .list1{
        margin-top: .1rem;
    }
    .list1-item, .list2-item{
        @include iconSpan1;
    }
    .item-icon{
        display: block;
        text-align: center;
    }
    .item-icon img{
        display: inline-block;
    }
    .item-title{
        display: block;
        text-align: center;
        font-size: .16rem;
    }

    .list2{
        margin-top: .15rem;
        margin-bottom: .2rem;
    }

    .item-num, .item-num-title{
        display: block;
        text-align: center;
        font-size: .16rem;
    }
</style>
