<template>
  <div class="home">
    <div class="home-modal">
      <div class="home-modal-content">
          <img src="../../assets/images/modal_close.png" alt="">
          <img src="../../assets/images/modal.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  created () { },
  mounted () { },
  methods: { },
  computed: { },
  watch: { }
}
</script>

<style scoped lang="less">
  .home{
    width: 100%;
    height: 100vh;
    position: relative;
    .home-modal{
     position: absolute;
     top:50%;
     left:50%;
     transform: translate(-50%,-50%);
     width: 100%;
    //  height: 337Px;
      .home-modal-content{
        position: relative;
        width: 100%;
        img{
          width: 100%
         }
      }
    }
  }
</style>
