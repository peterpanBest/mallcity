<template>
    <div>
         <div class="title-div">
            {{brandTitle}}
        </div>
        <ol class="brand-div hauto">
            <li class="brand-div-item" v-for="item in brandImg"><img :src="item" alt=""></li>
        </ol>
        <line-height :type="2" /> 
    </div>
</template>

<script>
    import LineHeight from "@/components/coms/LineHeight"

    export default {
        components: {
            LineHeight
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
        width: 79%;
        margin: 0 auto;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        padding: .1rem;
        font-size: .17rem;
        background: url(/static/icon/fire.png) no-repeat .7rem .13rem;
        background-size: .2rem .2rem;
    }
    .brand-div-item{
        width: 25%;
        height: .8rem;
        float: left;
        text-align: center;
    }
    .brand-div-item img{
        display: inline-block;
        width: 80%;
        height: .8rem;
    }
</style>
