import HashTable from './index'

test('散列表中加入一个项，尝试获取，并删除，确认是否删除成功', () => {
    let hashTable = new HashTable()
    hashTable.put('aaa', 114)
    hashTable.put('bbb', 514)
    hashTable.put('ccc', 1919)
    expect(hashTable.get('aaa')).toBe(114)
    hashTable.remove('aaa')
    expect(hashTable.get('aaa')).toBe(undefined)
})
