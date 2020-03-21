function Foo(func, wait) {
    let interval = null // 存储定时器的变量
    let flag = false // 表示当前是否可以执行的标志
    return function(...rest) {
        if (flag) {
            return // 当flag为true也就是还在定时器时间内，不能执行
        } else { // 不在定时器时效外，可以执行
            flag = true // 设置当前执行标志为false，后续wait时间内不能执行函数了
            interval = setInterval(function() {
                flag = false // 定时器到期后，能调用函数了
                clearInterval(interval) // 取消定时器
            }, wait)
            func(rest) // 执行函数
        }
    }
}

let a = Foo(function(n){
    return console.log(n)
}, 5000)
a(1)
setTimeout(function(){
    a(3)
}, 6000)
a(2)