<template>
  <show-goods-vue></show-goods-vue>
</template>

<script lang='ts'>
import ShowGoodsVue from './components/GoodsShow/ShowGoods.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    ShowGoodsVue
  },
  setup() {
    return {
    }
  },
})
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>