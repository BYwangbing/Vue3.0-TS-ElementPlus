<template>
  <router-link to="/">Home</router-link>
  <el-divider direction="vertical"></el-divider>
  <router-link to="/about">About</router-link>
  <el-divider direction="vertical"></el-divider>
  <router-link to="/todoList">TodoList</router-link>
  <el-divider direction="vertical"></el-divider>
  <router-link to="/formRender">FormRender</router-link>
  <el-divider direction="vertical"></el-divider>
  <router-link to="/vueApi">VueAPI</router-link>
  <el-divider direction="vertical"></el-divider>
  <router-link to="/table">Table</router-link>
  <el-divider direction="vertical"></el-divider>
  <router-link to="/dialog">DialogBox</router-link>
  <el-divider />
</template>
<script lang="ts">
// import { onMounted } from 'vue';
import { routes } from '@/router/index';
export default {
  name: 'Sidebar',
  setup() {
    const allRoutes = () => {
      return routes;
    };
    return { allRoutes };
  }
};
</script>
<style lang="scss" scoped></style>
