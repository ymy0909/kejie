<template>
<div class="receive">
     <img src="../../assets/images/lingquchenggong.png" alt="" class="image1">
     <img src="../../assets/images/again.png" alt="" class="image2" >
     <img src="../../assets/images/banner.png" alt="" class="image3">
</div>
</template>

<script>
export default {
  name: 'Receive',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  methods: {

  },
  computed: { },
  watch: { }
}
</script>

<style lang="less" scoped>
  .receive{
      width: 100vw;
      height: 100vh;
      position: relative;
      z-index: 1;
      background: #fbf1ee;
      // padding: 0 30px;
      box-sizing: border-box;
      text-align: center;
      .image1{
          width: 130px;
          padding-top: 72px;
          margin-bottom: 58px;
      }
      .image2{
          width: 297px;
          margin-bottom: 60px;
      }
      .image3{
          width: 357px;
      }
  }
</style>
