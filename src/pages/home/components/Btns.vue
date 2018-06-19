<template>
  <div>
    <div class="btn-wrap">
      <el-row :gutter="20">
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 10, offset: 2}" :md="{span: 10, offset: 2}" >
          <a href="#" class="btn-item btn-item-1"><i class="iconfont">&#xe61d;</i><span>税率下载</span></a>
        </el-col>
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 10}" :md="{span: 10}" >
          <a href="#" class="btn-item btn-item-2"><i class="iconfont">&#xe600;</i><span>分享归类信息</span></a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBtns'
}
</script>

<style lang="stylus" scoped>
  .btn-item
    height:2.2rem
    display:inline-block
    width:100%
    color:#fff
    border-radius:.4rem
    margin-top:.4rem
    display:flex
    justify-content:center
    align-items: center
    font-size:.4rem
    font-weight:500
    .iconfont
      font-size:.8rem
      margin-right:.3rem
  .btn-item-1
    background:#50A5FF
    &:hover
      background:#439DFC
  .btn-item-2
    background:#47DB89
    &:hover
      background:#40D883
</style>
