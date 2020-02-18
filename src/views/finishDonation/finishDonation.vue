<template>
<div class="second">
    <div class="second-box">
      <img src="../../assets/images/yingxiong.png" alt="" class="image1">
      <div class="second-hongbao">
        <div class="second-text">
           {{myDonationAmount}}元
        </div>
        <img src="../../assets/images/hongbao.png" alt=""  class="image2">
      </div>
      <div class="second-title">
        <div class="second-name vant-input">
            <!-- <span class="second-label">姓名：</span> -->
            <!-- <span class="second-control">郭红</span> -->
            <!-- <van-cell-group class="vant-input"> -->
              <van-field v-model="name" placeholder="" label="姓名" label-width="45" />
            <!-- </van-cell-group> -->
        </div>
      </div>
      <van-button @click="jump"  color="#fe725b" class="second-modal-btn">请领取您的爱心捐助证书</van-button>
      <div class="second-bottom">
          <div class="second-bottom-title">
            已有<span class="second-count">{{totalSib}}</span>位同胞
          </div>
          <div style="text-align:center">
            <img src="../../assets/images/wenanyi.png" alt="" class="image3">
            <img src="../../assets/images/wenaner.png" alt="" class="image4">
          </div>
      </div>
    </div>
</div>
</template>

<script>
import {addDonorApi, participateAndGetDonationInfoApi} from '@/api/api'
import { Toast } from 'vant'
export default {
  name: 'FinishDonation',
  components: {},
  props: {},
  data () {
    return {
      name: '',
      totalSib: '',
      myDonationAmount: ''
      // myDonationAmount
    }
  },
  created () { },
  mounted () {
    participateAndGetDonationInfoApi().then(res => {
      this.totalSib = res.totalSib
      this.myDonationAmount = res.myDonationAmount
    })
  },
  methods: {
    jump () {
      if (!this.name) {
        Toast('请填写名字')
        return
      }
      addDonorApi(this.name).then(() => {
        this.$router.push({path: 'certificate'})
      })
      // this.$router.push({path: 'certificate'})
      // this.$router.push({path: 'certificate'})
    }
  },
  computed: { },
  watch: { }
}
</script>

<style scoped lang="less">
  .second{
   width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #fbf1ee;
    padding: 0 30px;
    box-sizing: border-box;
    .second-box{
        width: 100%;
        text-align: left;
        .second-hongbao{
          text-align: center;
          position: relative;
          .second-text{
            height: 54px;
            line-height: 54px;
            font-size: 34px;
            font-weight: 800;
            position: absolute;
            top:50px;
            left:50%;
             transform: translate(-50%,0);
             color:linear-gradient(#f99a31,#fb2239);
          }
        }
        .image1{
          width: 177px;
          margin-top: 50px;
        }
        .image2{
          width: 274px;
          display: block;
          margin: 0 auto;
        }
        .second-modal-btn{
          height: 34px;
          line-height: 34px;
          border-radius: 15px;
          width: 100%;
          margin-bottom: 10px;
          font-weight: 800;
        }
        .second-title{
           width: 180px;
           margin: 0 auto;
           line-height: 20px;
            margin-bottom: 20px;
            font-size: 20px;
        }
        .second-label{
          // display: flex;
          text-align: center;
          // font-weight: 600;
          color: #000;
          // justify-content: center;
        }
        .second-control{
          display: inline-block;
          font-weight: 700;
          color: #000;
          // flex: 1;
          width: 100px;
          text-align: center;
          border-bottom: 1px solid #333
        }
        .second-bottom{
          box-shadow:0 0 10px #ccc ;
          background: #fbf1ee;
          border-radius: 8px;
          padding: 17px 8px;
          .image3{
            width: 100%;
            margin-bottom: 20px;
          }
          .image4{
              width: 267px;
          }
          .second-bottom-title{
            color: #000;
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 12px;
            // padding-left: 4.5px;
            .second-count{
              color: #fe725b;
              font-size: 20px;
              font-weight: 700;
            }
          }
        }
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
  }

</style>
