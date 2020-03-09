export default class Dictionary {
    constructor() {
        this.table = {}
    }
    set(key, value) {
        if (key) {
            this.table[key] = value
        }
        return false
    }
    remove(key) {
        if (this.has(key)) {
            delete this.table[key]
            return true
        }
        return false
    }
    has(key) {
        if (key) {
            return this.table.hasOwnProperty(key)
        }
        return false
    }
    get(key) {
        if (key) {
            return this.table[key]
        }
        return false
    }
    clear() {
        this.table = {}
        return true
    }
    size() {
        return Object.keys(this.table).length
    }
    keys() {
        return Object.keys(this.table)
    }
    values() {
        return Object.values(this.table)
    }
}