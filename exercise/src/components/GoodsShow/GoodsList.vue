<template>
  <div id="goodslist">
    <div v-for="(item, index) in goods" :key="index">
      <goods-list-item-vue :todo="item" :index="index" :delateGood="delateGood" @changeChecked="changeCheck"></goods-list-item-vue>
    </div>
  </div>
</template>

<script lang='ts'>
import GoodsListItemVue from './child/GoodsListItem.vue'
import { Igood } from '@/type/Igood'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GoodsList',
  components: {
    GoodsListItemVue
  },
  props: {
    goods: {
      type: Array as () => Igood[],
      required: true
    },
    delateGood: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const changeCheck = (index: number) => {
      context.emit('changeChecked', index)
    }
    return {
      changeCheck
    }
  },
})
</script>

<style scoped>
#goodslist {
  margin: 0 auto;
  margin-top: 5px;
  border: 2px solid rgba(0, 0, 0, .3);
  border-top: none;
}
</style>