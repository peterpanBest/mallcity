<template>
  <div class="hauto"> 
        <index-top />  
        <index-tab />
    <transition :name="transitionName">    
        <router-view class="child-view" />
    </transition>
    <keep-alive>  
        <tabBar />
    </keep-alive>
  </div>
</template>

<script>
    import tabBar from "@/components/coms/TabBar"
    import IndexTop from "@/components/coms/IndexTop"
    import IndexTab from "@/components/coms/IndexTab"

    import { mapActions, mapGetters, mapState } from "vuex"
import { setTimeout } from 'timers';

    export default {
        components: {
            IndexTop,
            IndexTab,
            tabBar
        },
        data() {
             return {
                 transitionName: 'slide-left'
             }
        },
        created() {
            this.$router.push({name: 'tm'})
        },
        computed: mapState({
    
        }),
        methods: {
            ...mapActions({
                
            })
        },
        watch: {  
            
        }  
    }
</script>

<style scoped>
    .child-view {  
        position: absolute;  
        left: 0;  
        top: 1rem; 
        overflow: hidden;
        z-index: 500; 
        width: 100%;        
        -webkit-transition: opacity .8s linear;
        -moz-transition: opacity .8s linear;
        -o-transition: opacity .8s linear;
        transition: opacity .8s linear;
    }  
    .slide-left-enter, .slide-right-leave-active {  
        opacity: 0;  
        /* -webkit-transform: translate(30px, 0);  
        transform: translate(30px, 0);   */
    }  
    .slide-left-leave-active, .slide-right-enter {  
        opacity: 0;  
        /* -webkit-transform: translate(-30px, 0);  
        transform: translate(-30px, 0);   */
    }  
</style>
