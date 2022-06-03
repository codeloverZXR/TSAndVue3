<template>
  <h4>我是动态引入的子组件</h4>
  {{ data }}
  {{ message }}
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'NsyncCpn',
  async setup() {
    const reasult = await axios.get('/data/address.json')
    let message = ref('')
    setTimeout(() => {
      message.value = 'hello'
    }, 5000);
    return {
      data: reasult.data,
      message
    }
  },
})
</script>

<style scoped>
</style>