<template>
  <div>
    <!-- 显示器 -->
    <div class="pc-class-box hidden-sm-and-down">
      <div class="zimu-wrap">
        <div class="zimu-tabs">
          <div :class="['zimu-item', {'cur-item': currentLetter === item}]" :key="item"  @click="letterGetCur(item)" v-for="item of atozText">
            {{item}}
          </div>
        </div>
        <div class="zimu-box">
          <el-row :gutter="10">
            <el-col :xs="12" :sm="8" :md="6" class="zimu-card" v-for="(item, index) of commoditys" v-if="index < (currentPage3*pageSize) && index > ((currentPage3-1)*pageSize)" :key="item.id">
              <el-card shadow="hover">
                {{item.name}}
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="block zimu-fenye">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="pageSize"
                background
                layout="prev, pager, next, jumper"
                :total="commoditys.length">
              </el-pagination>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 手机 -->
    <div class="class-box hidden-md-and-up" ref="wrapper">
      <div class="zimu-wrap">
        <div class="zimu-box">
           <!-- <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
              lock-x ref="scrollerBottom" class="scroller-bottom" height="-150" >
               <el-row :gutter="10">
                 <el-col class="phone-item" :xs="12" v-for="(item, index) in list" :key="index">
                   <el-card shadow="never">
                     {{item.name}}
                   </el-card>
                 </el-col>
               </el-row>
           </scroller> -->
           <!-- <scroller use-pullup :pullup-config="pullupDefaultConfig" @on-pullup-loading="loadMore"
              lock-x ref="scrollerBottom" height="-148">
            <div style="padding:.1rem 0">
            <div class="box" v-for="(item, index) in list" :key="index">
             <el-card shadow="never">
                {{item.name}}
              </el-card>
            </div>
            </div>
           </scroller> -->
           <scroller lock-x height="9.3rem" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="50">
            <div class="vux-box">
              <el-row :gutter="10">
                <el-col class="phone-item" :xs="12" v-for="item in commoditys" :key="item.id">
                  <el-card shadow="never">
                    {{item.name}}
                  </el-card>
                </el-col>
              </el-row>
              <load-more class="phone-more" tip="加载中..." v-if="onFetching"></load-more>
              <div v-else class="phone-over">
                - 数据加载完毕 -
              </div>
            </div>
          </scroller>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Scroller, LoadMore } from 'vux'

// const pullupDefaultConfig = {
//   content: '上拉加载更多',
//   pullUpHeight: 60,
//   height: 40,
//   autoRefresh: false,
//   downContent: '释放后加载',
//   upContent: '上拉加载更多',
//   loadingContent: '加载中...',
//   clsPrefix: 'xs-plugin-pullup-'
// }

export default {
  components: {
    Scroller,
    LoadMore
  },
  data () {
    return {
      commoditys: [],
      currentPage3: 1,
      pageSize: 33,
      currentLetter: 'A',
      list: [],
      showList1: true,
      scrollTop: 0,
      onFetching: false,
      bottomCount: 10,
      dataCount: 1
    }
  },
  computed: {
    atozText () {
      let arr = []
      for (var i = 0; i < 26; i++) {
        arr.push(String.fromCharCode(65 + i))
      }
      return arr
    }
  },
  methods: {
    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        if (this.commoditys.length < 60) {
          setTimeout(() => {
            this.getZimuData()
          }, 2000)
        } else {
          this.onFetching = false
        }

        // setTimeout(() => {
        //   if (this.bottomCount < 50) {
        //     this.bottomCount += 10
        //   }
        //   this.onFetching = false
        //   // this.$nextTick(() => {
        //   //   this.$refs.scrollerBottom.reset()
        //   // })
        //
        // }, 2000)
      }
    },
    getZimuData () {
      axios.get('http://pajwivg4c.bkt.clouddn.com/' + this.dataCount + '.json')
        .then(this.getZimuDataSucc)
        .catch(function (error) {
          console.log(error)
        })
    },
    getZimuDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.commoditys = this.commoditys.concat(data.commoditys)
        if (this.dataCount === 3) {
          this.dataCount = 1
        }
        this.dataCount++
      }
      this.onFetching = false
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    letterGetCur (item) {
      this.currentLetter = item
    }
  },
  mounted () {
    this.getZimuData()
  }
}
</script>

<style lang="stylus" scoped>
.pc-class-box
  padding:3.5rem 3rem
  .zimu-tabs
    text-align:center
    margin-bottom:.4rem
    .zimu-item
      display:inline
      margin:.2rem
      color:#999
      cursor: pointer
    .cur-item
      color:#0083E7
  .zimu-card
    text-align:center
    margin-bottom:.2rem
    cursor:pointer
  .zimu-fenye
    text-align:center
    padding:.15rem 0 .6rem
.class-box
  position:absolute
  top:3.4rem
  left:0
  right:0
  bottom:0
  overflow:hidden
  .zimu-box
    padding:.1rem .4rem
    .vux-box
      .phone-item
        margin-bottom:.2rem
        text-align:center
      .phone-more
        margin-top:0
        padding-bottom:.2rem
      .phone-over
        margin-top:0
        text-align:center
        color:#ccc
        font-size:.26rem
        padding-bottom:.2rem
  .zimu-box >>> .scroller-bottom
    position:absolute
    top:0
    left:0
    right:0
    bottom:0
    overflow:hidden
    .phone-item
      margin-bottom:.2rem
      text-align:center
      .zimu-card
        margin-bottom:.2rem
        cursor:pointer
</style>
