export default class HashTable {
    constructor(hashEncode) {
        this.table = []
        this.hashEncode = key => {
            return key.split('').map(item => item.charCodeAt()).reduce((a, b) => a + b) % 37
        }
        if (hashEncode) {
            this.hashEncode = hashEncode
        }
    }
    put(key, value) {
        if (key) {
            let hash = this.hashEncode(key)
            this.table[hash] = value
            return true
        }
        return false
    }
    remove(key) {
        if (key) {
            let hash = this.hashEncode(key)
            this.table[hash] = undefined
        }
        return false
    }
    get(key) {
        if (key) {
            let hash = this.hashEncode(key)
            return this.table[hash]
        }
        return false
    }
 }