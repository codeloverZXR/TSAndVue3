<template>
  <h1>{{ state.name }}</h1>
  <h1>{{ state.age }}</h1>
  <h1>{{ state.gender }}</h1>
  <h1>{{ state.family }}</h1>
  <button @click="change">test</button>
  <h2>{{ obj }}</h2>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "UseRate",
  /*
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
   */
  setup() {
    const obj: any = {
      name: "tom",
      age: 18,
      family: {
        dad: "bob",
        mom: "kite",
        wife: "zudi",
      },
    };
    //把数据变成响应式的数据
    //返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
    //state现在是代理对象，obj是目标对象
    //state对象的类型是proxy
    //总结：如果操作代理对象，目标对象中的数据也会随之变化，同时如果想要在操作数据的时候，界面也
    //重新进行渲染更新，则也必须操作代理对象
    const state = reactive(obj);
    // console.log(obj);
    // console.log(state);
    function change() {
      // obj.name = "zzzzzzzz";
      // obj.gender = "女";
      state.name = "mmmmmmmm";
      state.gender = "男";
     
    }
    return {
      state,
      change,
      obj,
    };
  },
});
</script>

<style scoped>
</style>
