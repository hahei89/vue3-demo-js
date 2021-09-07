<template>
  <el-container>
    <el-header class="header">
      <page-header />
    </el-header>
    <el-container>
      <el-aside :width="collapse ? 'auto' : '200px'">
        <page-side-bar />
      </el-aside>
      <el-main>
        <page-tags />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import PageHeader from '@/components/header.vue'
  import PageSideBar from '@/components/side-bar.vue'
  import PageTags from '@/components/tags.vue'
  export default {
    components: {
      PageHeader,
      PageSideBar,
      PageTags
    },
    setup (props) {
      const store = useStore()

      const collapse = computed(() => store.state.collapse)

      return {
        collapse
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-aside {
  }
</style>