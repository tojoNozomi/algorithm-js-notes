function Foo(func, wait) {
    let interval = null // 存储定时器的变量
    let flag = false // 表示当前是否可以执行的标志
    return function() {
        if (flag) return // 当flag为true也就是还在定时器时间内，不能执行
         // 不在定时器时效外，可以执行
        flag = true // 设置当前执行标志为false，后续wait时间内不能执行函数了
        setTimeout(() => {
            flag = false // 定时器到期后，能调用函数了 // 取消定时器
        }, wait)
        func.apply(this, arguments) // 执行函数       
    }
}

// let a = Foo(function(n){
//     return console.log(n)
// }, 5000)
// a(1)
// a(2)
// setTimeout(function(){
//     a(3)
// }, 6000)
// setTimeout(function(){
//     a(4)
// }, 7000)
// setTimeout(function(){
//     a(5)
// }, 12000)

function Bar(func, wait) {
    let timeout = null
    let isFirst = true
    return function() {
        if (isFirst) {
            func.apply(this, arguments)
            isFirst = false
        }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            clearTimeout(timeout)
            // func.apply(this, arguments)
            isFirst = true
        }, wait)
    }
}

let b = Bar(function(n){
    return console.log(n)
}, 5000)
b(1) // y
b(2) // n
setTimeout(function(){
    b(3) //y
}, 6000)
setTimeout(function(){
    b(4) // n
}, 7000)
setTimeout(function(){
    b(5) // n
}, 10000)
setTimeout(function(){
    b(6) // n
}, 14000)

setTimeout(function(){
    b(7) // y
}, 20000)