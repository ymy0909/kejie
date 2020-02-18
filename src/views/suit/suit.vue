<template>
<div class="suit">
    <img src="../../assets/images/kouzhaojiajiujing.png" alt="" class="image1">
    <div class="suit-content1">
      N95口罩+酒精
    </div>
    <div class="suit-content2">
      领取防疫套餐！防控疫情从自我做起！
    </div>
    <div class="suit-content3">
      领取成功防疫套餐！
    </div>
    <div class="suit-content4">
      剋街将以您的名义向基金会再捐1元善心基金
    </div>
    <div class="suit-content5">
     赶紧邀请跟多的爱心驿使加入吧！
    </div>
    <div class="input-title">
          <div class="vant-input">
              <van-field v-model="code" placeholder="" label="邀请码" label-width="60" />
        </div>
     </div>
     <div class="suit-hua">
        <img src="../../assets/images/huaquan.png" alt="" class="suit-hua-bg">
        <div class="suit-hua-content">
            <div class="suit-hua-content-left">
                <div class="suit-hua-content-left-box">
                  <div  v-for="(item, index) in 10" :key="index" class="suit-hua-content-item">
                      <img :src="index < count?shiSrc:kongSrc" alt="">
                  </div>
                </div>
            </div>
            <div>
               <van-button type="default" class="suit-receive" :disabled="count != 10" @click="jump">点击领取</van-button>
            </div>
        </div>
     </div>
     <div class="suit-content6">
        赶紧邀请更多的爱心驿使加入吧！
     </div>
</div>
</template>

<script>
import shiPath from '@/assets/images/shi.png'
import kongPath from '@/assets/images/kong.png'
import {atoReceiveN95Api, addInviteCodeApi} from '@/api/api'
import { _debounce } from '@/utils'
export default {
  name: 'Suit',
  components: {},
  props: {},
  data () {
    return {
      code: '',
      count: 9,
      shiSrc: shiPath,
      kongSrc: kongPath
    }
  },
  created () {
    this.debouncedSearch = _debounce(this.fetchData)
  },
  mounted () {
    atoReceiveN95Api().then(res => {
      console.log(res)
      this.count = res.inviteNumber
      // this.count = 10
    })
  },
  methods: {
    jump () {
      this.$router.push({path: 'address'})
    },
    fetchData () {
      if (this.code.length === 6) {
        addInviteCodeApi(this.code).then(res => {
          this.code = ''
        })
      }
    }
  },
  computed: {
    inputValue () {
      return this.code
    }
  },
  watch: {
    inputValue (val) {
      this.debouncedSearch()
    }
  }
}
</script>

<style scoped lang="less">
  .suit{
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #fbf1ee;
    // padding: 0 30px;
    box-sizing: border-box;
    .image1{
      width: 152px;
      margin-bottom: 2px;
      padding-top: 85px;
    }
    .suit-btn{
          height: 34px;
          line-height: 34px;
          border-radius: 15px;
          width: 330px;
          font-weight: 800;
          // margin-bottom: 10px;
    }
     .suit-content1{
      color: #333333;
      font-size: 13px;
      text-align: center;
      margin-bottom: 18px;
    }
    .suit-content2{
      color: #FD725A;
      font-size: 18px;
      text-align: center;
      line-height: 25px;
    }
    .suit-content3,.suit-content4,.suit-content5{
      color: #FD725A;
      font-size: 15px;
      text-align: center;
      line-height: 22px;
    }
    .suit-content5{
      margin-bottom: 34px;
    }
    .suit-content6{
       color: #333333;
      font-size: 13px;
      text-align: center;
      margin-bottom: 5px;
    }
    .suit-hua{
         width: 100%;
         padding: 0 13px;
         box-sizing: border-box;
         position: relative;
         margin-bottom: 6px;
        .suit-hua-bg{
            width: 100%;
        }
        .suit-hua-content{
          position: absolute;
          top: 92px;
          left: 26px;
          width: 300px;
          display: flex;
          align-items: center;
          // margin-right: -8px;
          .suit-hua-content-left{
              // width: 200px;

              flex: 1;
              min-width: 0;

          }
          .suit-hua-content-left-box{
            width: 100%;
             display: flex;
             flex-wrap: wrap;
            align-items: center;
             .suit-hua-content-item{
                width: 20%;
                text-align: center;
                img{
                width: 26px;
                height: 26px;
                box-sizing: border-box;
                display: block;
                // display: inline-block;
                // margin-right: 8px;
              }
              }
          }
        }
        .suit-receive{
          height: 52px;
          line-height: 52px;
          color: #FE725B;
          font-size: 12px;
          width: 80px;
        }
    }
  }
  /deep/  .van-cell__value{
          border-bottom: 1px solid #000;
          font-size: 14px;
        }
      /deep/ .van-field__label{
          color: #000;
          font-weight: 600;
          font-size: 14px;
        }
      /deep/ .van-field{
          padding-top: 0;
          padding-bottom: 0;
          background: transparent;
      }
      .input-title{
           width: 250px;
           margin: 0 auto;
           line-height: 20px;
            margin-bottom: 14px;
            font-size: 20px;
        }
</style>
