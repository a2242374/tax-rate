<template>
  <div>
    <div class="header">
      <a href="http://www.taxrefund.com.cn/" target="_blank"><img class="logo-img" src="http://p9ubkn3w7.bkt.clouddn.com/taxLogo.png" alt=""></a>
      <span class="arr"></span>
      <img class="title-img" src="@/assets/imgs/inav_tit.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    padding:.2rem .4rem
    box-shadow: 0 1px 1px rgba(0,0,0,.08)
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
</style>
