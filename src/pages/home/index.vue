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
        <!-- 标签页 -->
        <page-tags />
        <div class="content">
          <router-view v-slot="{Component}">
            <transition name="move" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import PageHeader from '@components/header.vue'
  import PageSideBar from '@components/side-bar.vue'
  import PageTags from '@components/tags.vue'
  export default {
    components: {
      PageHeader,
      PageSideBar,
      PageTags
    },
    setup (props) {
      const store = useStore()

      const tagsListName = computed(() =>
        store.state.tagsList.map((tag) =>
          tag.name)
      )
      const collapse = computed(() => store.state.collapse)

      return {
        collapse,
        tagsListName
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-aside {
  }
</style>