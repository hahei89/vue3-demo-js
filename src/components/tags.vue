<template>
  <div class="tag-group">
    <el-tag
      v-for="tag in tagsList"
      :key="tag.path"
      :effect="activeTag.path === tag.path ? 'dark' : 'light'"
      closable
      @click="handleClick(tag)"
      @close="handleClose(tag)">
      {{ tag.title }}
    </el-tag>
  </div>
</template>

<script>
  import { computed, reactive, ref } from 'vue'
  import { useStore } from 'vuex'

  export default {
    setup () {
      const store = useStore()
      const tagsList = computed(() => store.state.tagsList)
      const activeTag = reactive({
        path: ''
      })

      const handleClick = (tag) => {
        activeTag.path = tag.path
      }
      const handleClose = (tag) => {
        console.log('close')
      }
      return {
        activeTag,
        handleClick,
        handleClose,
        tagsList
      }
    }
  }
</script>

<style lang="less" scope>
  .el-tag {
    cursor: pointer;
  }
</style>