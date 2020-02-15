<template>
<div class="second">
    <div class="second-box">
      <img src="../../assets/images/yingxiong.png" alt="" class="image1">
      <img src="../../assets/images/lingdianyi.png" alt=""  class="image2">
      <van-button @click="jump"  color="#fe725b" class="second-modal-btn">请领取您的爱心捐助证书</van-button>
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
   width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #fbf1ee;
    padding: 0 30px;
    .second-box{
        width: 100%;
        margin: 0 auto;
        .image1{
          width: 177px;
        }
        .image2{
          width: 274px;
        }
        .second-modal-btn{
          height: 30px;
          line-height: 30px;
        }
    }
  }
</style>
