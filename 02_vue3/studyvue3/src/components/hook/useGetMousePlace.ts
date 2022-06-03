/* 
  使用Vue3的组合API封装的可复用的功能函数
  自定义hook的作用类似于vue2中的mixin技术
  自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
*/
import { onMounted, onUnmounted, ref } from "vue";
export default function useGetMousePlace() {
  //初始化x,y值，并为他们添加ref响应式
  let x = ref(0);
  let y = ref(0);
  //定义点击事件回调函数
  const getMousePlace = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };
  //挂载后，为document添加事件点击监听
  onMounted(() => {
    document.addEventListener("click", getMousePlace);
  });
  //页面销毁前去除document点击监听
  onUnmounted(() => {
    document.removeEventListener("click", getMousePlace);
  });
  return {
    x,
    y,
  };
}