<template>
  <div ref="test">
    {{ message }}
  </div>
  <button @click="updateData">数据更新</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'nextTick',
  data() {
    return {
      message: '旧数据'
    }
  },
  methods: {
    updateData() {
      this.message = '新数据'
      console.log(this.message)
      console.log(this.$refs.test) // => '未更新'
      this.$nextTick(function () {
        console.log('数据更新完成') // => '已更新'
      })
    }
  }
})
</script>

<style scoped>
</style>