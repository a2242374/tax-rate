<template>
  <div>
    <div class="header">
      <el-row :gutter="10">
        <el-col class="logo-box" :xs=" {span: 24}" :sm="{span: 10, offset: 2}" :md="{span: 10, offset: 2}" >
          <a href="http://www.taxrefund.com.cn/" target="_blank"><img class="logo-img" src="http://p9ubkn3w7.bkt.clouddn.com/taxLogo.png" alt=""></a>
          <span class="arr"></span>
          <img class="title-img" src="@/assets/imgs/inav_tit.png" alt="">
        </el-col>
        <el-col :xs=" {span: 22, offset: 2}" :sm="{span: 10}" :md="{span: 10}" >
          <el-input class="search-input" v-model="inputText" placeholder="商品名称 / 商品码">
            <el-button slot="append" class="iconfont" @click="handleSearch">&#xe61a;</el-button>
          </el-input>
        </el-col>
      </el-row>
      <div class="phone-back hidden-sm-and-up" @click="handleBackFun">
        <i class="iconfont">&#xe602;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassifyHeader',
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    handleSearch () {
      alert(1)
    },
    handleBackFun () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width:100%
    box-sizing:border-box
    position:fixed
    padding:.2rem .4rem
    z-index:2
    background:#fff
    box-shadow: 0 1px 1px rgba(0,0,0,.08)
    .phone-back
      width:.74rem
      height:.74rem
      line-height:.74rem
      position:absolute
      left:.2rem
      bottom:.22rem
      text-align:center
      i
        font-size:.5rem
    .logo-box
      height: .82rem
      line-height: .6rem
      .logo-img
        width:2.8rem
      .title-img
        width:2.2rem
      .arr
        width:1px
        height:.4rem
        background:#ccc
        display:inline-block
        font-size:.3rem
        margin: 0 .15rem
        position:relative
        top:.12rem
    .search-input >>> .el-input__inner
      width:100%
      position:relative
      border-top-right-radius: 4px
      border-bottom-right-radius: 4px
    .search-input >>> .el-input-group__append
      background:#fff
      border:0
      display:block
      position:absolute
      right: 16px
      top: 11px
</style>
