<template>
  <h4>customRef实现防抖</h4>
  <p>普通ref:</p>
  <input type="text" v-model="text">
  <p>{{ text }}</p>
  <p>customRef:</p>
  <input type="text" v-model="textByTime">
  <p>{{ textByTime }}</p>
</template>

<script lang='ts'>
import { customRef, defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'debounceByit',
  setup() {
    //默认情况下，数据都是直接响应式的，修改数据直接发生改变，可以通过自定义ref对数据进行防抖
    const text = ref('hello')
    //定义一个具有防抖性质的ref,在delay时间段内修改数据，该数据不会立马发生改变
    const textByTime = useDebouncedRef<string>('hi', 500)
    //自定义一个ref，生成的数据既是响应式的也是在dalay时间段内防抖节流的
    function useDebouncedRef<T>(value: T, delay: number) {
      //定义一个timer变量用于接收定时器
      let timer: number
      return customRef((track, trigger) => {
        return {
          //获取数据
          get() {
            //告诉Vue追踪数据
            track()
            return value
          },
          //修改数据
          set(newValue: T) {
            clearInterval(timer)
            timer = setTimeout(() => {
              value = newValue
              //告诉Vue更新界面
              trigger()
            }, delay)
          }
        }
      })
    }
    return {
      text,
      textByTime
    }
  },
})
</script>

<style scoped>
</style>