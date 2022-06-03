<template>
  <!-- Teleport 提供了一种干净的方法, 让组件的html在父组件界面外的
特定标签(很可能是body)下插入显示 -->
  <button @click="isShow = true">显示对话框</button>
  <teleport to="body">
    <div v-if="isShow" class="hidden">
      <div>
        我是对话框
      </div>
      <button @click="isShow = false">关闭对话框</button>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Teleport',
  setup() {
    let isShow = ref(false)
    return {
      isShow
    }
  },
})
</script>

<style scoped>
.hidden {
  background-color: bisque;
  width: 50%;
  height: 300px;
  text-align: center;
}
</style>