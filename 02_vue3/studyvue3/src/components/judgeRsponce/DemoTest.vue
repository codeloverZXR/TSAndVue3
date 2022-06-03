<template>
  <p>isRef: 检查一个值是否为一个 ref 对象</p>
  <p>isReactive: 检查一个对象是否是由 reactive 创建的响应式代理</p>
  <p>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</p>
  <p>isReadonly: 检查一个对象是否是由 readonly 创建的只读代理</p>
</template>

<script lang='ts'>
import { defineComponent, isProxy, isReactive, isReadonly, isRef, ref, reactive, readonly } from 'vue'
export default defineComponent({
  name: 'DemoTest',
  setup() {
    // isRef: 检查一个值是否为一个 ref 对象
    console.log(isRef(ref({})))
    // isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
    console.log(isReactive(reactive({})))
    // isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
    console.log(isReadonly(readonly({})))
    // isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
    console.log(isProxy(ref({})))
    console.log(isProxy(reactive({})))
    return {
    }
  },
})
</script>

<style scoped>
</style>