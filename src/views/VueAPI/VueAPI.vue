<template>
  <div class="container">
    {{ count }}
    <el-button type="success" size="mini" @click="add">成功按钮</el-button>
    <el-divider />
    <div ref="sentence">
      在漫天风沙里 望着你远去 我竟悲伤得不能自已 多盼能送君千里 直到山穷水尽
      好啦。你走吧。
    </div>
    <div
      v-for="(item, i) in list"
      :key="i"
      :ref="
        el => {
          divs[i] = el;
        }
      "
    >
      {{ item }}
    </div>
    <el-divider />
    <el-button type="success" size="mini" @click="getSentence">
      成功按钮
    </el-button>
  </div>
</template>
<script lang="ts">
import {
  onBeforeUpdate,
  reactive,
  ref,
  unref,
  toRefs,
  watch,
  watchEffect,
  Ref
} from 'vue';
export default {
  name: 'VueAPI',
  setup() {
    const count = ref(0);
    const sentence = ref();
    const divs = ref([]);
    const state = reactive({
      list: [
        '斯人若彩虹，遇上方知有 .',
        '“一扇不愿意为你开的门，一直敲是不礼貌的”',
        '奶茶这么好喝 自己喝两杯不好么',
        '没有谁对谁错，只怪科技太弱。因为技术原因，断网的那一刻，我们的爱就404 Not found了。'
      ]
    });
    const useFoo = (x: number | Ref<number>) => {
      /* unref : 如果参数是一个 ref 则返回它的 value，否则返回参数本身。
      它是 val = isRef(val) ? val.value : val 的语法糖。 */
      return unref(x); // 一定是 number 类型
    };
    const add = () => {
      count.value++;
    };

    const getSentence = () => {
      // 模板 ref 仅在渲染初始化后才能访问。
      console.log(sentence.value.innerText);
      console.log(divs);
    };
    // 确保在每次变更之前重置引用
    onBeforeUpdate(() => {
      divs.value = [];
    });
    // watchEffect 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    watchEffect(() => {
      // 监听值变化执行事件
      count.value++;
      console.log(useFoo(count));
      // console.log(count.value);
    });
    watch(count, (count, prevCount) => {
      // 监听值变化取新旧值
      console.log(count, prevCount);
    });
    // 之后
    stop();
    return {
      ...toRefs(state),
      sentence,
      divs,
      count,
      useFoo,
      add,
      getSentence
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 960px;
  margin: 0 auto;
}
</style>
