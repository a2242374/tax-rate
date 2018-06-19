<template>
  <div>
    <div class="lg-cp-box hidden-sm-and-down">
      <el-row :gutter="20">
        <el-col  :md="{span: 20, offset: 2}" >
          <div class="lg-container">
            <div class="lg-img-box">
              <img src="@/assets/imgs/wxImg1.jpg" alt="">
            </div>
            <div class="lg-text-box">
              <div class="lg-text-link-line">
                <a href="http://www.tax360.com.cn/about.html" class="lg-text-link lg-text-arr" target="_blank">关于我们</a>
                <a href="http://www.tax360.com.cn/register_agree.html" class="lg-text-link lg-text-arr" target="_blank">法律条款</a>
                <a href="mailto:alarm@taxrefund.com.cn" class="lg-text-link" target="_blank">投诉建议</a>
              </div>
              <div class="lg-text-line">
                © 2002-2018 All Rights Reserved By 大连龙图信息技术股份有限公司
              </div>
              <div class="lg-text-line">
                经营许可证编号：辽B2-20140115 质量体系认证：ISO 9001:2008,CMMI-DEV ML3股票代码：832272   本站所有资料未经许可不得擅自转载
              </div>
            </div>
            <div class="i_copyright_right">
              <div class="cr_tel">
                  <a href="http://www.taxrefund.com.cn/appDownload/index.html" target="_blank"
                  class="cr_tel_btn">
                  </a>
                  <p class="cr_tel_val">
                      <span>
                          全国服务热线
                      </span>
                      0411-39402999
                  </p>
              </div>
              <div class="cr_qq">
                  <a href="tencent://message/?uin=1991374013&amp;Site=yige.org&amp;Menu=yes"
                  target="_blank" class="cr_qq_btn">
                  </a>
              </div>
              <div class="cr_wb">
                  <a href="http://weibo.com/dragonblogger/profile?s=6cm7D0" class="cr_wb_btn"
                  target="_blank">
                  </a>
              </div>
          </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="xl-cp-box hidden-md-and-up">
      <div class="xl-text-line">
        © 2002-2018 All Rights Reserved By 大连龙图信息技术股份有限公司
      </div>
      <div class="xl-text-line">
        经营许可证编号：辽B2-20140115 质量体系认证：ISO 9001:2008,CMMI-DEV ML3股票代码：832272   本站所有资料未经许可不得擅自转载
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  .xl-cp-box
    box-sizing:border-box
    padding:.3rem
    background:#2B2B2B
    color:#8e8e8e
    text-align:center
    .xl-text-line
      font-size:13px
      line-height:.5rem
  .lg-cp-box
    box-sizing:border-box
    padding:.3rem 0
    background:#2B2B2B
    color:#8e8e8e
    .lg-container
      display:flex
      position:relative
      .lg-img-box
        margin-right:.5rem
        img
          width:2rem
      .lg-text-box
        .lg-text-link-line
          margin:.3rem 0 .4rem
          .lg-text-arr
            position:relative
            &:after
              display:inline-block
              background:#8e8e8e
              content:''
              width:1px
              height:13px
              right:-12px
              top:1px
              position:absolute
          .lg-text-link
            color:#8e8e8e
            font-size:.2rem
            margin-right:.4rem
        .lg-text-line
          font-size:.2rem
          margin-bottom:.3rem
</style>
