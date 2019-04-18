class Arr {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
    }

    pop() {
        this.length--
        delete this.data[this.length]
        return this.data[this.length]
    }

    delete(index) {
        const item =  this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItem(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }
        this.pop()
        // this.length--
        // delete this.data[this.length]
    }
}

const newArr = new Arr()