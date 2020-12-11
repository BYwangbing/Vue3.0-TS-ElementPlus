<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/about">About</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/todoList">TodoList</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/formRender">FormRender</router-link>
    <el-divider />
    <Sidebar />
    <div>
      如果Element Plus成功添加到此项目中，您将看到
      <code v-text="'<el-button>'"></code>
      <el-button size="mini" type="primary">el-button</el-button>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue';
export default {
  name: 'App',
  components: { Sidebar }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1280px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
