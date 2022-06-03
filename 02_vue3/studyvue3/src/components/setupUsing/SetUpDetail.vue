<template>
  <div>{{ message }}</div>
  <div>{{ message1 }}</div>
  <set-up-detail-child-vue
    :childData="childData"
    test="hello"
    @change="changeData"
  />
  <hr>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SetUpDetailChildVue from "./SetUpDetailChild.vue";
export default defineComponent({
  name: "SetUpDetail",
  components: {
    SetUpDetailChildVue,
  },
  beforeCreate() {
    console.log("beforeCreate has been used");
  },
  /* 
  setup细节问题：
    1.setup是在beforCreate()生命周期回调开始之前就执行了，且只执行一次
    2.在setup执行的时候，当前的组件还没有创建出来，也就意味着组件实例对象的this指针
    根本就没有创建，无法进行使用，其值为undefined，不能通过this去调用data/computed/methods/props中相关的内容
    3.所有的composition API相关的回调函数都不可以使用
    4.setup的返回值是一个对象，内部属性和方法可以向外暴露给模板直接使用
    5.setup中向外暴露的属性和data函数中return出去的属性会合并为组件对象的属性，
    向外暴露的对象方法和methods对象中的方法会合并为组件对象的方法
    6.vue3中尽量不要混合使用data和setup 以及 methods和setup
    7.setup不能是一个asyns函数：因为这种函数的返回值不再是一个对象了，而是promise，模板看不到return出去的数据
  */
  setup() {
    console.log("setup has been used");
    const message = ref("message");
    const childData = ref("CHILD");
    function changeData(value: any) {
      childData.value += value;
    }
    return {
      message,
      childData,
      changeData,
    };
  },
  data() {
    return {
      message1: "message1",
    };
  },
  mounted() {
    // console.log(this);
  },
});
</script>

<style scoped>
</style>