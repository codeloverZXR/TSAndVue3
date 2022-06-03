<template>
  <h4>toRefs的具体应用</h4>
  name:{{ name }} age:{{ age }}
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
/* 
应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
问题: reactive 对象取出的所有属性值都是非响应式的
解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
*/
function stateToRefs() {
  const state = reactive({
    name: "zxr",
    age: "21",
    wife:{
      name:'hahaha'
    }
  });
  console.log(state.wife,'hjajaj')
  return {
    //解构+转换
    ...toRefs(state),
  };
}
export default defineComponent({
  name: "ToRefsUsing",
  setup() {
    const { name, age } = stateToRefs();
    return {
      name,
      age,
    };
  },
});
</script>

<style scoped>
</style>