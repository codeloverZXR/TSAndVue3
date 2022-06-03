<template>
  <h4>我是Son组件</h4>
  <h5>收到来自Ground的数据:{{ text }}</h5>
  <button @click="fun">修改来自Ground的数据</button>

</template>

<script lang='ts'>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'Son',
  setup() {
    const text = inject('text')
    const fun = () => {
      text + 'aa'
    }
    return {
      text,
      fun
    }
  },
})
</script>

<style scoped>
</style>