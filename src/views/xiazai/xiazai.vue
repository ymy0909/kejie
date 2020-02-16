<template>
<div class="xiazai">
  <div class="xiazai-box">
    <div class="xiazai-text" v-if="!loading">
        <div class="xiazai-text-item xiazai-text-item1">
           <div class="xiazai-text-item-label">
            确诊病例
           </div>
           <div class="xiazai-text-item-progress" :style="{width:160/37.5+'rem'}">

           </div>
           <div>
           {{diagnosed}}
           </div>
        </div>
        <div class="xiazai-text-item xiazai-text-item2">
          <div class="xiazai-text-item-label">
            疑似病例
           </div>
           <div class="xiazai-text-item-progress" :style="{width:160/37.5*(suspect/diagnosed)+'rem'}">

           </div>
           <div>
           {{suspect}}
           </div>
        </div>
        <div class="xiazai-text-item xiazai-text-item3">
          <div class="xiazai-text-item-label">
            治愈病例
           </div>
           <div class="xiazai-text-item-progress" :style="{width:160/37.5*(cured/diagnosed)+'rem'}">

           </div>
           <div>
           {{cured}}
           </div>
        </div>
        <div class="xiazai-text-item xiazai-text-item4">
          <div class="xiazai-text-item-label">
            死亡病例
           </div>
           <div class="xiazai-text-item-progress" :style="{width:160/37.5*(death/diagnosed)+'rem'}">

           </div>
           <div>
           {{death}}
           </div>
        </div>
    </div>
   <img src="../../assets/images/homebg.png" alt="" class="home-bg">
   <img src="../../assets/images/n95.png" alt="" class="xiazai-n95" @click="jump">
  </div>
</div>
</template>

<script>
import {yiqingItemApi} from '@/api/api'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      diagnosed: 44766,
      suspect: 16067,
      cured: 5034,
      death: 1116,
      loading: true
    }
  },
  created () { },
  mounted () {
    yiqingItemApi().then(res => {
      this.diagnosed = res.diagnosed
      this.suspect = res.suspect
      this.cured = res.cured
      this.death = res.death
      this.loading = false
    })
  },
  methods: {
    jump () {
      window.open('https://www.baidu.com') // 在新标签页打开
      window.location.href = 'https://www.baidu.com' // 在原标签页打开
    }
  },
  computed: { },
  watch: { }
}
</script>

<style lang="less" scoped>
  .xiazai{
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #fbf1ee;
    // padding: 0 30px;
    box-sizing: border-box;
    .home-bg{
      width: 100%;
    }
    .xiazai-n95{
      position: absolute;
      bottom: 54px;
      transform: translate(-50%,0);
      left: 50%;
      width: 280px;
    }
    .xiazai-box{
      width: 100%;
      position: relative;
      .xiazai-text{
          position: absolute;
          // background: pink;
          width: 314px;
          height: 130px;
          top:420px;
          left:50%;
          text-align: left;
          transform: translate(-50%,0);
          padding: 10px 0 10px 10px;
          .xiazai-text-item{
             display: flex;
             align-items: center;
             margin-bottom: 14px;
             font-size: 16px;
             line-height: 22px;
             height: 22px;
             .xiazai-text-item-progress{
               height: 22px;
               margin-left: 8px;
               margin-right: 8px;
               border-radius: 11px;
               box-shadow:0 0 5px #666 ;
             }
             .xiazai-text-item-label{
               font-weight: 700;
             }
          }
          .xiazai-text-item:last-child{
            margin-bottom: 0;
          }
          .xiazai-text-item1{
              color:#a51b16;
              .xiazai-text-item-progress{
               background-image:linear-gradient(to right,#fafafa,#a51b16);
               border: 1px solid #a51b16;
             }
          }
          .xiazai-text-item2{
              color:#fe6522;
              .xiazai-text-item-progress{
               background-image:linear-gradient(to right,#fafafa,#fe6522);
               border: 1px solid #fe6522;
             }
          }
          .xiazai-text-item3{
              color:#29995e;
              .xiazai-text-item-progress{
               background-image:linear-gradient(to right,#fafafa,#29995e);
               border: 1px solid #29995e;
             }
          }
          .xiazai-text-item4{
              color:#333333;
              .xiazai-text-item-progress{
               background-image:linear-gradient(to right,#fafafa,#333333);
               border: 1px solid #333333;
             }
          }
      }
    }
  }
</style>
