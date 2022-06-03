<template>
  <p>{{ m1 }}</p>
  <p>{{ m2 }}</p>
  <p>{{ m3 }}</p>
  <p>{{ m4 }}</p>
  <button @click="updateData">更新数据</button>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";
export default defineComponent({
  /* 
  什么时候用浅响应式呢?
    一般情况下使用ref和reactive即可
    如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
  */
  name: "SRatandSRefDemo",
  setup() {
    //深度劫持(深监视)----深响应式
    const m1 = reactive({
      name: "Tom",
      age: "18",
      wife: {
        name: "kate",
        age: "18",
        cars: ["baoma", "aodi"],
      },
    });
    //只处理了对象内最外层属性的响应式(也就是浅响应式)
    const m2 = shallowReactive({
      name: "Tom",
      age: "18",
      wife: {
        name: "kate",
        age: "18",
        cars: ["baoma", "aodi"],
      },
    });
    //深度劫持(深监视)----深响应式,在监测对象时做了reactive的处理操作
    const m3 = ref({
      name: "Tom",
      age: "18",
      wife: {
        name: "kate",
        age: "18",
        cars: ["baoma", "aodi"],
      },
    });
    //只处理了value的响应式, 不进行对象的reactive处理
    const m4 = shallowRef({
      name: "Tom",
      age: "18",
      wife: {
        name: "kate",
        age: "18",
        cars: ["baoma", "aodi"],
      },
    });
    const updateData = function () {
      //更新m1的数据，使用reactive的方式
      // m1.name += "ha";
      // m1.wife.name += "wa";

      //更新m2的数据，使用shallowReactive的方式
      // m2.name += "ha";
      //注意：不能同时开启，否则可以访问到这一层
      // m2.wife.name += "wa";

      //更新m3的数据，使用ref的方式
      // m3.value.name += "ha";
      // m3.value.wife.name += "wa";

      //更新m4的数据，使用shallowRef的方式
      // m4.value.name += "ha";
      // m4.value.wife.name += "wa";
    };
    return {
      m1,
      m2,
      m3,
      m4,
      updateData,
    };
  },
});
</script>

<style scoped>
</style>