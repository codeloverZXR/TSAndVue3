<template>
  <div class="goodslistitem" @mouseenter="changeStyle(true)" @mouseleave="changeStyle(false)"
    :style="{ backgroundColor: bgColor, color: color }">
    <div>
      <input type="checkbox" :checked="todo?.checked" @click="changeCheck">
      <span>{{ todo?.name }}</span>
    </div>
    <button @click="delGood" v-show="isShow">删除</button>
  </div>
</template>

<script lang='ts'>
import { Igood } from '@/type/Igood'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'GoodsListItem',
  props: {
    todo: {
      type: Object as () => Igood,//指定item返回的是自定义的Igood对象
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    delateGood: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    //修改商品选中状态
    const changeCheck = () => {
      context.emit('changeChecked', props.index)
    }
    //删除商品
    const delGood = () => {
      if (window.confirm('确定删除？')) {
        props.delateGood(props.index)
      }
    }
    //标记背景色状态
    let bgColor = ref('white')
    //标记文字颜色状态
    let color = ref('black')
    //标记删除是否显示
    let isShow = ref(false)
    //修改选中商品样式
    const changeStyle = (flag: boolean) => {
      if (flag) {
        bgColor.value = 'yellow',
          color.value = 'red'
        isShow.value = true
      } else {
        bgColor.value = 'white',
          color.value = 'black',
          isShow.value = false
      }

    }
    return {
      changeCheck,
      delGood,
      changeStyle,
      bgColor,
      color,
      isShow
    }
  }
})
</script>

<style scoped>
.goodslistitem {
  border-top: 2px solid rgba(0, 0, 0, .3);
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
}

.goodslistitem div {
  display: flex;
  align-items: center;
}

.goodslistitem div input {
  margin-right: 3px;
}

.goodslistitem button {
  width: 40px;
  text-align: center;
  line-height: 20px;
}
</style>