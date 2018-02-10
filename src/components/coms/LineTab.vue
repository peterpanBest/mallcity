<template>
  <div class="hauto line-bot">
      <div class="tab-div">
          <span class="tab-left">{{leftTitle}}</span>
          <span class="tab-title">{{rightTitle}}</span>
          <div class="pre"><img :src="preImg" alt=""></div>
      </div>
  </div>
</template>

<script>

    export default {
        data() {
            return {
               preImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDBEMUQ1NzYxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDBEMUQ1NzcxNzc4MTFFN0FGQ0VGQjc2NkZCMkE2OTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MEQxRDU3NDE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MEQxRDU3NTE3NzgxMUU3QUZDRUZCNzY2RkIyQTY5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnEh02YAAAFpSURBVHjanNW7S8NgFMbhtAYHBxdBrZdF8I6bszQuTg6CW9FBoYODY+zgKoKriG5SxUGcdBEEFdFZ/4I2bV1dXBzE2++DtxCE4nc88NCE9j0naZIvmTiOh4IgOMQKKoGxstjHDO4x+Z8GBTwihztMWxu8YBYP6MK1jsi7gatXzOEKnbjUvncDV2+Yxzk6cIEFSwNX71jECdpxhiVLA1cfWMYB2lDGmqWBqy+FdpDBHkqWBq6+sYFN7W+Ld4NmbWFdDUs6moylgatdrOJTp1bW/+PdINDzUtCVclfmCYNZ461/iqK2p3BkbdCNWNvP7rQsDXpwiwk0kEc1NIbHFY5c2PdP7E2F683JzS9Dz/CYwm5y4nsj5VLhmiYnv38U/hEeVTjSp9ez0JcKJ5pca3WYYYvwiMKRzt1rPehPhauaXPddkVz4JhWOdL291sSB1OSKJjcsq/IxhhWOdI+b3gtFvVDy1rCrHwEGALDWT5nVls1TAAAAAElFTkSuQmCC"
            }
        },
        props: {
            leftTitle: {
                type: String
            },
            rightTitle: {
                type: String
            }
        }
    }
</script>

<style scoped>
    .tab-div{
        width: 3.4rem;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
    }
    .tab-left{
       display: block;
       width: 2rem;
       height: .4rem;
       line-height: .4rem;
       text-align: left;
       float: left;
    }
    .tab-title{
        display: block;
       width: 1.2rem;
       height: .4rem;
       line-height: .4rem;
       text-align: right;
       float: left;
    }
    .pre{
        float: right;
        width: .2rem;
        height: .4rem;
        text-align: right;
    }
    .pre img{
        display: inline-block;
        width: .08rem;
        height: .15rem;
        margin-top: .11rem;
    }
</style>
