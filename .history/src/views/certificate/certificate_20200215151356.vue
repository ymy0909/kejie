<template>
<div class="certificate">
    <div class="certificate-jiangzhuang">
       <img src="../../assets/images/jiangzhuang.png" alt="">
    </div>
    <div class="certificate-erweima">
       <div>
        <img src="../../assets/images/erweima.png" alt="">
        <div>

        </div>
       </div>
    </div>
    <van-button @click="jump"  color="#fe725b" class="certificate-modal-btn">点击领取防疫套餐</van-button>
</div>
</template>

<script>
export default {
  name: 'Certificate',
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
      this.$router.push({path: 'suit'})
    }
  },
  computed: { },
  watch: { }
}
</script>

<style scoped lang="less">
  .certificate{
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #fbf1ee;
    padding: 0 30px;
    box-sizing: border-box;
    padding-top: 84px;
    .certificate-modal-btn{
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          width: 330px;
          // margin-bottom: 10px;
    }
    .certificate-jiangzhuang{
        box-shadow:0 0 10px #ccc ;
        background: #fbf1ee;
        border-radius: 8px;
        padding: 8px;
        box-sizing: border-box;
        img{
          width: 100%;
        }
    }
    .certificate-erweima{
        box-shadow:0 0 10px #ccc ;
        background: #fbf1ee;
        border-radius: 8px;
        padding: 8px;
        box-sizing: border-box;
        img{
          width: 100%;
        }
    }
  }
</style>
