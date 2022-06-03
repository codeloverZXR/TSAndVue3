<template>
  <div>{{ test }}</div>
  <button @click="changCount">数据改变</button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SetUpUse",
  //需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
  //For vue2:
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   changCount(){
  //     this.count++
  //   }
  // },
  //For vue3
  setup(){
    // console.log('I am setup')
    // const count = 0//此时的数据不是响应式的数据
    //ref是一个函数，可以将一个基本类型的数据定义为一个响应式的数据，返回的是一个Ref对象，对象中有一个value属性，如果要对这个属性值进行更改，则需要
    //使用.value的方式进行操作
    //html模板中是不需要使用.value属性的写法去进行访问的
    //count的类型：Ref类型
    const count = ref(0)
    const count1 = 0
    const test = ref(count1)
    // console.log(count,'1')
    // console.log(test)
    function changCount(){
      //修改count的值
      test.value++
    }
    return{
      //向外抛出变量和函数
      test,
      changCount
    }
  }
});
</script>

<style scoped>
</style>
