import { Igood } from "@/type/Igood";
//保存数据到缓存
export function saveGoods (good:Igood[]){
  //由于传进来的Igood[]的type of === object 所以在保存的时候需要进行类型转换
  //保存该数据到缓存
  localStorage.setItem('goods_key',JSON.stringify(good))
}
//从缓存中读取数据
export function readGoods ():Igood[]{
  //从缓存中读取数据，若缓存中没有该数据，则默认返回一个空的数组
  return JSON.parse(localStorage.getItem('goods_key') || '[]')
}