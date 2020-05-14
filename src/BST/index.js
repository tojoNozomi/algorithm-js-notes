const generator = (element) => {
    return {
        key: element,
        left: null,
        right: null
    }
}
const insertAssit = (node, newNode) => {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertAssit(node.left, newNode)
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertAssit(node.right, newNode)
        }
    }
}
const searchAssit = (node, key) => {
    if (node === null) {
        return false
    }
    if (node.key > key) {
        return searchAssit(node.left, key)
    } else if (node.key < key) {
        return searchAssit(node.right, key)
    } else {
        return true
    }
}
const removeAssit = (node, key) => {
    /* 需要考虑这几种情况：
    *  只有一个子节点 -> 直接用子节点替代当前节点
    *  有两个子节点 -> 用右边子节点替代当前节点
    *  没有子节点 -> 在父节点中将该节点设置为null
    */
    // 省略key的校验
    if (node === null) {
        return false
    }
    if (node.key > key) {
        node.left = removeAssit(node.left, key)
        return node
    } else if (node.key < key) {
        node.right = removeAssit(node.right, key)
        return node
    } else {
        if (node.left && node.right) { // 当目标节点有左右节点的情况时
            // 
            // node.left
            let rightMin = findMin(node.right)
            node.key = rightMin.key
            node.right = removeAssit(node.right, node.key)
            return node
        } else if (node.left === null && node.right === null) { // 当没有左右子节点时
            node = null
            return node
        } else { // 当目标节点只有一个子节点的情况
            node = node.left || node.right
            return node
        }
    }

}
const findMin = node => {
    if (node === null) {
        return null
    }
    let tmp = node
    while (tmp.left !== null) {
        tmp = tmp.left
    }
    return tmp
}
const findMax = node => {
    if (node === null) {
        return null
    }
    let tmp = node
    while (tmp.right !== null) {
        tmp = tmp.right
    }
    return tmp
}
const inOrderTraverseAssit = (node, callback) => {
    if (node !== null) {
        inOrderTraverseAssit(node.left, callback)
        callback(node.key)
        inOrderTraverseAssit(node.right, callback)
    }
}
const preOrderTraverseAssit = (node, callback) => {
    if (node !== null) {
        callback(node.key)
        preOrderTraverseAssit(node.left, callback)
        preOrderTraverseAssit(node.right, callback)
    }
}
const postOrderTraverseAssit = (node, callback) => {
    if (node !== null) {
        postOrderTraverseAssit(node.left, callback)
        postOrderTraverseAssit(node.right, callback)
        callback(node.key)
    }
}
export default class BST {
    constructor() {
        this.root = null
    }
    insert(key) {
        if (this.root === null) {
            this.root = generator(key)
            return true
        } else {
            insertAssit(this.root, generator(key))
            return true
        }
    }
    search(key) {
        return searchAssit(this.root, key)
    }
    remove(key) {
        return removeAssit(this.root, key)
    }
    // 中序遍历
    inOrderTraverse(callback) {
        inOrderTraverseAssit(this.root, callback)
    }
    // 先序遍历
    preOrderTraverse(callback) {
        preOrderTraverseAssit(this.root, callback)
    }
    // 后序遍历
    postOrderTraverse(callback) {
        postOrderTraverseAssit(this.root, callback)
    }
    min() {
        return findMin(this.root).key
    }
    max() {
        return findMax(this.root).key
    }
}