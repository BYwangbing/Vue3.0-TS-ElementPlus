<template>
  <div class="container" @mousedown="mousedown">
    <h1>TodoList</h1>
    <h3>
      共有
      <span class="text-primary">{{ lists.length }}</span>
      个任务 已完成
      <span class="text-success">{{ finished.length }}</span>
      个任务
    </h3>
    <h3>未完成的列表</h3>
    <ul class="list-group">
      <template v-for="(item, index) in lists">
        <li v-if="!item.checked" :key="index">
          <input
            type="checkbox"
            v-model="item.checked"
            @click="() => (item.checked = !item.checked)"
          />
          <label v-if="!item.isEdit" @dblclick="showEdit(item, index)">
            {{ item.name }}
          </label>
          <input v-else type="text" v-model="editValue" ref="myInput" />
          <el-button @click="remove(index)" type="danger" size="mini">
            删除
          </el-button>
          <el-divider />
        </li>
      </template>
    </ul>
    <h3>已完成的列表</h3>
    <ul class="list-group">
      <li
        v-for="(item, index) in finished"
        :key="index"
        @click="() => (item.checked = !item.checked)"
      >
        <input
          type="checkbox"
          v-model="item.checked"
          :id="'finished-' + index"
        />
        {{ item.name }}
        <el-divider />
      </li>
    </ul>
    <h3>添加新的Task</h3>
    <el-input
      v-model="value"
      placeholder="添加新的Task"
      @keydown.enter="add"
      size="mini"
      style="width: 320px; margin-right: 15px"
    ></el-input>
    <el-button type="primary" plain @click="add" size="mini">
      确定添加
    </el-button>
  </div>
</template>
<script lang="ts">
import { ref, reactive, toRefs, computed, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import ElementPlus from '@/utils/ElementPlusExtension';
import { get } from 'lodash';
import { TodoLists } from './options';
import { providerFetch } from './config';

export default {
  name: 'TodoList',
  setup() {
    let editIndex = 0;
    const myInput = ref(null);
    const state: Record<string, any> = reactive({
      value: '',
      editValue: '',
      lists: TodoLists,
      finished: computed(() =>
        state.lists.filter((item: any) => item.checked === true)
      )
    });
    /*
        1.加入checkbox ->checked
        2.统计哪些-> checked-> finish列表
    */
    // 3.add添加item -> item数据结构->name,checked,isEdit
    const add = () => {
      if (state.value) {
        state.lists.push({
          name: state.value,
          check: false,
          finished: false
        });
        state.value = '';
        ElementPlus.message.success({
          showClose: true,
          message: '添加成功',
          type: 'error'
        });
      } else {
        ElMessage.error({
          showClose: true,
          message: '请添加新的Task',
          type: 'error'
        });
      }
    };
    // 4.双击进行编辑
    const showEdit = (item: any, index: number) => {
      editIndex = index;
      item.isEdit = true;
      state.editValue = item.name;
    };
    const mousedown = (e: any) => {
      if (myInput.value && e.target !== myInput.value) {
        state.lists[editIndex] = {
          name: state.editValue,
          check: false,
          finished: false
        };
      }
    };
    // 5.删除功能—>删除特定index的元素
    const remove = (index: number) => {
      state.lists.splice(index, 1);
    };

    const getProviderList = async () => {
      try {
        const response = await providerFetch({
          type: 'providers'
        });
        if (response.code === 0) {
          console.log('response: ', response);
          /* const options = get(response, 'data', []).map((item: any) => ({
            label: item,
            value: item
          })); */
        } else {
          throw new Error(response.msg);
        }
      } catch (error) {
        console.log('error: ', error);
      }
    };

    onMounted(() => {
      getProviderList();
    });

    return {
      ...toRefs(state),
      add,
      showEdit,
      mousedown,
      myInput,
      remove
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 960px;
  margin: 0 auto;
  .list-group {
    button {
      float: right;
    }
  }
}
</style>
