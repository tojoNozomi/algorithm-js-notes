const generator = (value, priority) => {
    return {
        value,
        priority
    }
}

export default class PriorityQueue {
    constructor() {
        this.list = []
    }
    enqueue(element, priority) {
        // 这里略过输入检查
        // 假定这里 priority值越大，优先级越低
        if (this.list.length === 0) {
            return this.list.push(generator(element, priority))
        } 
        let targetIndex = this.list.findIndex((item, index) => priority < item.priority)
        if (targetIndex === -1) {
            return this.list.push(generator(element, priority))
        }
        this.list.splice(targetIndex, 0, generator(element, priority))
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