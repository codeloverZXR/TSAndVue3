const readonlyHandler = {
  get(target, prop) {//获取数据
    console.log('成功获取数据,get拦截成功')
    return Reflect.get(target, prop)
  },
  set() {
    console.warn('该对象是只读的,不可修改或添加属性,set拦截失败')
  },
  deleteProperty() {
    console.warn('该对象是只读的,不可删除属性,delete拦截失败')
  }
}
function shallowReadonly(target) {
  if (target && typeof target === 'object') {
    return new Proxy(target, readonlyHandler)
  } else {
    return target
  }
}
function readonly(target) {
  if (target && typeof target === 'object') {
    if (target instanceof Array) {
      target.forEach((item, index) => {
        target[index] = readonly(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = readonly(target[key])
      })
    }
    return new Proxy(target, readonlyHandler)
  } else {
    return target
  }
}

