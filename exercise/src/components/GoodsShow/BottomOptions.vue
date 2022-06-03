<template>
  <div id="bottomoption">
    <div>
      <input type="checkbox" v-model="ifCheckAll">
      <span>全选</span>
      <span>已选中({{ isChecked }})/</span>
      <span>总数({{ allGoods }})</span>
    </div>
    <button @click="delAllCheckGoods">删除已选中</button>
  </div>
</template>

<script lang='ts'>
import { Igood } from '@/type/Igood'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'BottomOptions',
  props: {
    goods: {
      type: Array as () => Igood[],
      required: true
    },
    changeAllChecked: {
      type: Function,
      required: true
    },
    delAllChecked: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    //显示选中的个数
    const isChecked = computed(() => {
      return props.goods.filter(item => item.checked === true).length
    })
    //显示全部商品的个数
    const allGoods = computed(() => {
      return props.goods.length
    })
    //全选/全不选
    const ifCheckAll = computed({
      get(): boolean {
        return allGoods.value > 0 && isChecked.value === allGoods.value
      },
      set(newValue: boolean) {
        props.changeAllChecked(newValue)
      }
    })
    //删除所有选中商品
    const delAllCheckGoods = () => {
      props.delAllChecked()
    }
    return {
      isChecked,
      allGoods,
      ifCheckAll,
      delAllCheckGoods
    }
  },
})
</script>

<style scoped>
#bottomoption {
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  border: 2px dashed rosybrown;
  border-radius: 5px;
  padding: 0 3px;
}

#bottomoption div {
  display: flex;
  align-items: center;
}

#bottomoption div>:nth-child(2) {
  margin-right: 5px;
}
</style>