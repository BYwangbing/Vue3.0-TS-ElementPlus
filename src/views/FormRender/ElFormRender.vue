<template>
  {{ count }}
  <el-button type="success" size="mini" @click="add">成功按钮</el-button>
  <!--  <el-form-renderer
    label-width="90px"
    label-position="left"
    ref="dialogForm"
    :content="dialogForm"
    inline
  /> -->
</template>
<script lang="ts">
import { reactive, ref, toRefs, watch } from 'vue';
export default {
  name: 'ElFormRender',
  setup() {
    const refForm = ref();
    const count = ref(0);
    const state: Record<string, any> = reactive({
      ruleForm: {
        type: []
      }
    });
    const dialogForm = [
      {
        type: 'input',
        id: 'accountId',
        label: '账号ID',
        disabled: true // 不可编辑
      }
    ];
    const add = () => {
      count.value++;
    };
    watch(count, (count, prevCount) => {
      console.log(count, prevCount);
    });
    return {
      ...toRefs(state),
      count,
      refForm,
      dialogForm,
      add
    };
  }
};
</script>
<style lang="scss" scoped></style>
