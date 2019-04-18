class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    get(key) {
        const idx = this._hash(key)
        if (!this.data[idx]) return undefined
        const holder = this.data[idx]
        if (holder.length > 0) {
            for (let item of holder) {
                if (item[0] === key) return item[1]
            }
            return undefined
        }
    }

    set(key, value) {
        const idx = this._hash(key)
        if (!this.data[idx]) {
            this.data[idx] = []
        }
        this.data[idx].push([key, value])
        return this.data
    }
}