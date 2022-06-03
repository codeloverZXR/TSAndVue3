<template>
  <div>我是子组件vv3</div>
  <h2>{{ message }}</h2>
  <button @click="changeMes">更改组件vv3数据</button>
</template>

<script lang='ts'>
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default defineComponent({
  name: "VV3xx",
  setup() {
    let message = ref("我是子组件vv3中的信息");
    const changeMes = () => {
      message.value += "la";
    };
    //vue3 中 setup，代替了beforecreate和create
    //vue中，声明周期函数在setup中以api函数的形式进行调用,传入一个回调函数即可使用
    console.log('vue3 setup')
    onBeforeMount(() => {
      console.log("vue3 onBeforeMount");
    });
    onMounted(() => {
      console.log("vue3 onMounted");
    });
    onBeforeUpdate(() => {
      console.log("vue3 onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("vue3 onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("vue3 onBeforeUnmount");
    })
    onUnmounted(() => {
      console.log("vue3 onUnmounted");
    })
    return {
      message,
      changeMes,
    };
  },
});
</script>

<style scoped>
</style>