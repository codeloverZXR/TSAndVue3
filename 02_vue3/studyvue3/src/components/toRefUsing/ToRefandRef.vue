<template>
 <h4>stateByRactive(state):{{ stateByRactive }}</h4>
  <h4>names:{{ names }}</h4>
  <h4>age:{{age}}</h4>
  <button @click="test">Test</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, toRef } from 'vue'
export default defineComponent({
  name: 'ToRefandRef',
  setup() {
    const state = {
      names: 'tom',
      age: 20
    }
    const stateByRactive = reactive(state)
    const names = ref(state.names)
    const age = toRef(state,'age')
    const test = function () {
      //-关于reactive()
      //1.修改reactive代理的对象和直接修改state都会改变state内部的数据
      //2.使用时必须要用代理对象才可以是响应式的显示state内部的数据
      // state.names += 'S'
      // stateByRactive.names += 'R'
      // console.log(state)
      //-关于ref
      //修改ref代理的对象，数据虽然是响应式的，但本质上是将ref函数的参数值进行了拷贝
      //拷贝了一份新的数据值单独操作, 更新时不影响原来的数据，只影响拷贝生成的ref对象内的数据
      names.value += 'ref'
      // console.log(names)
      //关于toRef
      //修改toRef生成的代理对象，不仅数据是响应式的，而且内部数据发生改变时还会直接修改所代理的那个原数据
      age.value += 5
      // console.log(age)
    }
    console.log(stateByRactive)
    return {
      stateByRactive,
      names,
      age,
      test
    }
  },
})
</script>

<style scoped>
</style>