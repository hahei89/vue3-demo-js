<template>
  <el-header class="header">
    <el-row :gutter="8">
      <el-col :span="1">
        <el-icon class="collapse-btn" color="#409EFC">
          <fold />
        </el-icon>
      </el-col>
    </el-row>

  </el-header>
</template>

<script>
  import { Fold } from '@element-plus/icons'

  export default {
    components: {
      Fold
    }
  }
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    .collapse-btn {
      padding: 0 21px;
      cursor: pointer;
      line-height: 70px;
      height: 70px;
      font-size: 22px;
    }
  }
</style>