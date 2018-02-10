<template>
    <div style="margin-top:.5rem;">
        <tab :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in listData" @click.native="changePage(index)" :key="index">{{item}}</tab-item>
        </tab>
    </div>   
</template>

<script>
    import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
    import { mapActions, mapGetters } from "vuex"
    const list = () => ['特卖', '免税店', '母婴', '轻奢', '服饰', '鞋包']

    export default {
        components: {
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem
        },
        data(){
            return {
                demo2: '美食',
                index: 0,
                listData: list()
            }
        },
        methods: {
            ...mapActions({
                changeTabCon: 'showTabCondition'
            }),
            changePage: function(value){
                switch (value) {
                    case 0:
                        this.$router.push({name: 'tm',params: {"token":"success"}});
                        break;
                    case 1:
                        this.$router.push({name: 'ms',params: {"token":"success"}});
                        break;
                    case 2:
                        this.$router.push({name: 'my',params: {"token":"success"}});
                        break;
                    case 3:
                        this.$router.push({name: 'qs',params: {"token":"success"}});
                        break;
                    case 4:
                        this.$router.push({name: 'fs',params: {"token":"success"}});
                        break;
                    case 5:
                        this.$router.push({name: 'xb',params: {"token":"success"}});
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .vux-tab .vux-tab-item{
        font-size: 16px!important;
    }
</style>
