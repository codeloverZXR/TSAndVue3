<template>
  <h4>以state + reactive的形式</h4>
  <p>name:{{ state.name }}</p>
  <p>age:{{ state.age }}</p>
  <h4>以state + reactive + ...state解构的形式</h4>
  <p>name:{{ name }}</p>
  <p>age:{{ age }}</p>
  <h4>以state + reactive + toRefs 的形式</h4>
  <p>name:{{ state2.name1 }}</p>
  <p>age:{{ state2.age1 }}</p>
  <h4>以state + reactive + toRefs + ...state1解构的形式</h4>
  <p>name:{{ name1 }}</p>
  <p>age:{{ age1 }}</p>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "ToRefDemo",
  setup() {
    //缺点：解构出来的属性不具有响应式的特点
    const state = reactive({
      name: "zxr",
      age: 20,
    });
    //使用 toRefs 把一个响应式对象转换成普通对象，该普通对象的每个property（属性）都是一个ref
    /* 
    toRefs:
      将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
      应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
            这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
    */
    const state1 = reactive({
      name1: "zxr",
      age1: 20,
    });
    //toRefs转换
    const state2 = toRefs(state1);
    console.log(state2);
/*     setInterval(() => {
      state.name += "ha";
    }, 1000);
    setInterval(() => {
      state2.name1.value += "hei";
    }, 1000); */
    return {
      state,
      ...state,
      state2,
      ...state2,
    };
  },
});
</script>

<style scoped>
</style>