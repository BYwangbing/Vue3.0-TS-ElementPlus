<template>
  <el-dialog
    :title="config.title"
    :width="config.width || '50%'"
    v-model:visible="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    class="dialog"
    @closed="loadingHide"
  >
    <component
      v-if="dialogVisible"
      :is="config.component"
      :value="config.value"
      ref="dialogComp"
    />
    <template v-slot:footer>
      <div>
        <el-button @click="hide">取 消</el-button>
        <el-button
          type="primary"
          :loading="confirmLoading"
          @click="handleConfirm"
        >
          确 定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { ref, PropType } from 'vue';
export default {
  props: {
    config: Object as PropType<Record<string, any>[]>
  },
  setup(props: any) {
    console.log('props: ', props);
    const dialogVisible = ref(false);
    const confirmLoading = ref(false);

    const show = () => {
      dialogVisible.value = true;
    };
    const hide = () => {
      dialogVisible.value = false;
    };

    const loadingShow = () => {
      confirmLoading.value = true;
    };

    const loadingHide = () => {
      confirmLoading.value = false;
    };

    const resetDialog = () => {
      loadingHide();
    };
    return {
      dialogVisible,
      confirmLoading,
      ...show,
      ...hide,
      ...loadingShow,
      ...loadingHide,
      resetDialog
    };
  }
};
</script>

<style lang="scss" scoped>
// .dialog {
//   & /deep/ .el-dialog {
//     min-width: 560px;
//   }
// }
</style>
