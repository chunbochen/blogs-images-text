<template>
  <div id="app">
    <!-- 标题栏 -->
    <h1>案例演示</h1>
    <!-- 导航栏 -->
    <div class="nav">
      <span class="toItem" v-for="(item, index) in toopen" :key="index">
        <router-link :to="item.page">{{ item.name }}</router-link>
      </span>
    </div>

    <!-- 路由占位符 -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 导航栏
      toopen: [
        {
          id: 1,
          name: "首页",
          page: "/",
        },
        {
          id: 2,
          name: "关于",
          page: "/about",
        },
        {
          id: 3,
          name: "初级前端",
          page: "/elementary",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import'@/styles/app.scss'
</style>
