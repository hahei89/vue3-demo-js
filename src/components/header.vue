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
      <el-col :span="4" :offset="17">
        <el-row justify="center" align="middle" style="height: 70px;" :gutter="8">
          <!-- 占位 -->
          <el-col :span="4"></el-col>
          <!-- 消息通知 -->
          <el-col class="btn-cell" :span="4">
            <el-tooltip content="消息中心">
              <router-link to="/tabs">
                <i class="el-icon-bell"></i>
              </router-link>
            </el-tooltip>
            <span class="btn-bell-badge"></span>
          </el-col>
          <!-- 头像 -->
          <el-col class="user-avator" style="text-align: center;" :span="8">
            <img src="../assets/img/img.jpg" alt="用户头像">
          </el-col>
          <!-- 下拉菜单 -->
          <el-col class="dropdown-menu" style="text-align: center;" :span="8">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                    <el-dropdown-item>仿照的项目仓库</el-dropdown-item>
                  </a>
                  <el-dropdown-item >个人中心</el-dropdown-item>
                  <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
    .user-avator,
    .btn-cell,
    .dropdown-menu {
      text-align: center;
      cursor: pointer;
    }
    .btn-cell {
      position: relative;
      width: 30px;
      height: 30px;
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
    .user-avator {
      padding-left: 8px !important;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>