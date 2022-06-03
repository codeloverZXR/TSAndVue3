import { ref } from "vue"
import axios from "axios"
export default function useRequire<T>(url: string) {
  //定义请求数据
  const result = ref<T | null>(null)
  //定义加载情况
  const loading = ref(false)
  //定义错误信息
  const errMessage = ref('')
  //发送网络请求
  axios.get(url).then(res => {
    loading.value = true
    result.value = res.data
  }).catch(err => {
    loading.value = false
    errMessage.value = err
  })
  
  return {
    result,
    loading,
    errMessage
  }
}