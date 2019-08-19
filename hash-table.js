class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length //Reduce hash number so it would fit hash table size
        }
        return hash
    }

    get(key) {
        const idx = this._hash(key)
        const holder = this.data[idx]
        if (holder) {
            for (let item of holder) {
                if (item[0] === key) return item[1]
            }
        }
        return undefined
    }

    set(key, value) {
        const idx = this._hash(key)
        if (!this.data[idx]) this.data[idx] = []
        this.data[idx].push([key, value])
        return this.data
    }

    keys() {
        const keysArr = []
        for (let item of this.data) {
            if (item) keysArr.push(item[0])
        }
        return keysArr
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
console.log(myHashTable.keys())