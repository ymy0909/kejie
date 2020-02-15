<template>
<div class="certificate">
    <div class="certificate-jiangzhuang">
     <img src="../../assets/images/jiangzhuang.png" alt="">
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
    .certificate-modal-btn{
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          width: 330px;
          // margin-bottom: 10px;
    }
  }
</style>
