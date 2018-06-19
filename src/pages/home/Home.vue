<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
    <home-btns></home-btns>
    <home-links></home-links>
    <copyright></copyright>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSearch from './components/Search.vue'
import HomeBtns from './components/Btns.vue'
import HomeLinks from './components/Links.vue'
import Copyright from './components/Copyright.vue'
export default {
  components: {
    HomeHeader,
    HomeSearch,
    HomeBtns,
    HomeLinks,
    Copyright
  }
}
</script>

<style lang="stylus" scoped>
</style>
