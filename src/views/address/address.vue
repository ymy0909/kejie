<template>
<div class="address">
     <img src="../../assets/images/songhuoshangmen.png" alt="" class="image1">
     <!-- <img src="../../assets/images/again.png" alt="" class="image2"> -->
     <div class="input-title">
          <div class="vant-input">
              <van-field v-model="address" placeholder="" label="收件地址" label-width="60" />
        </div>
     </div>
     <van-button @click="jump()"  color="#fe725b" class="address-btn">请领取您的爱心捐助证书</van-button>
     <div class="address-title1">
        传递小爱，成就大爱
     </div>
     <div class="address-title2">
        已有{{count}}位用户在剋街与您同行
     </div>
     <img src="../../assets/images/banner.png" alt="" class="image3">
</div>
</template>

<script>
import {atoReceiveN95Api, receiveN95Api} from '@/api/api'
import { Toast } from 'vant'
export default {
  name: 'Receive',
  components: {},
  props: {},
  data () {
    return {
      address: '',
      count: 0
    }
  },
  created () { },
  mounted () {
    atoReceiveN95Api().then(res => {
      console.log(res)
      // this.count = res.inviteNumber
      this.count = res.totalReceiveMaskSib
    })
  },
  methods: {
    jump () {
      if (!this.address) {
        Toast('请填写地址')
        return
      }
      receiveN95Api(this.address).then(res => {
        // this.$router.push({path: 'receive'})
      })
      this.$router.push({path: 'receive'})
    }
  },
  computed: { },
  watch: { }
}
</script>

<style lang="less" scoped>
  .address{
      width: 100vw;
      height: 100vh;
      position: relative;
      z-index: 1;
      background: #fbf1ee;
      // padding: 0 30px;
      box-sizing: border-box;
      text-align: center;
      .image1{
          width: 357px;
          padding-top: 34px;
          margin-bottom: 48px;
      }
      .image2{
          width: 297px;
          margin-bottom: 60px;
      }
      .image3{
          width: 357px;
      }
      /deep/  .van-cell__value{
          border-bottom: 1px solid #000;
          font-size: 14px;
        }
      /deep/ .van-field__label{
          color: #000;
          font-weight: 600;
          font-size: 14px;
        }
      /deep/ .van-field{
          padding-top: 0;
          padding-bottom: 0;
          background: transparent;
      }
      .input-title{
           width: 250px;
           margin: 0 auto;
           line-height: 20px;
            margin-bottom: 15px;
            font-size: 20px;
        }
        .address-title1{
            color: #fe725b;
            font-size: 16px;
            line-height: 18px;
            text-align: center
        }
        .address-title2{
            color: #fe725b;
            font-size: 18px;
            line-height: 20px;
            text-align: center;
            margin-bottom: 40px;
        }
        .address-btn{
          height: 34px;
          line-height: 34px;
          border-radius: 15px;
          width: 330px;
          margin-bottom: 15px;
          font-weight: 800;
        }
  }
</style>
