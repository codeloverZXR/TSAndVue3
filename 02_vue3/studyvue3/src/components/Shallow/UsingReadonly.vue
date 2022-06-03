<template>
  {{ state1 }}
  <button @click="updateData">更新Readonly数据(不可更新)</button>
  <br>
  {{ state2 }}
  <button @click="updateData">更新shallowReadonly数据(只可更新深层数据)</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
  name: 'UsingReadonly',
  /* 
    readonly:
     -深度只读数据
        获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
        只读代理是深层的：访问的任何嵌套 property(属性) 也是只读的。
    shallowReadonly:
     -浅只读数据
        创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
    应用场景:
        在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除
  */
  setup() {
    //readonly
    const state1 = readonly(reactive({
      name: 'Tom',
      age: 18,
      wife: {
        name: 'kate'
      }
    }))
    //shallowReadonly
    const state2 = shallowReadonly(reactive({
      name: 'Tom',
      age: 18,
      wife: {
        name: 'kate'
      }
    }))
    //updateData
    const updateData = function () {
      //state1.name += 'ha'//报错，不可修改
      //state1.wife.name += 'wa'//报错，不可修改
      //state2.name += 'ha'//报错，不可修改
      state2.wife.name += 'wa'//未报错，可修改
    }
    return {
      state1,
      state2,
      updateData
    }
  },
})
</script>

<style scoped>
</style>