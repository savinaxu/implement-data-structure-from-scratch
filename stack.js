//Implementation with array
class StackArr {
    constructor() {
        this.arr = []
    }

    peek() {
        return this.arr[this.arr.length-1]
    }

    push(value) {
        this.arr.push(value)
        return this
    }

    pop() {
        this.arr.pop()
        return this
    }
}

//Implementation with linked list
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class StackLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    peek() {
        return this.head
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
        } else {
            const temp = this.head
            this.head = newNode
            this.head.next = temp
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return null
        const ans = this.head
        this.head = this.head.next
        return ans.value
    }
}

const myStackArr = new StackArr();
const myStackLL = new StackLinkedList();
myStackArr.peek();
myStackArr.push('Joooooooker');
myStackArr.push('Fleetsmith');
myStackArr.push('Aim Higher');
myStackArr.peek();
myStackArr.pop();

myStackLL.peek();
myStackLL.push('Joooooooker');
myStackLL.push('Fleetsmith');
myStackLL.push('Aim Higher');
myStackLL.peek();
myStackLL.pop();v
