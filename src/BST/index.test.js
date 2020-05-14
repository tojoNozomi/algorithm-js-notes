import BST from './index'

test('树中插入一些值，确认三种遍历是否无误', () => {
    let bst = new BST()
    let insertArr = [11,7,15,5,3,9,8,10,13,12,14,20,18,25,6]
    insertArr.map(item => bst.insert(item))
    // 检验中序遍历
    let inOrderAnswerArr = [3,5,6,7,8,9,10,11,12,13,14,15,18,20,25]
    let inOrderResultArr = []
    bst.inOrderTraverse(item => inOrderResultArr.push(item))
    expect(inOrderResultArr).toEqual(inOrderAnswerArr)
    // 检验先序遍历
    let preOrderAnswerArr = [11,7,5,3,6,9,8,10,15,13,12,14,20,18,25]
    let preOrderResultArr = []
    bst.preOrderTraverse(item => preOrderResultArr.push(item))
    expect(preOrderResultArr).toEqual(preOrderAnswerArr)
    // 检验后序遍历
    let postOrderAnswerArr = [3,6,5,8,10,9,7,12,14,13,18,25,20,15,11]
    let postOrderResultArr = []
    bst.postOrderTraverse(item => postOrderResultArr.push(item))
    expect(postOrderResultArr).toEqual(postOrderAnswerArr)
})

test('树中插入一些值，检查最大，最小值是否正确', () => {
    let bst = new BST()
    let insertArr = [11,7,15,5,3,9,8,10,13,12,14,20,18,25,6]
    insertArr.map(item => bst.insert(item))
    expect(bst.min()).toBe(3)
    expect(bst.max()).toBe(25)
    
})

test('往已经有数据的二叉树中插入一个值，检查是否存在，并删掉该值，再次检查', () => {
    let bst = new BST()
    let insertArr = [11,7,15,5,3,9,8,10,13,12,14,20,18,25,6]
    insertArr.map(item => bst.insert(item))
    bst.insert(23)
    expect(bst.search(23)).toBe(true)
    bst.remove(23)
    expect(bst.search(23)).toBe(false)
    
})
