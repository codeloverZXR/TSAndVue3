//shallowReactive(浅劫持) 与 reactive(深劫持)
const useHandler = {
  //获取数据拦截
  get(target, prop) {
    console.log('获取数据get拦截')
    return Reflect.get(target, prop)
  },
  //修改数据或添加属性拦截
  set(target, prop, newValue) {
    console.log('修改数据或添加属性set拦截')
    return Reflect.set(target, prop, newValue)
  },
  //删除属性数据拦截
  deleteProperty (target, prop) {
    console.log('删除属性数据delate拦截')
    return Reflect.defineProperty(target, prop)
  }
}
function shallowReactive(target) {
  if (target && typeof target === 'object') {
    //判断是否是数组或者对象 
    return new Proxy(target, useHandler)
  } else {
    //否则返回原数据
    return target
  }
}
function reactive(target) {
  if (target && typeof target === 'object') {
    //判断是否是数组或者对象 
    //如果目标是数组
    if (target instanceof Array) {
      target.forEach((item, index) => {
        target[index] = reactive(item)
      })
    } else {//对象
      Object.keys(target).forEach(key => {
        target[key] = reactive(target[key])
      })
    }
    return new Proxy(target, useHandler)
  } else {
    //否则返回原数据
    return target
  }
}
