<template>
  <div>我是子组件vv2</div>
  <h2>{{ message }}</h2>
  <button @click="changeMes">更改组件vv2数据</button>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VV2xx",
  beforeCreate() {
    console.log("vue2 beforeCreate");
  },
  created() {
    console.log("vue2 created");
  },
  beforeMount() {
    console.log("vue2 beforeMount");
  },
  mounted() {
    console.log("vue2 mounted");
  },
  beforeUpdate() {
    console.log("vue2 beforeUpdate");
  },
  updated() {
    console.log("vue2 updated");
  },
  beforeUnmount() {
    console.log("vue2 beforeUnmount");
  },
  Unmount() {
    console.log("vue2 Unmount");
  },
  data() {
    return {
      message: "我是vv2中的信息",
    };
  },
  methods: {
    changeMes() {
      this.message += "ha";
    },
  },
});
</script>

<style scoped>
</style>