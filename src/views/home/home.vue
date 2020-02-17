<template>
  <div class="home">
    <div class="home-modal">
      <div class="home-modal-content">
          <!-- <img src="../../assets/images/close_modal.png" alt="" class=""> -->
          <!-- home-modal-content-close -->
          <div class="home-modal-content-close">
                <div class="home-modal-content-close-item">
                    <img src="../../assets/images/close.png" alt="">
                </div>
          </div>
          <img src="../../assets/images/modal.png" alt="" class="home-modal-content-manipic">
          <van-button @click="jump"  color="#fe725b" class="home-modal-btn">点击为武汉捐款</van-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { participateAndGetDonationInfoApi } from '@/api/api.js'
export default {
  name: 'Home',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () { },
  mounted () {
    // 原生app调用h5方法，iosToH5是methods中定义的方法名。
    // const vm = this
    // this.$bridge.registerhandler('iosToH5', (data, responseCallback) => {
    //   // data是原生app传递给h5的参数
    //   vm.native_data = data
    // })
    this.goNative()
  },
  methods: {
    jump () {
      // participateAndGetDonationInfoApi().then(res => {
      //   // console.log(res)
      //   this.$router.push({path: 'finishDonation'})
      // })
      this.$router.push({path: 'finishDonation'})
    },
    participate () {

    },
    // h5调用原生方法，testWebViewBridge为原生app定义的方法名。action为h5传递给原生app的参数，可以为多个。data为原生app传递给h5参数
    goNative () {
      const vm = this
      this.$bridge.callhandler(
        'getUserId',
        // action: ''
        { },
        data => {
          vm.ddd = data
          // 处理返回数据
        }
      )
    },
    // h5注册方法，供app调用
    iosToH5 () {

    }
  },
  computed: { },
  watch: { }
}
</script>

<style scoped lang="less">
  .home{
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #fbf1ee;
    box-sizing: border-box;
    .home-modal{
     position: absolute;
     top:50%;
     left:50%;
     transform: translate(-50%,-50%);
     width: 100%;
     z-index: 10;
    //  height: 337Px;
      .home-modal-content{
        position: relative;
        width: 100%;
        .home-modal-content-manipic{
          width: 100%
         }
         .home-modal-content-close{
           position: absolute;
           top: -4px;
           right: 45px;
           z-index: 20;
            .home-modal-content-close-item{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: #fbf1ee;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 0 10px #ccc;
                img{
                  width: 25px;
                  height: 25px;
                  // vertical-align: middle
                }
           }
         }
         .home-modal-btn{
           position: absolute;
           width: calc(100vw - 60px);
          //  margin: 0 auto;
           z-index: 20;
           left:50%;
           transform: translate(-50%,0);
           height: 34px;
           line-height: 34px;
           bottom: 40px;
           border-radius: 15px;
           font-weight: 800;
         }
      }
    }
  }
</style>
