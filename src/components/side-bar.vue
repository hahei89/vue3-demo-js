<template>
  <div class="sidebar">
    <el-menu
      unique-opened
      router
      class="sidebar-el-menu"
      default-active="2"
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#324157"
      :collapse="collapse">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="subItem in item.subs" :key="subItem.index">
              <el-submenu v-if="subItem.subs" :index="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index">{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'

  export default {
    setup (props) {
      const items = [
        {
          icon: "el-icon-s-home",
          index: "/dashboard",
          title: "系统首页",
        },
        {
          icon: "el-icon-document",
          index: "/table",
          title: "基础表格",
        },
        {
          icon: "el-icon-document-copy",
          index: "/tabs",
          title: "tab选项卡",
        },
        {
          icon: "el-icon-date",
          index: "3",
          title: "表单相关",
          subs: [
            {
              index: "/form",
              title: "基本表单",
            },
            {
              index: "/upload",
              title: "文件上传",
            },
            {
              index: "4",
              title: "三级菜单",
              subs: [
                {
                  index: "/editor",
                  title: "富文本编辑器",
                },
              ],
            },
          ],
        },
        {
          icon: "el-icon-goblet-full",
          index: "/icon",
          title: "自定义图标",
        },
        {
          icon: "el-icon-pie-chart",
          index: "/charts",
          title: "schart图表",
        },
        {
          icon: "el-icon-map-location",
          index: "/i18n",
          title: "国际化功能",
        },
        {
          icon: "el-icon-warning",
          index: "7",
          title: "错误处理",
          subs: [
            {
              index: "/permission",
              title: "权限测试",
            },
            {
              index: "/404",
              title: "404页面",
            },
          ],
        },
        {
          icon: "el-icon-ice-cream-square",
          index: "/donate",
          title: "支持作者",
        },
      ]

      const route = useRoute()
      const onRoutes = computed(() => route.path)
      const store = useStore()
      const collapse = computed(() => store.state.collapse)

      return {
        items,
        collapse,
        onRoutes
      }
    }
  }
</script>

<style lang="less" scoped>
  .sidebar {
    .sidebar-el-menu {
      height: 100vh;
    }
  }
</style>