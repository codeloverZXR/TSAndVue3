<template>
  <div>我是父组件</div>
  <button @click="changChild">切换vue2/vue3</button>
  <hr />
  <VV2xxVue v-if="isActive"/>
  <VV3xxVue v-else/>
</template>

<script lang='ts'>
import VV2xxVue from "./VV2xx.vue";
import VV3xxVue from './VV3xx.vue'
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Tester",
  components: {
    VV2xxVue,
    VV3xxVue
  },
  setup() {
    let isActive = ref(true)
    const changChild = () => {
      isActive.value = !isActive.value
      // console.log(isActive.value)
    };
    return {
      isActive,
      changChild
    };
  },
});
</script>

<style scoped>
</style>