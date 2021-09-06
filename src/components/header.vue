<template>
  <el-header class="header">
    <el-row :gutter="8">
      <el-col :span="1">
        <el-icon @click="setCollapse" class="collapse-btn" color="#409EFC">
          <i v-if="collapse" class="el-icon-s-fold"></i>
          <i v-else class="el-icon-s-unfold"></i>
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
            <el-dropdown trigger="click" @command="handleDropdownCommand">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                    <el-dropdown-item>仿照的项目仓库</el-dropdown-item>
                  </a>
                  <el-dropdown-item command="user">个人中心</el-dropdown-item>
                  <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
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
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  function useCollapse () {
    const store = useStore()

    const collapse = computed(() => store.state.collapse)
    const setCollapse = () => {
      store.commit('handleCollapse', !collapse.value)
    }

    onMounted(() => {
      if (document.body.clientWidth < 1500) {
        setCollapse()
      }
    })

    return {
      collapse,
      setCollapse
    }
  }

  export default {
    setup (props) {
      const username = 'litianhua'
      const message = 2
      const router = useRouter()

      // 折叠
      const collapse = useCollapse()

      // 下拉框命令
      const handleDropdownCommand = (command) => {
        if (command === 'loginout') {
          localStorage.removeItem('ms_username')
          router.push('/login')
        } else if (command === 'user') {
          router.push('/user')
        }
      }
      return {
        ...collapse,
        handleDropdownCommand
      }
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