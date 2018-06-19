<template>
  <div>
    <classify-header></classify-header>
    <div class="container">
      <div class="tab-group">
        <div class="tab-title">
          <!-- <strong v-for="item of tabs" :key="item.id" :class="['tab-btn',{active: currentTabComponent === item.id}]" @click="currentTabComponent = item.id">{{item.name}}</strong> -->
          <router-link :to="'/classify/'+item.id" v-for="item of tabs" :key="item.id" :class="['tab-btn',{active: routerLink === item.id}]">{{item.name}}</router-link>
        </div>
        <keep-alive>
          <component
            v-bind:is="routerLink"
          ></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import ClassifyHeader from './components/Header.vue'
import Zimu from './components/Zimu.vue'
import Shuilv from './components/Shuilv.vue'
export default {
  components: {
    ClassifyHeader,
    Zimu,
    Shuilv
  },
  data () {
    return {
      tabs: [
        {
          id: 'zimu',
          name: '首字母检索'
        },
        {
          id: 'shuilv',
          name: '税率分类'
        }
      ],
      currentTabComponent: 'Zimu'
    }
  },
  computed: {
    routerLink () {
      return this.$route.params.id
    }
  },
  methods: {
    handleClick (tab, event) {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    .active
      color:blue
    .tab-group >>> .el-tabs__nav-wrap
      .el-tabs__item
        font-size:.34rem
        font-weight:bold
      &:after
        background-color:#fff
    .tab-title
      z-index:1
      padding-top:2.3rem
      padding-bottom:.32rem
      background:#fff
      position:fixed
      width:100%
      text-align:center
      .tab-btn
        font-size:.4rem
        font-weight:bold
        color:#666
        margin:0 .3rem
        position:relative
      .router-link-active
        color:#0083E7
        &:after
          height:4px
          width:100%
          background:#0083E7
          display:inline-block
          content:''
          position:absolute
          bottom:-.2rem
          left:0
</style>
