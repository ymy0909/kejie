<template>
<div class="second">
    <div class="second-box">
      <img src="../../assets/images/yingxiong.png" alt="" class="image1">
      <img src="../../assets/images/lingdianyi.png" alt=""  class="image2">
      <div class="second-title">
        姓名：
        <div class="second-name">

        </div>
      </div>
      <van-button @click="jump"  color="#fe725b" class="second-modal-btn">请领取您的爱心捐助证书</van-button>
      <div>

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
        }
        .second-title{
          display: flex;
          width: 180px;
          line-height: 20px;
          text-align: center;
          font-weight: 600;
          color: #333;
          font-size: 20px;
          margin-bottom: 20px;
          .second-name{
            font-weight: 700;
            color: #333;
          }
        }
    }
  }
</style>
