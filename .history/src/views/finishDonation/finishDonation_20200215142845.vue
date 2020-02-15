<template>
<div class="second">
    <div class="second-box">
      <img src="../../assets/images/yingxiong.png" alt="" class="image1">
      <img src="../../assets/images/lingdianyi.png" alt=""  class="image2">
      <div class="second-title">
        <div class="second-name">
            <span class="second-label">姓名：</span>
            <span class="second-control">郭红</span>
        </div>
      </div>
      <van-button @click="jump"  color="#fe725b" class="second-modal-btn">请领取您的爱心捐助证书</van-button>
      <div class="second-bottom">
          已有<span class="second-count"></span>
          <div style="text-align:center">
            <img src="../../assets/images/wenanyi.png" alt="" class="image3">
            <img src="../../assets/images/wenaner.png" alt="" class="image4">
          </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'FinishDonation',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  methods: {
    jump () {
      this.$router.push({path: 'certificate'})
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
        .image1{
          width: 177px;
          margin-top: 71px;
        }
        .image2{
          width: 274px;
          display: block;
          margin: 0 auto;
        }
        .second-modal-btn{
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          width: 100%;
          margin-bottom: 10px;
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
          padding: 17px 0;
          .image3{
            width: 296px;
            margin-bottom: 27px;
          }
          .image4{
              width: 267px;
          }
        }
    }
  }
</style>
