<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-divider ref="root" content-position="left">
      可是那段关系结束了你却仍然感觉它在继续
    </el-divider>
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance, reactive, toRefs } from 'vue';
export default {
  name: 'FormRender',
  setup() {
    // 创建一个DOM引用，名称必须与元素的ref属性名相同

    const instance = getCurrentInstance();
    console.log(instance);
    const state: Record<string, any> = reactive({
      value: new Date()
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="scss" scoped></style>
