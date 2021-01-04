<template>
  <dialog-box ref="dialogBox" :config="dialogConfig" @confirm="handleConfirm" />
  <el-button size="mini" type="primary" @click="handleCreate">新增</el-button>
</template>
<script lang="ts">
import { reactive, ref, toRefs } from 'vue';
import DialogBox from '@/components/DialogBox.vue';
export default {
  name: 'DialogBox',
  components: { DialogBox },
  setup() {
    const dialogBox = ref(null);
    const state = reactive({
      dialogConfig: {}
    });
    const handleCreate = () => {
      state.dialogConfig = {
        title: '新增收益细类配置',
        width: '840px',
        value: null
      };
      console.log('dialogBox: ', dialogBox);
    };
    const handleConfirm = () => {
      console.log('handleConfirm');
    };
    return { ...toRefs(state), dialogBox, handleCreate, handleConfirm };
  }
};
</script>
<style lang="scss" scoped></style>
