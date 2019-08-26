///Implementation with linked list
class Node {
    constructor() {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)
        this.length === 0 ? this.first = newNode : this.last.next = newNode
        this.last = newNode
        this.length++
        return this
    }

    dequeue() {
        if (!this.first) return null
        if (this.first === this.last) this.last = null
        this.first = this.first.next
        this.length--
        return this
    }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();