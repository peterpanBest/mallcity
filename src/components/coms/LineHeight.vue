<template>
        <div class="line-height" :index="type"></div>
</template>


<script>
    export default {
        data() {
            return {
                
            };
        },
        props: {
            type: {
                type: Number
            }
        }
    }
</script>

<style scoped>
    .line-height{
        width: 100%;
        height: 3px;
        background: #eee;
    }
</style>
