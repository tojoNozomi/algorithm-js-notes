import Dict from './index'

test('字典中加入一个项，size为1', () => {
    let dict = new Dict()
    dict.set('a', 114)
    expect(dict.size()).toBe(1)
})

test('字典中加入多个值，确认大小，并依次确认是否在字典中，最后删除其中一个值，确认是否还在字典中', () => {
    let dict = new Dict()
    dict.set('a', 114)
    dict.set('b', 514)
    dict.set('c', 810)
    dict.set('d', 1919)
    expect(dict.size()).toBe(4)    
    expect(dict.has('a')).toBe(true)
    expect(dict.get('a')).toBe(114)
    expect(dict.has('b')).toBe(true)
    expect(dict.get('b')).toBe(514)
    expect(dict.has('c')).toBe(true)
    expect(dict.get('c')).toBe(810)
    expect(dict.has('d')).toBe(true)
    expect(dict.get('d')).toBe(1919)    
    expect(dict.remove('d')).toBe(true)
    expect(dict.has('d')).toBe(false)
})

test('字典中加入一些数据，测试键和值的输出是否符合预期', () => {
    let dict = new Dict()
    let a = ['a', 'b', 'c', 'd']
    let b = [1,2,3,4]
    a.map((item, index) => dict.set(item, b[index]))
    expect(dict.values()).toEqual(b)
    expect(dict.keys()).toEqual(a)
})