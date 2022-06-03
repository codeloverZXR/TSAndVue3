<template>
  <h4>点击页面获取对应坐标</h4>
  <div>x:{{ x }},y:{{ y }}</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
//移入自定义hook
import getMousePlace from "./useGetMousePlace";
export default defineComponent({
  name: "FirstDemo",
  setup() {
    //解构获取函数的返回值x和y
    let { x, y } = getMousePlace();
    return {
      x,
      y,
    };
  },
});
</script>

<style scoped>
</style>