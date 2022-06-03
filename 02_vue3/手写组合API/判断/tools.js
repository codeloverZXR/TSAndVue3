//shallowReactive(浅劫持) 与 reactive(深劫持)
const useHandler = {
  //获取数据拦截
  get(target, prop) {
    if (prop === '_isReactive') return true
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
const readonlyHandler = {
  get(target, prop) {//获取数据
    if (prop === '_isReadonly') return true
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
function ref(target) {
  //如果传入的target是对象或数组，则需要进行reactive的深度监视
  if (target && typeof target === 'object') {
    target = reactive(target)
  }
  return {
    _value: target,//保存数据
    _isRef: true,
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

//判断是否是ref对象
function isRef(obj) {
  if (obj && obj._isRef) {
    return true
  } else {
    return false
  }
}
//判断是否是reactive对象
function isReactive(obj) {
  if (obj && obj._isReactive) {
    return true
  } else {
    return false
  }
}
//判断是否是readonly对象
function isReadonly(obj) {
  if (obj && obj._isReadonly) {
    return true
  } else {
    return false
  }
}
//判断是否是Proxy对象
function isProxy(obj) {
  if (isReactive(obj) || isReadonly(obj)) {
    return true
  } else {
    return false
  }
}