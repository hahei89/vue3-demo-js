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
        <page-tags :tags="tags" />
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
      const tags = [
        { type: '', label: '标签一', path: '1' },
        { type: 'success', label: '标签二', path: '2' },
        { type: 'info', label: '标签三', path: '3' },
        { type: 'danger', label: '标签四', path: '4' },
        { type: 'warning', label: '标签五', path: '5' },
      ]

      const store = useStore()

      const collapse = computed(() => store.state.collapse)

      return {
        tags,
        collapse
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-aside {
  }
</style>