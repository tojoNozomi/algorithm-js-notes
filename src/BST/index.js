const generator = (element) => {
    return {
        key: element,
        left: null,
        right: null
    }
}
const insertAssit = (node, newNode) => {
    if (node.key < key) {
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
    if (node.key < key) {
        return searchAssit(node.left, key)
    } else if (node.key > key) {
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
    if (node.key < key) {
        node.left = removeAssit(node.left, key)
        return node
    } else if (node.key > key) {
        node.right = removeAssit(node.right, key)
        return node
    } else {
        if (node.left && node.right) {
            // 
            node.
            return node
        } else if (node.left || node.right) {

        } else {
            return
        }
    }

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
            insertAssit(root, generator(key))
            return true
        }
    }
    search(key) {
        return searchAssit(this.root, key)
    }
    move(key) {
        return removeAssit(this.root, key)
    }
    // 中序遍历
    inOrderTraverse(callback) {
        inOrderTraverseAssit(callback)
    }
    // 先序遍历
    preOrderTraverse(callback) {
        preOrderTraverseAssit(callback)
    }
    // 后序遍历
    postOrderTraverse(callback) {
        postOrderTraverseAssit(callback)
    }
    min() {
        if (root === null) {
            return null
        }
        let tmp = this.root
        while (tmp.left !== null) {
            tmp = tmp.left
        }
        return tmp.key
    }
    max() {
        if (root === null) {
            return null
        }
        let tmp = this.root
        while (tmp.right !== null) {
            tmp = tmp.right
        }
        return tmp.key
    }
}