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
        <div class="certificate-erweima-box" ref="imageWrapper" id="imageWrapper">
          <img src="../../assets/images/erweima.png" alt="">
          <div class="certificate-erweima-box-content">
            <div class="certificate-erweima-box-content1">
              剋街APP将以您的名义为武汉市
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
// import html2canvas from 'html2canvas'
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
    this.goNative()
    participateAndGetDonationInfoApi().then(res => {
      this.code = res.myInviteCode
      this.name = res.name
    })
    // this.$nextTick(() => {
    //   this.setImage().then(res => {
    //     console.log('图片链接', res)
    //   })
    // }),
    setTimeout(() => {
      // html2canvas(this.$refs.imageWrapper, {
      //   // backgroundColor: null// 解决生成的图片有白边
      // }).then((canvas) => {
      //   let dataURL = canvas.toDataURL('image/png')
      //   this.dataURL = dataURL
      //   console.log('dataURL', this.dataURL)
      // })
      // this.changeImage()
    }, 2000)
  },
  methods: {
    jump () {
      this.$router.push({path: 'suit'})
    },
    // 转换图片
    // changeImage () {
    //   let imgHeight = window.document.querySelector('#imageWrapper').offsetHeight // 获取DOM高度
    //   let imgWidth = window.document.querySelector('#imageWrapper').offsetWidth // 获取DOM宽度
    //   let scale = window.devicePixelRatio // 获取设备像素比
    //   html2canvas(this.$refs.imageWrapper, {
    //     // backgroundColor: null, // 设置背景颜色
    //     useCORS: true, // 允许图片跨域
    //     scale: scale, // 缩放2倍，使得图片更加清晰
    //     width: imgWidth,
    //     height: imgHeight,
    //     imageTimeout: 5000, // 设置图片的超时，设置0为禁用
    //     proxy: '', // url代理，用于加载跨域图源，为空则不会加载
    //     logging: true,
    //     ignoreElements: element => {
    //       // 用于忽略转换的图片中不需要的匹配元素，注意，为true才不会转换
    //       // if (element.id === 'mytitle') {
    //       //   return true
    //       // }
    //     }
    //   }).then(canvas => {
    //     let imgURL = canvas.toDataURL('image/png')
    //     this.imgURL = imgURL
    //     // console.log('imgURL', this.imgURL)
    //   })
    // },
    // h5调用原生方法，testWebViewBridge为原生app定义的方法名。action为h5传递给原生app的参数，可以为多个。data为原生app传递给h5参数
    goNative () {
      const vm = this
      this.$bridge.callhandler(
        'savePhotoByKey',
        // action: ''
        {
          key: 'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E9%9D%92%E6%98%A5%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=3256772006,1736732629&os=2143580344,4192017324&simid=3466502558,354042678&pn=6&rn=1&di=72930&ln=1256&fr=&fmq=1581948538492_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F003gByBQgy6NdsSPdzic8%26690&rpstart=0&rpnum=0&adpicid=0&force=undefined'
        },
        data => {
          vm.ddd = data
          // 处理返回数据
        }
      )
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
