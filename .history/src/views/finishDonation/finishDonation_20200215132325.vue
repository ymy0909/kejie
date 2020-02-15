<template>
<div class="second">
    <div class="second-box">
      <img src="../../assets/images/yingxiong.png" alt="">
      <img src="../../assets/images/lingdianyi.png" alt="">
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
    background: #fbf1ee;
    padding: 0 30px;
    .second-box{
        width: 100%;
        margin: 0 auto;
    }
  }
</style>
