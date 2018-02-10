<template>
    <div class="hauto line-bot" style="background: white;position: fixed;z-index:8888;top:0;">
        <div class="search-box">
            <div class="input-box">
                <icon type="search" class="search-icon"></icon>
                 <input type="text" class="search-inpt" placeholder="搜索商品" readonly="readonly">
            </div>
            <span class="login-div">登录</span>
        </div>
    </div>
</template>

<script>
    import { Box, Icon } from 'vux'

    export default {
        components: {
            Box,
            Icon
        }
    }
</script>

<style scoped>
    .search-box{
        width: 90%;
        height: auto;
        overflow: hidden;
        margin: .05rem auto;
        padding-bottom: .06rem;
    }
    .input-box{
        width: 80%;
        height: auto;
        overflow: hidden;
        background: #f5f5f5;
        border-radius: .2rem;
        float: left;
    }
    .search-icon{
        width: .4rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        float: left;
        font-size: 18px;
    }
    .search-inpt{
        width: 2rem;
        height: .3rem;
        margin-top: .05rem;
        float: right;
        border: none;
        cursor: none;
        outline: none;
        background: #f5f5f5;
        font-size: .18rem;
        float: left;
    }
    .search-inpt:empty:before{
		content: attr(placeholder);
		color:#b1b1b1;;
	}
	.search-inpt:focus:before{
		content:none;
	}
    .login-div{
        display: block;
        width: .6rem;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
        float: right;
        font-size: .18rem;
    }
</style>
