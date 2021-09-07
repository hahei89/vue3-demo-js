<template>
  <div class="tag-group">
    <el-tag
      v-for="item in tags"
      :key="item.label"
      :type="item.type"
      effect="dark">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
  export default {
    props: ['tags'],
    setup () {
      
      return {
      }
    }
  }
</script>

<style lang="less" scope>
</style>