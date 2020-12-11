<template>
  <div>
    没有谁对谁错，只怪科技太弱。因为技术原因，断网的那一刻，我们的爱就404 Not
    found了。
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
  <BaseTable
    :columns="columns"
    :data="tableData.content"
    :pagination="pagination"
    :paginationConfig="paginationConfig"
    :loading="loading"
    @onPageChange="onPageChange"
  ></BaseTable>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import BaseTable, { PaginationType } from '@/components/BaseTable.vue';
import { tableData, ColumnList, paginationConfig } from './options';
export default {
  name: 'Table',
  components: { BaseTable },
  setup() {
    const state = reactive({
      tableData: tableData,
      columns: ColumnList,
      paginationConfig: paginationConfig,
      loading: false
    });
    const pageSize = 10;
    const pagination: PaginationType = {
      current: 1,
      total: 0,
      size: pageSize
    };
    const onPageChange = (current: number) => {
      pagination.current = current;
      console.log(pagination);
    };
    return {
      ...toRefs(state),
      pagination,
      onPageChange
    };
  }
};
</script>
<style lang="scss" scoped></style>
