import LinearProbingHashTable from './LinearProbingHashTable'

test('散列表中加入几个项，尝试获取，并删除其中一个项，确认是否删除成功', () => {
    let hashTable = new LinearProbingHashTable()
    hashTable.put('aaa', 114)
    hashTable.put('bbb', 514)
    hashTable.put('ccc', 1919)
    // hashTable.print()
    expect(hashTable.get('aaa')).toBe(114)
    expect(hashTable.remove('aaa')).toBe(true)
    // hashTable.print()
    expect(hashTable.get('aaa')).toBe(false)
})

test('散列表中加入几个个项，尝试获取，并删除，确认是否删除成功', () => {
    let hashTable = new LinearProbingHashTable()
    hashTable.put('abc', 114)
    hashTable.put('bac', 514)
    hashTable.put('cba', 1919)
    // hashTable.print()
    expect(hashTable.get('bac')).toBe(514)
    hashTable.remove('bac')
    expect(hashTable.get('bac')).toBe(false)
    // hashTable.print()
})
