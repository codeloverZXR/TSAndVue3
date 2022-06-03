<template>
  <h4>我是父组件</h4>
  <Suspense>
    <!-- 定义再延时之后要加载的正确内容 -->
    <template #default>
    <NsyncCpnVue/>
    </template>
    <!-- 定义延时等待过程中要显示的内容 -->
    <template #fallback>
      <h3>加载中...</h3>
    </template>
  </Suspense>
</template>

<script lang='ts'>
import { defineAsyncComponent, defineComponent } from 'vue'
//测试方法一:由于动态引入是延时的，所以可以用于模拟延时加载
//vue2动态引入的方法 vue3中不可使用
// const NsyncCpnVue = () => import ('./child/NsyncCpn.vue')
//vue3动态引入的方法
const NsyncCpnVue = defineAsyncComponent(() => import ('./child/NsyncCpn.vue'))
//测试方法二:模拟子组件网络请求
export default defineComponent({
  name: 'Suspense',
  components:{
    NsyncCpnVue
  },
  setup() {
    return {
    }
  },
})
</script>

<style scoped>
</style>