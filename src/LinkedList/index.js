const generator = (element) => {
    return {
        value: element,
        next: null
    }
}

// 搜索辅助函数，用于找到和目标值一样的节点，返回节点的前后节点以及自身
const searchAssist = (node, target, prevNode = null ,count = 0) => {
    if (node !== null) {
        if (node.value === target) {
            return {
                prev: prevNode,
                node: node,
                index: count
            }
        } else {
            return searchAssist(node.next, target, node, ++count)
        }
    }
    return null
}

// 位置搜索辅助函数，返回传入节点的后N代节点
const searchIndexAssist = (node, count) => {
    if (count === 0) {
        return node
    }
    if (count > 1) {
        return searchIndexAssist(node.next, --count)
    }
    return node.next
}

// 返回链表的末尾节点
const findLast = node => {
    if (node.next === null) {
        return node
    }
    return findLast(node.next)
}

// 打印辅助函数
const printAssist = (node, reducer = []) => {
    if (node.next === null) {
        return reducer.concat([node.value])
    }
    return printAssist(node.next, reducer.concat([node.value]))
}
export default class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    append(item) {
        if (item) {
            if (this.head === null) {
                this.length = 1
                this.head = generator(item)
                return true
            }
            let last = findLast(this.head)
            last.next = generator(item)
            this.length += 1
            return true
        } else {
            console.log('invaild input')
            return false
        }
    }
    insert(item, index) {
        // 数值类型检测略
        if (index >= 0 && index <= this.length) {
            let curNode = generator(item)
            if (index === 0) {
                curNode.next = this.head
                this.head = curNode
                this.length += 1
            } else {
                let prevNode = searchIndexAssist(this.head, index - 1)
                curNode.next = searchIndexAssist(this.head, index)
                prevNode.next = curNode
                this.length += 1
            }
            return true
        } else {
            console.log('invaild input')
            return false
        }   
    }
    remove(item) {
        if (item) {
            if (this.head === null) {
                console.log('empty list')
                return false
            }
            let curNode = searchAssist(this.head, item)
            if (curNode.prev === null) {
                this.head = curNode.node.next
                return true
            }
            if (curNode.node.next === null) {
                curNode.prev.next = null
                return true
            }
            curNode.prev.next = curNode.node.next
            return true
        } else {
            console.log('invaild input')
            return false
        }
    }
    removeAt(index) {
        // 数值类型检测略
        if (this.head === null) {
            console.log('empty list')
            return false
        }
        if (index === 0) {
            this.head = this.head.next
        } else if (0 < index < this.length) {
            let curNode = searchIndexAssist(this.head, index)
            if (curNode.next) {
                curNode.next = curNode.next.next
            } else {
                curNode.next = null
            }
            return true
        } else {
            console.log('index overflow')
            return false
        }
    }
    find(index) {
        // 数值类型检测略
        if (this.head === null) {
            console.log('empty list')
            return false
        }
        if (index === 0) {
            return this.head.value
        } else if (0 < index < this.length) {
            return searchIndexAssist(this.head, index).value
        } else {
            console.log('index overflow')
            return false
        }
    }
    getLast() {
        if (this.head) {
            return findLast(this.head).value
        }
        return false
    }
    indexOf(item) {
        if (item) {
            if (this.head === null) {
                console.log('empty list')
                return false
            }
            return searchAssist(this.head, item, 0).index
        } else {
            console.log('invaild input')
            return false
        }
    }
    isEmpty() {
        return this.length === 0
    }
    size() {
        return this.length
    }
    print() {
        if (this.head !== null) {
            return printAssist(this.head).join('->')
        } else {
            return null
        }
    }
}