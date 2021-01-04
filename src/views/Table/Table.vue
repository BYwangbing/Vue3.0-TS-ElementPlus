<template>
  <BaseTable
    :columns="columns"
    :data="content"
    :pagination="pagination"
    :paginationConfig="paginationConfig"
    :loading="loading"
    @onPageChange="onPageChange"
  >
    <!-- 内容类型 -->
    <template #articleType="{ record }">
      {{ articleTypeMap[record.articleType] }}
    </template>
    <!-- 业务线 -->
    <template #bizType="{ record }">
      {{ bizTypeMap[record.bizType] }}
    </template>
    <!-- 收益细类 -->
    <template #cpStatsType="{ record }">
      {{ cpStatsTypeMap[record.cpStatsType] }}
    </template>
    <!-- 流量渠道 -->
    <template #streamBiz="{ record }">
      {{ streamBizMap[record.streamBiz] }}
    </template>
    <!-- 广告位 -->
    <template #adName="{ record }">
      <div class="hide">
        {{ record.adName }}
      </div>
    </template>
    <!-- 账号列表 -->
    <template #mediaAccountIds="{ record }">
      <div class="hide">
        {{ accountIdMap(record.mediaAccountIds) }}
      </div>
    </template>
    <!-- 操作 -->
    <template #operation="{ record }">
      <el-button size="mini" type="primary" @click="handleEdit(record)">
        修 改
      </el-button>
      <el-button
        size="mini"
        @click="handleDelete(record)"
        :loading="record.btnLoading"
      >
        删 除
      </el-button>
    </template>
  </BaseTable>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';
import BaseTable, { PaginationType } from '@/components/BaseTable.vue';
import { data, ColumnList, paginationConfig } from './options';
import {
  bizTypeMap,
  articleTypeMap,
  cpStatsTypeMap,
  streamBizMap
} from './config';
export default {
  name: 'Table',
  components: { BaseTable },
  setup() {
    const state = reactive({
      content: data[0].content,
      columns: ColumnList,
      data: data,
      paginationConfig: paginationConfig,
      loading: false,
      bizTypeMap: bizTypeMap,
      articleTypeMap: articleTypeMap,
      cpStatsTypeMap: cpStatsTypeMap,
      streamBizMap: streamBizMap
    });
    const pageSize = 10;
    const pagination: PaginationType = {
      current: 1,
      total: 0,
      size: pageSize
    };
    const accountIdMap = (target: any) => {
      if (!target || !target.length) {
        return '';
      } else {
        return target.join();
      }
    };
    const onPageChange = (current: number) => {
      pagination.current = current;
    };
    const fetchList = (current: any) => {
      console.log('current: ', current);
      state.loading = true;
      pagination.total = Number(data[0].totalElements) || 0;
      state.loading = false;
    };
    onMounted(() => {
      fetchList(pagination.current);
      console.log('pagination: ', pagination);
    });
    return {
      ...toRefs(state),
      pagination,
      onPageChange,
      fetchList,
      accountIdMap
    };
  }
};
</script>
<style lang="scss" scoped>
.hide {
  max-height: 64px;
  overflow-y: auto;
}
</style>
