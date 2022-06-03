function shallowRef(target) {
  return {
    _value: target,//保存数据
    get value() {
      console.log('get数据劫持成功');
      return this._value
    },
    set value(newValue) {
      console.log('set修改劫持成功')
      this._value = newValue
    }
  }
}
//reactive(深劫持)
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
  deleteProperty(target, prop) {
    console.log('删除属性数据delate拦截')
    return Reflect.defineProperty(target, prop)
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

function ref(target) {
  //如果传入的target是对象或数组，则需要进行reactive的深度监视
  if (target && typeof target === 'object') {
    target = reactive(target)
  }
  return {
    _value: target,//保存数据
    get value() {
      console.log('get数据劫持成功');
      return this._value
    },
    set value(newValue) {
      console.log('set修改劫持成功')
      this._value = newValue
    }
  }
}
