export default class Stack {
    constructor() {
        this.list = []
    }
    push(item, ...rest) {
        // 多参数处理
        if (item) {
            this.list.push(item)
            if (rest) {
                rest.map(item => this.list.push(item))
            }
        } else {
            // 提示无输入
            console.log('empty input')
            return false
        }
    }
    pop() {
        if (this.list.length !== 0) {
            return this.list.pop()
        } else {
            // 提示栈中无数据
            console.log('empty stack')
            return false
        }
    }
    peak() {
        if (this.list.length !== 0) {
            return this.list[this.list.length]
        } else {
            // ...
        }
    }
    isEmpty() {
        return this.list.length === 0
    }
    clear() {
        this.list = []
        return true
    }
    size() {
        return this.list.length
    }
    print() {
        console.log(this.list)
    }
}
