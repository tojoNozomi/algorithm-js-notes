export default class Aset {
    constructor() {
        this.table = {}
    }
    add(item) {
        // 略过一些情况处理
        if (!this.has(item)) {
            this.table[item] = item
        }
    }
    remove(item) {
        if (this.has(item)) {
            delete this.table[item]
            return true
        } else {
            return false
        }
    }
    has(item) {
        if (item) {
            return this.table.hasOwnProperty(item)
        }
    }
    clear() {
        this.table = {}
    }
    size() {
        return Object.keys(this.table).length
    }
    values() {
        return Object.values(this.table)
    }
    union(obj) {
        let resultSet = new Aset()
        this.values().map(item => resultSet.add(item))
        obj.values().map(item => resultSet.add(item))
        return resultSet
    }
    intersection(obj) {
        let resultSet = new Aset()
        obj.values().filter(item => this.has(item)).map(item => resultSet.add(item))
        return resultSet
    }
    difference(obj) {
        let resultSet = new Aset()
        this.values().filter(item => !obj.has(item)).map(item => resultSet.add(item))
        return resultSet
    }
    subset(obj) {
        if (this.size() > obj.size ()) {
            return false
        }
        return this.values().filter(item => !obj.has(item)).length === 0
    }

 }