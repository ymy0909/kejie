<template>
  <div class="home">
    <div class="home-modal">
      sjsls
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
     width: 100
    }
  }
</style>
