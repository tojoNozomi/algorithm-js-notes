import Stack from './stack'
// const Stack = require('./stack')

test('栈中加入一个数，长度为1', () => {
    let stack = new Stack()
    stack.push(5)
    expect(stack.size()).toBe(1)
})

test('栈中加入一个空值，返回false并提示错误', () => {
    let stack = new Stack()
    expect(stack.push()).toBe(false)
    expect(stack.size()).toBe(0)
})

test('栈中加入多个值，依次返回正确顺序', () => {
    let stack = new Stack()
    stack.push(5, 6, 7)
    expect(stack.size()).toBe(3)
    expect(stack.pop()).toBe(7)
    expect(stack.pop()).toBe(6)
    expect(stack.pop()).toBe(5)
    expect(stack.size()).toBe(0)
})

test('栈中加入一个数，长度为1', () => {
    let stack = new Stack()
    stack.push(5)
    expect(stack.size()).toBe(1)
})

// aStack.push('114514', )
// aStack.pop
// list[list.length - 1] = 4 // 在数组的末尾添加元素
// // 等同于
// list.push(4)
// list.unshift()

