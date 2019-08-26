///Implementation with linked list
class Node {
    constructor() {
        this.value = value
        this.next = null
    }
}

// Implementaion with array
class QueueArr {
    constructor() {
        this.arr = []
    }

    peek() {
        return this.arr[0]
    }

    enqueue(value) {
        this.arr.push(value)
        return this
    }

    dequeue() {
        this.arr.shift()
        return this
    }
}

// Implementation with two stacks
class Queue2Stacks {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }
    
    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }
}




const myQueueLl = new QueueLinkedList();
myQueueLl.enqueue('Joy');
myQueueLl.enqueue('Matt');
myQueueLl.enqueue('Pavel');
myQueueLl.peek();
myQueueLl.dequeue();
myQueueLl.dequeue();
myQueueLl.dequeue();
myQueueLl.peek();

const myQueueArr = new QueueArr();
myQueueArr.enqueue('Joy');
myQueueArr.enqueue('Matt');
myQueueArr.enqueue('Pavel');
myQueueArr.peek();
myQueueArr.dequeue();
myQueueArr.dequeue();
myQueueArr.dequeue();
myQueueArr.peek();

const myQueue2Stack = new Queue2Stacks()
myQueue2Stack.enqueue('Joy');
myQueue2Stack.enqueue('Matt');
myQueue2Stack.enqueue('Pavel');
myQueue2Stack.peek();
myQueue2Stack.dequeue();
myQueue2Stack.dequeue();
myQueue2Stack.dequeue();
myQueue2Stack.peek();