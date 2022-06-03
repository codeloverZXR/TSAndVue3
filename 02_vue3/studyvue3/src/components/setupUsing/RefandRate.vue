<template>
  <div>m1:{{ m1 }}</div>
  <div>m2:{{ m2 }}</div>
  <div>m3:{{ m3 }}</div>
  <button @click="change">test</button>
</template>

<script lang='ts'>
/* 
ref和reactive的区别
    是Vue3的 composition API中2个最重要的响应式API
    ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
    如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
    ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
    reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
    ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
*/
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "RefandRate",
  setup() {
    const m1 = ref("m1");
    const m2 = reactive({
      name: "tom",
      wife: {
        name: "kate",
      },
    });
    //如果ref传入一个对象，则会把这个对象处理为Proxy代理类型用.value的形式进行访问
    const m3 = ref({
      name: "小明",
      wife: {
        name: "小红",
      },
    });
    const change = () => {
      m2.name += "@";
      m2.wife.name += "#";
      m3.value.name += "@";
      m3.value.wife.name += "#";
    };
    console.log(m2.wife)
    console.log(m3.value.wife)
    return {
      m1,
      m2,
      m3,
      change,
    };
  },
});
</script>

<style scoped>
</style>