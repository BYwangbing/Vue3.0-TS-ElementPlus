<template>
  <el-dialog
    :title="config.title"
    :width="config.width || '50%'"
    v-model:visible="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    class="dialog"
    @closed="resetDialog"
  >
    <component
      v-if="dialogVisible"
      :is="config.component"
      :value="config.value"
      ref="dialogComp"
    />

    <div v-slot:name>
      <el-button @click="hide">取 消</el-button>
      <el-button
        type="primary"
        :loading="confirmLoading"
        @click="handleConfirm"
      >
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
export default class DialogBox extends Vue {
  dialogVisible = false;
  confirmLoading = false;

  show() {
    this.dialogVisible = true;
  }
  hide() {
    this.dialogVisible = false;
  }

  loadingShow() {
    this.confirmLoading = true;
  }
  loadingHide() {
    this.confirmLoading = false;
  }

  resetDialog() {
    this.loadingHide();
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  & /deep/ .el-dialog {
    min-width: 560px;
  }
}
</style>
