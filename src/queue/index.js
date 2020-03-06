export default class Queue {
    constructor() {
        this.list = []
    }
    enqueue(item, ...rest) {
        // 多参数处理
        if (item) {
            this.list.push(item)
            if (rest) {
                rest.filter(i => i).map(i => this.list.push(i))
            }
        } else {
            // 提示无输入
            console.log('empty input')
            return false
        }
    }
    dequeue() {
        if (this.list.length !== 0) {
            return this.list.shift()
        } else {
            // 提示栈中无数据
            console.log('empty queue')
            return false
        }
    }
    front() {
        if (this.list.length !== 0) {
            return this.list[0]
        } else {
            // ...
            return false
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