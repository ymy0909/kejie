<template>
  <div class="home">
    <div class="home-modal">
      <div class="home-modal-content">
          <!-- <img src="../../assets/images/close_modal.png" alt="" class=""> -->
          <!-- home-modal-content-close -->
          <div class="home-modal-content-close">
                <div class="home-modal-content-close-item">
                    <img src="../../assets/images/close.png" alt="">
                </div>
          </div>
          <img src="../../assets/images/modal.png" alt="" class="home-modal-content-manipic">
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
  methods: {
    jump () {
      this.$router.push({path: 'finishDonation'})
    }
  },
  computed: { },
  watch: { }
}
</script>

<style scoped lang="less">
  .home{
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    .home-modal{
     position: absolute;
     top:50%;
     left:50%;
     transform: translate(-50%,-50%);
     width: 100%;
     z-index: 10;
     height: 337Px;
      .home-modal-content{
        position: relative;
        width: 100%;
        .home-modal-content-manipic{
          width: 100%
         }
         .home-modal-content-close{
           position: absolute;
           top: 0;
           right: 60px;
           width: 103px;
           height: 103px;
           z-index: 20;
         }
         .home-modal-content-close-item{

         }
      }
    }
  }
</style>
