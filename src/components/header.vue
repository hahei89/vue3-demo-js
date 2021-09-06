<template>
  <el-header class="header">
    <el-row :gutter="8">
      <el-col :span="1">
        <el-icon class="collapse-btn" color="#409EFC">
          <i class="el-icon-s-fold"></i>
          <!-- <i class="el-icon-s-unfold"></i> -->
        </el-icon>
      </el-col>
      <el-col class="logo" :span="2">后台管理系统</el-col>
      <el-col :span="6" :offset="15">
        <el-row justify="center" align="middle" style="height: 70px;" :gutter="8">
          <el-col class="btn-cell" :span="2">
            <el-tooltip content="消息中心">
              <router-link to="/tabs">
                <i class="el-icon-bell"></i>
              </router-link>
            </el-tooltip>
            <span class="btn-bell-badge"></span>
          </el-col>
          <el-col style="text-align: center;" :span="11">
            用户头像
          </el-col>
          <el-col style="text-align: center;" :span="11">
            用户名下拉菜单
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>  
  export default {
    components: {
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
    .logo {
      text-align: left;
      line-height: 70px;
    }
    .btn-cell {
      position: relative;
      text-align: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      border-radius: 50%;
      .el-icon-bell {
        color: #fff;
      }
      .btn-bell-badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
      }
    }
  }
</style>