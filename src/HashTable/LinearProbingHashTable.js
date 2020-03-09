const generator = (key, value) => {
    return {
        key,
        value
    }
}
export default class LinearProbingHashTable {
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
            console.log(hash)
            if (this.table[hash] === undefined) {
                this.table[hash] = generator(key, value)
                return true
            }
            let position = hash + 1
            while (this.table[position] !== undefined) {
                position += 1
            }
            this.table[position] = generator(key, value)
            return true
        }
        return false
    }
    remove(key) {
        if (key) {
            let hash = this.hashEncode(key)
            if (this.table[hash]) {
                if (this.table[hash].key === key) {
                    this.table[hash] = undefined
                    return true
                }
                let position = hash + 1
                while (this.table[position] && this.table[position].key !== key) {
                    position += 1
                }
                if (this.table[position]) {
                    this.table[position] = undefined
                    return true
                } else {
                    return false
                }
            }
            return false
        }
        return false
    }
    get(key) {
        if (key) {
            let hash = this.hashEncode(key)
            if (this.table[hash]) {
                if (this.table[hash].key === key) {
                    return this.table[hash].value
                }
                let position = hash + 1
                while (this.table[position] && this.table[position].key !== key) {
                    position += 1
                }
                return this.table[position] ? this.table[position].value : false
            }
            return false
        }
        return false
    }
    print() {
        console.log(this.table.filter(item => item).map(item => `(${item.key}:${item.value})`).join('->'))
    }
 }