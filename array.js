class Arr {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    indexOf(value) {
        return Object.values(this.data).indexOf(value)
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
        this.shiftItem(index)
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

    len() {
        return this.length
    }

    print() {
        console.log(Object.values(this.data))
    }
}

const newArr = new Arr()

newArr.push(1)
newArr.push(2)
newArr.push(3)
newArr.push(4)
newArr.print() // [1, 2, 3, 4]
console.log(newArr.get(2)); // 3
console.log(newArr.indexOf(3)); // 2
console.log(newArr.len()); // 4
newArr.delete(2);
newArr.print(); // [1, 2, 4]
newArr.push(5);
newArr.push(5);
newArr.print(); // [ 1, 2, 4, 5, 5 ]
newArr.shiftItem(2);
newArr.print(); // [ 1, 2, 5, 5 ]

