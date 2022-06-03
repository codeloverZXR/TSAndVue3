<template>
  <h4>我是父组件</h4>
  <!-- 虽然父组件会改变，但子组件没有改变 -->
  父组件自己的name值为:{{name}}
  <button @click="changName">修改父组件name的值</button>
  <!-- 本质：将父组件name的值赋值给子组件的name -->
  <child-demo-vue :name = name></child-demo-vue>
</template>

<script lang='ts'>
import ChildDemoVue from './Child/ChildDemo.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'UsingToRefandRef',
  components: {
    ChildDemoVue
  },
  setup() {
    const name = ref('hello')
    const changName = () => {
      name.value += 'ha'
    }
    return {
      name,
      changName
    }
  },
})
</script>

<style scoped>
</style>