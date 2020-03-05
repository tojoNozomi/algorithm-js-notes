// 这是数据结构学习相关的代码

// 栈的定义
export class Stack {
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
        }
    }
    pop() {
        if (this.list.length !== 0) {
            return this.list.pop()
        } else {
            // 提示栈中无数据
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

/*** 栈的测试代码 */
let aStack = new Stack()
aStack.push('114514', )
aStack.pop
list[list.length - 1] = 4 // 在数组的末尾添加元素
// 等同于
list.push(4)
list.unshift()
/*** 栈的测试代码 */


// 队列
export class Queue {
    constructor() {
        this.list = []
    }
    enqueue(item) {
        // 多参数处理
        console.log(arguments)
        if (item) {
            this.list.push(item)
        } else {
            // 提示无输入
        }
    }
    dequeue() {
        if (this.list.length !== 0) {
            return this.list.shift()
        } else {
            // 提示栈中无数据
        }
    }
    front() {
        if (this.list.length !== 0) {
            return this.list[0]
        } else {
            // ...
        }
    }
    isEmpty() {
        return this.list.length === 0
    }
    clear() {
        this.list = []
    }
    size() {
        return this.list.length
    }
    print() {
        console.log(this.list)
    }
}

// 链表
const generateNode = () => {
    return 
}
export class LinkedList {
    constructor() {
        this.head = null
    }
    append() {}
    insert() {}
    remove() {}
    removeAt() {}
    indexOf() {}
    isEmpty() {}
    size() {}
    print() {}
}


// 集合
export class Set {}
// 字典
export class Dictionary {}
// 散列表
export class HashTable {}
// 二叉搜索树
export class BST {}

// 图的定义
export class Graph {
    constructor() {
        super()
        this.vertices = []
        this.adjList = new Dictionary()
    }
}
// console.log(Dictionary)



// 冒泡排序

// 选择排序

// 插入排序

// 归并排序

// 快速排序

// 二分搜索

// 斐波那契数列