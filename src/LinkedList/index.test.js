import LinkedList from './index'

test('链表中加入一个数，链表长度为1', () => {
    let linkedList = new LinkedList()
    linkedList.append(114)
    expect(linkedList.size()).toBe(1)
})

test('链表中加入几个数，链表长度为3, 找出第二个节点，确认值是否匹配', () => {
    let linkedList = new LinkedList()
    linkedList.append(114)
    linkedList.append(514)
    linkedList.append(1919)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.find(1)).toBe(514)
})

test('链表中加入几个数，链表长度为5,检查所有节点的顺序是否匹配， 并查找首尾以及中间节点对应的位置', () => {
    let linkedList = new LinkedList()
    linkedList.append(114)
    linkedList.append(514)
    linkedList.append(1919)
    linkedList.append(810)
    linkedList.append(364)
    expect(linkedList.size()).toBe(5)
    expect(linkedList.find(0)).toBe(114)
    expect(linkedList.find(1)).toBe(514)
    expect(linkedList.find(2)).toBe(1919)
    expect(linkedList.find(3)).toBe(810)
    expect(linkedList.find(4)).toBe(364)
    expect(linkedList.indexOf(114)).toBe(0)
    expect(linkedList.indexOf(1919)).toBe(2)
    expect(linkedList.indexOf(364)).toBe(4)
    expect(linkedList.remove(364)).toBe(true)
    expect(linkedList.getLast()).toBe(810)
    // expect(linkedList.indexOf(364)).toBe(4)

})

test('链表中加入几个数，链表长度为5,， 并删除首尾以及中间节点，查找剩余节点的位置是否正确', () => {
    let linkedList = new LinkedList()
    linkedList.append(114)
    linkedList.append(514)
    linkedList.append(1919)
    linkedList.append(810)
    linkedList.append(364)
    // console.log(linkedList.print())
    expect(linkedList.remove(114)).toBe(true)
    expect(linkedList.remove(1919)).toBe(true)
    expect(linkedList.remove(364)).toBe(true)
    // console.log(linkedList.print())
    expect(linkedList.indexOf(514)).toBe(0)
    expect(linkedList.indexOf(810)).toBe(1)
    // expect(linkedList.indexOf(364)).toBe(4)
    // expect(linkedList.indexOf(364)).toBe(4)

})


test('链表中加入几个数，链表长度为3, 再插入一个节点，确认顺序是否匹配', () => {
    let linkedList = new LinkedList()
    linkedList.append(114)
    linkedList.append(514)
    expect(linkedList.insert(810, 1)).toBe(true)
    expect(linkedList.insert(364, 0)).toBe(true)
    expect(linkedList.insert(1919, 4)).toBe(true)
    expect(linkedList.find(0)).toBe(364)
    expect(linkedList.find(2)).toBe(810)
    expect(linkedList.find(4)).toBe(1919)
    console.log(linkedList.print())

})