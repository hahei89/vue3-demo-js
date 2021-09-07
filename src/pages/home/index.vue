<template>
  <el-container>
    <el-header class="header"> 
      <page-header />
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import PageHeader from '@/components/header.vue'

  export default {
    components: {
      PageHeader
    }
  }
</script>

<style lang="less" scoped>
  #home {
    // color: red;
  }
</style>