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

const myArray = new Arr()
myArray.push('hi');
myArray.push('you');
myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push('are');
myArray.push('nice');
myArray.shiftItems(0);
console.log(myArray);


