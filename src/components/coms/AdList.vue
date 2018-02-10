<template>
    <div>
        <div class="title-div">
            {{brandTitle}}
        </div>
        <ol class="brand-div hauto">
            <li class="brand-div-item" v-for="item in brandImg"><img :src="item" alt=""></li>
        </ol>
    </div>
</template>

<script>
    export default {
        components: {
            
        },
        props: {
            brandImg: {
                type: Array
            },
            brandTitle: {
                type: String
            }
        },
        data(){
            return {
               
            }
        }
    }
</script>

<style scoped>
    .title-div{
        width: 90%;
        margin: 0 auto;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        padding: .1rem;
        font-size: .17rem;
        background: url(http://f0.jmstatic.com/btstatic/h5/common/icon_title.png) no-repeat .7rem .13rem;
        background-size: .2rem .2rem;
    }
    .brand-div-item{
        width: 100%;
        height: 2.1rem;
        float: left;
        text-align: center;
    }
    .brand-div-item img{
        display: inline-block;
        width: 100%;
        height: 2.1rem;
    }
</style>
