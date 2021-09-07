<template>
  <el-container>
    <el-header class="header"> 
      <page-header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <page-side-bar />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  import PageHeader from '@/components/header.vue'
  import PageSideBar from '@/components/side-bar.vue'
  export default {
    components: {
      PageHeader,
      PageSideBar
    }
  }
</script>

<style lang="less" scoped>
  .el-aside {
   
  }
</style>