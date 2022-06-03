<template>
  <div id="headinput">
    <input type="text" placeholder="请输入你的任务名称,按回车确认" @keyup.enter="add" v-model="text">
  </div>
</template>

<script lang='ts'>
import { Igood } from '@/type/Igood'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HeadInpt',
  props: {
    addGood: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    //定义一个响应式字符串接收输入数据
    let text = ref('')
    //定义回车按键函数
    const add = () => {
      if (text.value.toString()) {
        const newGood: Igood = {
          id: Date.now(),
          name: text.value.toString(),
          checked: false
        }
        props.addGood(newGood)
        text.value = ''
      }
    }
    return {
      add,
      text
    }
  },
})
</script>

<style scoped>
#headinput {
  width: 100%;
}

#headinput input {
  width: 98%;
  display: block;
  height: 30px;
  margin: 0px auto;
  border: 2px solid burlywood;
}
</style>