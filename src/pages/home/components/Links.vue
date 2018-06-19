<template>
  <div>
    <div class="link-list">
      <el-row :gutter="20">
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 10, offset: 2}" :md="{span: 5, offset: 2}" >
          <a href="https://taxmall.tax360.com.cn/Contentl.htm?gpid=20180003" target="_blank" class="link-item">
            <div class="link-img-box">
              <img class="link-img" src="http://p9ubkn3w7.bkt.clouddn.com/sl-link-1.f344cc5.png" alt="">
              <div class="link-img-info">
                <div class="link-img-info-title">
                  数据转换工具
                </div>
                <div class="link-img-info-text">
                  所谓的“转换”是指将外部数据通过指定的方式导入到“数转”工具当中
                </div>
              </div>
            </div>
          </a>
        </el-col>
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 10}" :md="{span: 5}" >
          <a href="https://taxmall.tax360.com.cn/Contentl.htm?gpid=20180004" target="_blank" class="link-item">
            <div class="link-img-box">
              <img class="link-img" src="http://p9ubkn3w7.bkt.clouddn.com/sl-link-2.aabef74.png" alt="">
              <div class="link-img-info">
                <div class="link-img-info-title">
                  集团公司管理版
                </div>
                <div class="link-img-info-text">
                  为集团公司管理良心打造的退税产品
                </div>
              </div>
            </div>
          </a>
        </el-col>
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 10, offset: 2}" :md="{span: 5, offset: 0}" >
          <a href="http://www.taxrefund.com.cn/zzcp.aspx" target="_blank" class="link-item">
            <div class="link-img-box">
              <img class="link-img" src="http://p9ubkn3w7.bkt.clouddn.com/sl-link-3.edd78ff.png" alt="">
              <div class="link-img-info">
                <div class="link-img-info-title">
                  大企业行业版
                </div>
                <div class="link-img-info-text">
                  为大企业行业版精心开发的退税产品
                </div>
              </div>
            </div>
          </a>
        </el-col>
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 10}" :md="{span: 5}" >
          <a href="http://www.taxrefund.com.cn/xiaotu/" target="_blank" class="link-item">
            <div class="link-img-box">
              <img class="link-img" src="http://p9ubkn3w7.bkt.clouddn.com/sl-link-4.b57a54f.png" alt="">
              <div class="link-img-info">
                <div class="link-img-info-title">
                  小图退税
                </div>
                <div class="link-img-info-text">
                  “小图退税”是龙图信息专门为全国出口退税用户研发的一款全新退税软件。
                </div>
              </div>
            </div>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .link-list
    background:#F0F0F0
    margin-top:.4rem
    padding:1rem 0
  .link-list >>> .el-col
    margin-bottom:.4rem
    .link-item
      color:#fff
      .link-img-box
        box-shadow: 0 1px 1px rgba(0,0,0,.25)
        overflow:hidden
        transition: all .3s ease-in 0s
        &:hover
          transform:translateY(-5px);
        position:relative
        .link-img
          width:100%
        .link-img-info
          background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
          height:1.4rem
          width:100%
          padding:.3rem
          box-sizing:border-box
          position:absolute
          bottom:0
          .link-img-info-title
            font-size:.3rem
            font-weight:bold
            margin-bottom:.15rem
          .link-img-info-text
            Ellipsis()
</style>
