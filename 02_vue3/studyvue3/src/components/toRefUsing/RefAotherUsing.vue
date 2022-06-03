<template>
<h4>ref的另一个作用:利用ref函数获取组件中的标签元素</h4>
<h4>功能需求: 让输入框自动获取焦点</h4>
输入框:<input type="text" ref="inputRef">
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'RefAotherUsing',
  //需求:当页面加载完毕后，页面中的文本框可以直接获取焦点
  setup() {
    //当页面还没加载完成时，inputRef默认为空，页面加载完毕时，inputRef为类型HTMLElement的组件内部标签元素
    const inputRef = ref<HTMLElement | null>(null)
    //页面加载完毕时的组合API
    onMounted(() => {
      //如果元素已经获取到，就调用该元素的focus()方法实现自动聚焦
      // if(inputRef.value){
      //   inputRef.value.focus()
      // }
      inputRef.value && inputRef.value.focus()
    })
    return {
      inputRef
    }
  },
})
</script>

<style scoped>
</style>