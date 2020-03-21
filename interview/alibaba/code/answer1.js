// 用于将两个对象合并
export const combine = (objA, objB) => {
    let table = Object.assign(objA)
    Object.keys(objB).map(item => {
        // 这里检查 第二个对象中的键是否在第一个对象中出现，如果有的话就相加
        if (table[item] !== undefined) {
            table[item] += objB[item]
        } else {
            table[item] = objB[item]
        }
    })
    return table
}
// 这个函数用于将 字符串 转换成 键值对对象
export const count = (str, countList = {}) => {
    // 空值返回
    if (str === '') {
        return countList
    }
    let list = {}
    let reg = /[0-9]/
    let last = null
    let tmp = ''
    let curList = countList
    str.split('').map(item => {
        // 这里使用正则判断拆分后的字符是否是数字
        if (reg.test(item)) {
            tmp += item // 输入的数字可能不止一位，为了避免获取不到，这里只要是数字就拼起来
        } else {
            if (tmp) { // 为了第一位空值不被计算进对象中，设置的判断条件
                let count = Number(tmp) // 当识别到是ABC这样的字符时，将前面暂存的数字给计算进对象中
                list[last] = count
            }
            tmp = '' // 清空上次的暂存结果
            list[item] = 1 // 有的字符后面不带数字，默认是1
            last = item // 将本次的字符暂存起来
        }
    })
    if (tmp)  {  
        list[last] = Number(tmp) // 遍历到最后一位时，后面没有字符了需要手动将上次的结果算进对象中
    }
    if (list['-']) { // 占位符号的识别，用于将上次递归的结果 和本次生成的对象进行合并
        Object.keys(curList).map(item => {
            curList[item] = list['-'] * curList[item] // 上次递归获得的对象的倍率计算
        })
    }
    delete list['-'] // 去除占位符号
    return combine(list, countList)
}
export function countOfLetters (str, countList = {}) {
    // 获取最内层的括号的位置
    let i = str.lastIndexOf('(')
    let j = str.indexOf(')')
    // 判断本次递归含有括号
    if (i !== -1 && j !== -1) {
        // 这里将字符串按照最中间的两边括号进行分割，获取括号外的部分，括号以及括号内的部分使用- （横杠）进行替代，并且将上次递归结果也一起传入
        return  countOfLetters(str.substring(0, i) + '-' + str.substring(j + 1), count(str.substring(i + 1, j), countList))
    } else {
        return count(str, countList) // 本次递归没有符号，直接计算
    }
}


