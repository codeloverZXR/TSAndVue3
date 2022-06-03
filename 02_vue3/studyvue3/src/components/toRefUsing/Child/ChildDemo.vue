<template>
  <h4>我是子组件</h4>
  <p>父组件传递的名字为(nameByRef):{{ nameByRef }}</p>
  <p>父组件传递的名字为(nameByToRef):{{ nameByToRef }}</p>
</template>

<script lang='ts'>
import { defineComponent, ref, toRef } from 'vue'
export default defineComponent({
  name: 'ChildDemo',
  props: {
    name: {
      type: String,
      defluat: '无'
    }
  },
  setup(props) {
    console.log(props.name)
    //用ref的形式去做，拷贝的nameLength的值一直就是拷贝的那个初始值，因为原数据改变不会对其产生影响
    const nameByRef = ref(props.name)
    //而toRef的方式为源响应式对象上的某个属性创建一个 ref对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
    const nameByToRef = toRef(props,'name')
  
    return {
      nameByRef,
      nameByToRef
    }
  },
})
</script>

<style scoped>
</style>