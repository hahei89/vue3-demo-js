<template>
  <div class="tag-group">
    <el-tag
      v-for="tag in tagsList"
      :key="tag.path"
      :effect="isActiveTag(tag) ? 'dark' : 'light'"
      :closable="tag.path !== '/'"
      @click="handleClick(tag)"
      @close="handleClose(tag)">
      {{ tag.title }}
    </el-tag>
  </div>
</template>

<script>
  import { computed,  nextTick } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute, useRouter } from 'vue-router'

  export default {
    setup (props, context) {
      const route = useRoute()
      const store = useStore()
      const tagsList = computed(() => store.state.tagsList)

      const isActiveTag = (tag) => {
        return route.path === tag.path
      }

      const handleClick = (tag) => {
        if (router.path !== tag.path) {
          router.push({ path: tag.path })
        }
      }
      const handleClose = (tag) => {
        // 1. 从tagList移除
        store.commit('removeTag', tag)
        // 2. 导航到首页
        router.push('/')
      }
      return {
        route,
        handleClick,
        handleClose,
        tagsList,
        isActiveTag
      }
    }
  }
</script>

<style lang="less" scope>
  .el-tag {
    cursor: pointer;
  }
</style>