<template>
  <div>
    <div class="search-box">
      <el-row :gutter="10">
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 10, offset: 7}" :md="{span: 10, offset: 8}" >
          <div class="search-title">
            归类税号一查就有，拯救不开森
          </div>
          <el-input class="search-input" v-model="inputText" placeholder="请输入内容">
            <el-button slot="append" class="iconfont" @click="handleSearch">&#xe61a;</el-button>
          </el-input>
          <div class="other-list">
            <a href="#" class="other-item" v-for="item in otherList" :key="item.id">{{item.name}}</a>
          </div>
          <div class="list-btns">
            <router-link class="list-item" to="/classify/zimu">
            <img src="@/assets/imgs/index_s.png" alt=""> 首字母检索
            </router-link>
            <router-link class="list-item" to="/classify/shuilv">
              <img src="@/assets/imgs/index_f.png" alt=""> 税率分类
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputText: '',
      otherList: [
        {
          id: '0001',
          name: '蕨菜干'
        },
        {
          id: '0002',
          name: '鲜或干芒果'
        },
        {
          id: '0003',
          name: '干木耳'
        },
        {
          id: '0004',
          name: '鲜或干的去壳腰果'
        }
      ]
    }
  },
  methods: {
    handleSearch () {
      alert(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .search-box
    box-sizing:border-box
    height:4.5rem
    background:linear-gradient(#01BCF1,transparent),linear-gradient(-45deg,#01EFD3,transparent),linear-gradient(45deg,#EF0194,transparent);
    .search-title
      padding-top:.68rem
      font-size:.4rem
      font-weight:bold
      color:#fff
      margin-bottom:.34rem
    .search-input >>> .el-input__inner
      width:100%
      border-color:#fff
    .search-input >>> .el-input-group__append
      background:#fff
      border:0
      padding-left:10px
      padding-right:10px
    .other-list
      padding-top:.14rem
      margin-bottom:.4rem
      .other-item
        color:#fff
        margin-right:.2rem
        font-size:.2rem
        &:hover
          text-decoration: underline
    .list-btns
      .list-item
        color:#fff
        margin-right:.3rem
</style>
