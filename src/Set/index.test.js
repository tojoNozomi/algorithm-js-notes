import Aset from './index'

test('集合中加入一个数，大小为1', () => {
    let set = new Aset()
    set.add(5)
    expect(set.size()).toBe(1)
})

test('集合中加入多个值，确认大小，并依次确认是否在集合中，最后删除其中一个值，确认是否还在集合中', () => {
    let set = new Aset()
    set.add(114)
    set.add(514)
    set.add(810)
    set.add(1919)
    expect(set.size()).toBe(4)    
    expect(set.has(114)).toBe(true)
    expect(set.has(514)).toBe(true)
    expect(set.has(810)).toBe(true)
    expect(set.has(1919)).toBe(true)
    
    expect(set.remove(1919)).toBe(true)
    expect(set.has(1919)).toBe(false)
})

test('新建两个集合，分别加入一些数据，测试并集、交集、差集是否符合预期', () => {
    let setA = new Aset()
    let setB = new Aset()
    let a = [1,2,3,4]
    let b = [0,3,5,7]
    a.map(item => setA.add(item))
    b.map(item => setB.add(item))
    expect(setA.union(setB).values()).toEqual([0,1,2,3,4,5,7])
    expect(setA.intersection(setB).values()).toEqual([3])
    expect(setA.difference(setB).values()).toEqual([1,2,4])

})

test('新建两个集合，分别加入一些数据，测试子集计算是否符合预期', () => {
    let setA = new Aset()
    let setB = new Aset()
    let a = [1,2]
    let b = [1,2,3,4]
    a.map(item => setA.add(item))
    b.map(item => setB.add(item))
    expect(setA.subset(setB)).toBe(true)
    setA.add(5)
    expect(setA.subset(setB)).toBe(false)
})