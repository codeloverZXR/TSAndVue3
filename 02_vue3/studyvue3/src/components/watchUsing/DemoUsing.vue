<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏:<input type="text" placeholder="请输入姓氏" v-model="user.firstName" />
    <br />
    名字:<input type="text" placeholder="请输入名字" v-model="user.lastName" />
    <br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名(计算属性实现--单向):<input
      type="text"
      placeholder="姓名"
      v-model="fullName1"
    />
    <br />
    姓名(计算属性实现--双向):<input
      type="text"
      placeholder="姓名"
      v-model="fullName2"
    />
    <br />
    姓名(watch监视--单向):<input
      type="text"
      placeholder="姓名"
      v-model="fullName3"
    />
    <br />
    姓名(watch监视--双向):<input
      type="text"
      placeholder="姓名"
      v-model="fullName4"
    />
    <br />
  </fieldset>
</template>

<script lang='ts'>
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "DemoUsing",
  setup() {
    const user = reactive({
      firstName: "诸葛",
      lastName: "孔明",
    });
    //默认情况下，computed只有get获取值的方法，不能修改值
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(value: string) {
        const names = value.split("_");
        if (user.firstName) {
          user.firstName = names[0];
        }
        if (user.lastName) {
          user.lastName = names[1];
        }
      },
    });
    const fullName3: any = ref("");
    /* 
    watch(监视数据,(监视数据的新值,监视数据的旧值) => {},{配置}) 
     常用配置：
        1.immediate:是否开启立即监视
        2.deep:是否开启深度监视
     */
    watch(
      user,
      (newValue, oldValue) => {
        /*
        注意：当监听proxy数据时      
          1.此时vue3将强制开启deep深度监听
          2.当监听值为proxy对象时，oldValue值将出现异常，此时与newValue相同 
          3.当监听proxy对象的属性为复杂数据类型时，需要开启deep深度监听（deep:true）
          4.监听proxy内部的属性数据时，要在前面加入()=>来返回 
        */
        // console.log(newValue)
        // console.log(oldValue)
        fullName3.value = user.firstName + "_" + user.lastName;
      },
      { immediate: true, deep: true }
    );

    //watchEffect
    //不需要指定监视的数据和配置，默认就会立即执行监视
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });
    /* 
    watch和watchEffect的区别
      watch 是需要传入侦听的数据源，而 watchEffect 是自动收集数据源作为依赖。
      watch 可以访问侦听状态变化前后的值，而 watchEffect 没有。
      watch 是属性改变的时候执行，而 watchEffect 是默认会执行一次，然后属性改变也会执行。
    */

    // 实现双向
    //watchEffect实现,创建两个监视器，分别监视user和fullName4
    /* 
    const fullName4 = ref("");
    watchEffect(() => {
      fullName4.value = user.firstName + "_" + user.lastName;
    });
    watchEffect(() => {
      const names = fullName4.value.split("_");
      if (user.firstName) {
        user.firstName = names[0];
      }
      if (user.lastName) {
        user.lastName = names[1];
      }
    }); */

    //watch实现
    const fullName4 = ref("");
    //监视多个数据
    //方式一：vue3允许多个watch监听器存在
    //方式二：将需要监听的数据添加到数组
    //该需求的实现方式特殊，必须要创建多个监视器，防止相互同步监听死循环
    /* 
    注意：
    1.监听ref类型的数据时，直接监听即可
    2.监听proxy内部的属性数据时，要在前面加入()=>来返回 
    */
    watch(
      [() => user.firstName, () => user.lastName],
      () => {
        fullName4.value = user.firstName + "_" + user.lastName;
      },
      { immediate: true, deep: true }
    );
    watch(
      fullName4,
      (newValue, oldValue) => {
        // console.log(newValue)
        // console.log(oldValue)
        const names = fullName4.value.split("_");
        if (user.firstName) {
          user.firstName = names[0];
        }
        if (user.lastName) {
          user.lastName = names[1];
        }
      },
      { immediate: true, deep: true }
    );

    return {
      user,
      fullName1,
      fullName2,
      fullName3,
      fullName4,
    };
  },
});
</script>

<style scoped>
</style>