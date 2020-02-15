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
          <van-button type="danger" @click="jump"  color="#fe725b" class="home-modal-btn">点击为武汉捐款</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Home',
  components: {Button},
  props: {},
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  methods: {
    jump () {
      this.$router.push({path: 'finishDonation'})
    }
  },
  computed: { },
  watch: { }
}
</script>

<style scoped lang="less">
  .home{
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
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
           width: 320px;
          //  margin: 0 auto;
           z-index: 20;
           bottom: 20Px;
           left:50%;
         }
      }
    }
  }
</style>
