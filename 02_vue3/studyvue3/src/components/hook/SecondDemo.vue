<template>
  <h4>封装网络请求，并进行返回数据类型处理</h4>
  <div>
    <!-- <p>
      数据一(对象类型数据):
      <div v-if="result">
      <p>id:{{result.id}}</p>
      <p>address:{{result.address}}</p>
      <p>distence:{{result.distence}}</p>
      </div>
      <span v-else>数据未获取到</span>   
    </p> -->
    <p>
      数据二(数组类型数据):
      <div v-if="result">
        <p v-for="item in result">
          <span>name: {{item.name}}</span><br>
          <span>price: {{item.price}}</span><br>
          <span>id: {{item.id}}</span>
        </p>
      </div>
      <span v-else>数据未获取到</span>   
    </p>
    <p>
      状态:
      <span v-if="loading">数据加载完成</span>
      <span v-else>数据加载中</span>
    </p>
    <p>
      错误信息:
      <span v-if="errMessage">{{ errMessage }}</span>
      <span v-else>未发生错误</span>
    </p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, onUpdated, watch } from "vue";
//引入自定义hook函数
import useRequire from "./useRequire";
export default defineComponent({
  name: "SecondDemo",
  setup() {
    //利用接口结合泛型对发送请求的数据进行约束
    //address类型的数据
    interface addressData {
      id: number;
      address: string;
      distence: string;
    }
    //production类型的数据
    interface productionData {
      name: string;
      price: string;
      id: number;
    }
    // const { result, loading, errMessage } = useRequire<addressData>("/data/address.json");
    const { result, loading, errMessage } = useRequire<productionData[]>(
      "/data/production.json"
    );
    // 在setup时，result.value可能为空，所以要用watch进行监视
    watch(result, () => {
      if (result.value) {
        console.log(result.value.length);
      }
    });
    //当update的时候，才请求完成数据
    // onUpdated(() => {
    //   console.log(result.value,loading.value,errMessage.value)
    // })
    return {
      result,
      loading,
      errMessage,
    };
  },
});
</script>

<style scoped>
</style>