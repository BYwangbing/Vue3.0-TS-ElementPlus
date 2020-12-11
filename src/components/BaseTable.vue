<template>
  <el-table
    ref="table"
    v-bind="config"
    v-loading="loading"
    :data="data"
    @selection-change="onSelectionChange"
  >
    <el-table-column v-if="rowSelection" type="selection" width="55" />

    <template v-for="(column, index) in columns">
      <el-table-column
        v-if="!column.customRender"
        :key="column.prop"
        v-bind="column"
      />

      <el-table-column v-else :key="column.prop" v-bind="column">
        <template v-slot="scope">
          <slot
            :name="column.prop"
            :text="scope.row[column.prop]"
            :record="scope.row"
            :index="index"
          />
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div :style="{ textAlign: 'right', marginTop: '10px' }">
    <el-pagination
      background
      v-bind="paginationConfig"
      :page-size="getSize"
      :total="getTotal"
      :current-page="getCurrent"
      @current-change="nextPage => onPageChange(nextPage)"
    />
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, PropType } from 'vue';
export default {
  name: 'Table',
  props: {
    loading: Boolean,
    data: Object as PropType<Record<string, any>[]>,
    config: Object as PropType<ConfigType>,
    columns: Array as PropType<ColumnType[]>,
    pagination: Object as PropType<PaginationType>,
    rowSelection: Object as PropType<RowSelectionType>,
    default: () => ({
      'hide-on-single-page': true,
      layout: 'prev, pager, next'
    })
  },
  setup(props: any, ctx: any) {
    const state = reactive({
      paginationConfig: Object as PropType<PaginationConfigType>
    });

    const getSize = (): number => {
      const { size = 10 } = props.pagination || {};
      return size;
    };

    const getCurrent = (): number => {
      const { current = 1 } = props.pagination || {};
      return current;
    };

    const getTotal = (): number => {
      const { total = 1 } = props.pagination || {};
      return total;
    };

    const onSelectionChange = (rows: any) => {
      const rowKey = props.config?.['current-row-key'];
      const selectedKeys = rows.map(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (row: { [key: string]: any }, index: number) => row[rowKey as string]
      );

      if (props.rowSelection && props.rowSelection.onChange) {
        props.rowSelection.onChange(selectedKeys, rows);
      }
    };
    ctx.emit('onPageChange');

    return {
      ...toRefs(state),
      getSize,
      getCurrent,
      getTotal,
      onSelectionChange
    };
  }
};
export interface ConfigType {
  height?: string | number;
  'max-height'?: string | number;
  stripe?: boolean;
  border?: boolean;
  size?: string;
  fit?: boolean;
  'highlight-current-row'?: boolean;
  'current-row-key'?: string;
  'empty-text'?: string;
}
export interface ColumnType {
  label: string;
  prop: string;
  width?: number;
  formatter?: (
    row?: object,
    column?: object,
    cellValue?: string,
    index?: number
  ) => string;
  customRender?: boolean;
  editable?: boolean;
}
type SelectedRowKeysType = string[];

export interface RowSelectionType {
  selectedRowKeys: SelectedRowKeysType;
  onChange: (keys: SelectedRowKeysType, rows?: object[]) => void;
}
export interface PaginationType {
  current: number;
  total: number;
  size?: number;
}

export interface PaginationConfigType {
  'hide-on-single-page'?: boolean;
  layout?: string;
}
</script>
<style lang="scss" scoped></style>
