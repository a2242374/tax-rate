<template>
  <div>
    <div class="tree-box">
      <el-row :gutter="20">
        <el-col :xs=" {span: 22, offset: 1}" :sm="{span: 18, offset: 2}" :md="{span: 16, offset: 4}" >
          <el-input
            class="tree-search-input"
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
          <el-tree
          :data="data5"
          :filter-node-method="filterNode"
          accordion
          :default-expanded-keys="[1]"
          :props="defaultProps"
          ref="tree2"
          node-key="id">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
              <el-button
                type="text"
                v-if="!data.children">
                {{data.num}}
              </el-button>
            </span>
            <span>{{ node.label }}</span>
          </span>
        </el-tree>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    clickFunction (data) {
      if (!data.children) {
        alert(1)
      }
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  },
  data () {
    return {
      filterText: '',
      data5: [{
        id: 1,
        label: '第一类 活动物；动物产品',
        children: [{
          id: 4,
          label: '第一章  活动物',
          children: [{
            id: 9,
            label: '马、驴、骡：',
            num: 1223
          }, {
            id: 10,
            label: '牛：',
            num: 1223
          }]
        }]
      }, {
        id: 2,
        label: '第一类 活动物；动物产品',
        children: [{
          id: 4,
          label: '第一章  活动物',
          children: [{
            id: 9,
            label: '马、驴、骡：',
            num: 1223
          }, {
            id: 10,
            label: '牛：',
            num: 1223
          }]
        }]
      }, {
        id: 3,
        label: '第一类 活动物；动物产品',
        children: [{
          id: 4,
          label: '第一章  活动物',
          children: [{
            id: 9,
            label: '马、驴、骡：',
            num: 1223
          }, {
            id: 10,
            label: '牛：',
            num: 1223
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tree-box
    padding:3.2rem .4rem .4rem .4rem
    .tree-search-input
      margin-bottom:.3rem
</style>
