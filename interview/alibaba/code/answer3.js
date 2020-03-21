
export function flatten(input) {
  let table = {}
  let names = Object.keys(input)
  // 这里对输入的对象/数组进行遍历
  names.map(item => {
    if (input[item]) {
      if (typeof input[item] === 'object') { // 判断是否是 对象/数组
        if (input[item].length !== undefined) {
          Object.keys(input[item]).map(i => {
            table[`${item}[${i}]`] = input[item][i]  // 数组的键名处理
          })
        } else {
          Object.keys(input[item]).map(i => {
            table[`${item}.${i}`] = input[item][i] // 对象的键名处理
          })
        }
      } else {
        table[item] = input[item] // 不是对象/数组的话，直接复制键值对过去。
      }
    }
  })
  // 这里是判断是否完全扁平化
  let withoutObjArr = Object.keys(table).filter(item => {
    return typeof table[item] === 'object' // 判断条件就是当前层次的键对应的值类型是不是 object
  })
  if (withoutObjArr.length === 0) { // 完全扁平化了，返回结果
    return table
  }
  return flatten(table) // 还未扁平化，继续递归
}