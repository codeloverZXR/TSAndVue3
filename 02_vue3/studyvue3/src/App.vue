<template>
  <h3>setup的基本使用</h3>
  <set-up-use-vue></set-up-use-vue>
  <hr>
  <h3>ref和reactive</h3>
  <use-rate-vue></use-rate-vue>
  <hr>
  <h3>setup的细节问题</h3>
  <set-up-detail-vue></set-up-detail-vue>
  <hr>
  <h3>ref和reactive的区别</h3>
  <refand-rate-vue></refand-rate-vue>
  <hr>
  <h3>watch的监视</h3>
  <demo-using-vue></demo-using-vue>
  <hr>
  <h3>vue2和vue2的生命周期函数</h3>
  <tester-vue></tester-vue>
  <hr>
  <h3>自定义hook函数</h3>
  <first-demo-vue></first-demo-vue>
  <second-demo-vue></second-demo-vue>
  <hr>
  <h3>toRefs的使用</h3>
  <to-ref-demo-vue></to-ref-demo-vue>
  <to-refs-using-vue></to-refs-using-vue>
  <hr>
  <h3>ref的其它使用</h3>
  <ref-aother-using-vue></ref-aother-using-vue>
  <hr>
  <h3>shallowReactive 与 shallowRef</h3>
  <s-ratand-s-ref-demo-vue></s-ratand-s-ref-demo-vue>
  <hr>
  <h3>readonly 与 shallowReadonly</h3>
  <using-readonly-vue></using-readonly-vue>
  <hr>
  <h3>toRaw 与 markRaw</h3>
  <to-rawand-mark-raw-vue></to-rawand-mark-raw-vue>
  <hr>
  <h3>toRef 和 Ref 的区别</h3>
  <to-refand-ref-vue></to-refand-ref-vue>
  <hr>
  <h3>toRef的使用</h3>
  <using-to-refand-ref-vue></using-to-refand-ref-vue>
  <hr>
  <h3>customRef的使用</h3>
  <debounce-byit-vue></debounce-byit-vue>
  <hr>
  <h3>Provide 和 inject 的使用</h3>
  <grand-vue></grand-vue>
  <hr>
  <h3>一些响应式的判断</h3>
  <demo-test-vue></demo-test-vue>
  <hr>
  <h3>测试</h3>
  <next-tick-vue></next-tick-vue>
  <hr>
  <h3> 新组件</h3>
  <hr>
  <h3> teleport的使用</h3>
  <teleport-vue></teleport-vue>
  <hr>
  <h3>suspense的使用</h3>
  <suspense-vue></suspense-vue>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import SetUpUseVue from "./components/setupUsing/SetUpUse.vue";
import UseRateVue from "./components/setupUsing/UseRate.vue";
import SetUpDetailVue from "./components/setupUsing/SetUpDetail.vue";
import RefandRateVue from "./components/setupUsing/RefandRate.vue";
import DemoUsingVue from "./components/watchUsing/DemoUsing.vue";
import TesterVue from "./components/DeclarationPeriod/Tester.vue";
import FirstDemoVue from "./components/hook/FirstDemo.vue";
import SecondDemoVue from "./components/hook/SecondDemo.vue";
import ToRefDemoVue from "./components/toRefUsing/ToRefDemo.vue";
import ToRefsUsingVue from "./components/toRefUsing/ToRefsUsing.vue";
import RefAotherUsingVue from "./components/toRefUsing/RefAotherUsing.vue"
import SRatandSRefDemoVue from "./components/Shallow/SRatandSRefDemo.vue";
import UsingReadonlyVue from "./components/Shallow/UsingReadonly.vue";
import ToRawandMarkRawVue from "./components/Shallow/ToRawandMarkRaw.vue";
import ToRefandRefVue from "./components/toRefUsing/ToRefandRef.vue";
import UsingToRefandRefVue from "./components/toRefUsing/UsingToRefandRef.vue";
import debounceByitVue from "./components/customRef/debounceByit.vue";
import GrandVue from "./components/provideAndinject/Grand.vue";
import DemoTestVue from "./components/judgeRsponce/DemoTest.vue";
import TeleportVue from "./components/newCpns/Teleport.vue";
import nextTickVue from "./components/Test/nextTick.vue";
import SuspenseVue from "./components/newCpns/Suspense.vue";
export default defineComponent({
  name: "App",
  components: {
    SetUpUseVue,
    UseRateVue,
    SetUpDetailVue,
    RefandRateVue,
    DemoUsingVue,
    TesterVue,
    FirstDemoVue,
    SecondDemoVue,
    ToRefDemoVue,
    ToRefsUsingVue,
    RefAotherUsingVue,
    SRatandSRefDemoVue,
    UsingReadonlyVue,
    ToRawandMarkRawVue,
    ToRefandRefVue,
    UsingToRefandRefVue,
    debounceByitVue,
    GrandVue,
    DemoTestVue,
    TeleportVue,
    nextTickVue,
    SuspenseVue
  },
});
</script>

<style>
h3 {
  color: blue;
}
</style>
