<template>
  <div id="app">
    <Sidebar />
    <div>
      如果Element Plus成功添加到此项目中，您将看到
      <code v-text="'<el-button>'"></code>
      <el-button size="mini" type="primary">el-button</el-button>
    </div>
    <el-divider />
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
