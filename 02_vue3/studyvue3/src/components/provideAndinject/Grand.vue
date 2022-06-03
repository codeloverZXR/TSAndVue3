<template>
  <h4>实现爷爷和孙子组件的通信</h4>
  <h4>我是Grand组件</h4>
  <h5>我的数据:{{ text }}</h5>
  <button @click="updateDate">修改自身数据</button>
  <hr>
  <dad-vue></dad-vue>
</template>

<script lang='ts'>
import DadVue from './Dad.vue'
import { defineComponent, provide, ref } from 'vue'
export default defineComponent({
  //provide和inject提供依赖注入
  components: {
    DadVue
  },
  name: 'Grand',
  setup() {
    const text = ref('hello')
    // provide('标识',要传递的数据)
    provide('text', text)
    const updateDate = () => {
      text.value += 'ha'
    }
    return {
      text,
      updateDate
    }
  },

})
</script>

<style scoped>
</style>