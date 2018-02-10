<template>
    <div>
        <swiper :aspect-ratio="300/800">
            <swiper-item class="swiper-demo-img" v-for="(item, index) in swiperList" :key="index"><img :src="item"></swiper-item>
        </swiper>
    </div>
</template>

<script>
    import { Swiper, GroupTitle, SwiperItem } from 'vux'
    
    export default {
        components: {
            Swiper,
            SwiperItem,
            GroupTitle
        },
        data () {
            return {
                
            }
        },
        props: {
            swiperList:{
                type: Array
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
