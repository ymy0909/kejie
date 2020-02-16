<template>
<div class="certificate">
    <div class="certificate-box">
      <div class="certificate-code">
          邀请码：{{code}}
      </div>
      <div class="certificate-jiangzhuang">
        <div class="certificate-name">
            {{name}}
        </div>
        <img src="../../assets/images/jiangzhuang.png" alt="">
      </div>
      <div class="certificate-erweima">
        <div class="certificate-erweima-box">
          <img src="../../assets/images/erweima.png" alt="">
          <div class="certificate-erweima-box-content">
            <div class="certificate-erweima-box-content1">
              剋街APP将以您的名义为韩红
              基金会捐款，爱心驿使用户均
              可免费领取免疫套装一份。
            </div>
            <div class="certificate-erweima-box-content2">
              N95型口罩*1、便携喷雾式75%乙醇 消毒液30ml装*1）
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="certificate-changan">
      长按上方证书 保存图片
    </div>
    <van-button @click="jump"  color="#fe725b" class="certificate-modal-btn">点击领取防疫套餐</van-button>
</div>
</template>

<script>
import { participateAndGetDonationInfoApi } from '@/api/api.js'
export default {
  name: 'Certificate',
  components: {},
  props: {},
  data () {
    return {
      code: '',
      name: ''
    }
  },
  created () { },
  mounted () {
    participateAndGetDonationInfoApi().then(res => {
      this.code = res.myInviteCode
      this.name = res.name
    })
  },
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
    // padding: 0 30px;
    box-sizing: border-box;
    padding-top: 60px;
    .certificate-box{
      background-image: url('../../assets/images/zhengshubeijing.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center center;
      width: 370px;
      height: 433px;
      margin: 0 auto;
      box-sizing: border-box;
      margin-bottom: 14px;
      .certificate-code{
        padding-top: 20px;
        color: #FBF1EF;
        font-size: 15px;
        margin-bottom: 5px;
        font-weight: 800;
      }
    }
    .certificate-modal-btn{
          height: 34px;
          line-height: 34px;
          border-radius: 15px;
          width: 330px;
          font-weight: bold;
          // margin-bottom: 10px;
    }
    .certificate-jiangzhuang{
        // box-shadow:0 0 10px #ccc ;
        // background: #fbf1ee;
        // border-radius: 8px;
        // padding: 8px;
        // box-sizing: border-box;
        // margin-bottom: 48px;
        text-align: center;
        margin-bottom: 22px;
        position: relative;
        .certificate-name{
          position: absolute;
          color: #000;
          font-weight: bolder;
          font-size: 12px;
          left: 75px;
          top: 78px;
        }
        img{
          width: 308px;
        }
    }
    .certificate-erweima{
        // box-shadow:0 0 10px #ccc ;
        // background: #fbf1ee;
        // border-radius: 8px;
        // padding: 25px;
        box-sizing: border-box;
        width: 308px;
        margin: 0 auto;
        // margin-bottom: 48px;
        // img{
        //   width: 100%;
        // }
        .certificate-erweima-box{
            display: flex;
            align-items: center;
            img{
              width: 96px;
              margin-right: 12px;
            }
            .certificate-erweima-box-content{
                text-align: left;
                .certificate-erweima-box-content1{
                  color: #FDFAF3;
                  font-weight: bold;
                  font-size: 15px;
                  line-height: 20px;
                  margin-bottom: 2px;
               }
               .certificate-erweima-box-content2{
                  color: #F9E7E7;
                  font-size: 14px;
                  line-height: 15px;
                  font-weight: bold;
               }
            }

        }
    }
    .certificate-changan{
      text-align: center;
      color: #333333;
      margin-bottom: 16px;
      font-weight: bold;
    }
  }
</style>
