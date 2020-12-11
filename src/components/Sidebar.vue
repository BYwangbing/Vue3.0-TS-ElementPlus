<template>
  <div></div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import { routes } from '@/router/index';
export default {
  name: 'Sidebar',
  setup() {
    const allRoutes = () => {
      return routes;
    };
    onMounted(() => {
      console.log(allRoutes);
    });
    return { allRoutes };
  }
};
</script>
<style lang="scss" scoped></style>
