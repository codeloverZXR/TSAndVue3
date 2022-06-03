<template>
  <h4>我是Dad组件</h4>
  <hr>
  <son-vue></son-vue>
</template>

<script lang='ts'>
import SonVue from './Son.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Dad',
  components: {
    SonVue
  },
  setup() {
    return {
    }
  },
})
</script>

<style scoped>
</style>