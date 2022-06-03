<template>
  <p>{{ data }}</p>
  <button @click="testToRow">testToRow</button>
  <p>{{ data }}</p>
  <button @click="testMarkRow">testMarkRow</button>
</template>

<script lang='ts'>
import { defineComponent, markRaw, reactive, toRaw } from 'vue'
export default defineComponent({
  name: 'ToRawandMarkRaw',
  /* 
  应用场景:
    有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
    当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。 */
  setup() {
    //定义接口，规范state内部属性的类型
    interface Istate {
      name: string;
      age: number;
      likes?: string[];
    }
    const state: Istate = {
      name: 'tom',
      age: 18
    }
    const data = reactive(state)
    //ToRow -生成某个响应式对象的非响应式普通对象
    // 返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
    // 这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。
    const testToRow = () => {
      // data.name += '1'
      //将data代理对象转换为toRaw形式，Rdata为代理对象的普通对象形式,内部数据不是响应式的了
      const Rdata = toRaw(data)
      console.log(data)
      console.log(Rdata)
      Rdata.age += 2//界面不会更新
    }
    //testMarkRow -标记一个对象，使其永远不会转换为代理。返回对象本身
    const testMarkRow = () => {
      const likes = markRaw(['pingpang', 'soccer'])
      data.likes = likes//该属性的添加是响应式的，但后续修改该数据就不是响应式的了
      setInterval(() => {
        if (data.likes) {
          data.likes[0] += 'ha'
          console.log('定时器被执行了')
          console.log(data.likes)
        }
      }, 1000)
    }
    return {
      data,
      testToRow,
      testMarkRow
    }
  },
})
</script>

<style scoped>
</style>