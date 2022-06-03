<template>
  <div id="showgoods">
    <!-- 头部搜索框 -->
    <head-inpt-vue :addGood="addGood"></head-inpt-vue>
    <!-- 商品展示 -->
    <goods-list-vue :goods="goods" :delateGood="delateGood" @changeChecked="changeCheck"></goods-list-vue>
    <!-- 底部选项操作 -->
    <bottom-options-vue :goods="goods" :changeAllChecked="changeAllChecked" :delAllChecked="delAllChecked">
    </bottom-options-vue>
  </div>
</template>

<script lang='ts'>
import HeadInptVue from './HeadInpt.vue'
import GoodsListVue from './GoodsList.vue'
import BottomOptionsVue from './BottomOptions.vue'
import { saveGoods, readGoods } from '@/utils/localStorageGoods'
import { defineComponent, reactive, watch } from 'vue'
// 引入类型接口约束商品属性
import { Igood } from '@/type/Igood'
export default defineComponent({
  name: 'ShowGoods.vue',
  components: {
    HeadInptVue,
    GoodsListVue,
    BottomOptionsVue

  },
  setup() {
    //从缓存中读取goods
    let goods = reactive<Igood[]>(readGoods())
    console.log(goods)
    //监视商品列表的变化，只要已发生改变，就将新的商品列表加入到缓存
    watch(() => goods, () => {
      saveGoods(goods)
    }, { deep: true })
    //更改商品是否选中
    const changeCheck = (index: number) => {
      goods[index].checked = !goods[index].checked
    }

    //添加商品
    const addGood = (good: Igood) => {
      goods.unshift(good)
    }
    //删除商品
    const delateGood = (index: number) => {
      goods.splice(index, 1)
    }
    //选中/不选中所有商品
    const changeAllChecked = (newValue: boolean) => {
      goods.forEach(item => item.checked = newValue)
    }
    //删除已选中商品
    const delAllChecked = () => {
      // console.log(goods)
      //选出所有选中的商品 
      /* 
      数组响应式问题：
      1.push()、pop()、shift()、unshift()、splice()、sort()、reverse()可被vue监测到
      2.filter()、concat()和slice(),这些不会改变原始数组，但是会返回一个新数组，所以不可以被
      直接响应式得到
      3.所以不可以直接利用filer去过滤出想要的数组
      */
      const delgoods = goods.filter(item => item.checked === true)
      // console.log(goods)
      for (let i = 0; i < goods.length; i++) {
        for (let j = 0; j < delgoods.length; j++) {
          if (goods[i] === delgoods[j]) {
            goods.splice(i, 1)
          }
        }
      }
    }
    return {
      goods,
      changeCheck,
      addGood,
      delateGood,
      changeAllChecked,
      delAllChecked
    }
  },
})
</script>

<style scoped>
#showgoods {
  width: 500px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, .5);
  padding: 5px;
}
</style>