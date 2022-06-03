<template>
  {{childData}}
  <button @click="changeData">ChildClick</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  /* 
  setup的参数
    setup(props, context) / setup(props, {attrs, slots, emit})
    props: 包含props配置声明且传入了的所有属性的对象
    attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    emit: 用来分发自定义事件的函数, 相当于 this.$emit
  */
  name: "SetUpDetailChild",
  props:[
    'childData'
  ],
  setup(props,context) {
    // console.log(props)
    // console.log(context.attrs)
    function changeData(){
      context.emit('change','ha')
    }
    return {
      changeData
    };
  },

});
</script>

<style scoped>
</style>