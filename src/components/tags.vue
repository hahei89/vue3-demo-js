<template>
  <div class="tag-group">
    <el-tag
      v-for="tag in tags"
      :key="tag.label"
      :type="tag.type"
      :effect="activeTag.path === tag.path ? 'dark' : 'light'"
      closable
      @click="handleClick(tag)"
      @close="handleClose(tag)">
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
  import { computed, reactive, ref } from 'vue'
  export default {
    props: ['tags'],
    setup () {
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
        handleClose
      }
    }
  }
</script>

<style lang="less" scope>
  .el-tag {
    cursor: pointer;
  }
</style>