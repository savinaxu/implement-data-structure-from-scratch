class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    traverseToIndex(index) {
        // Check parameters
        let counter = 0
        let current = this.head
        while (counter !== index){
            current = current.next
            counter++
        }
        return current
    }

    insert(index, value) {
        if (index >= this.length) return this.append(value)
        const newNode = new Node(value)
        const pre = this.traverseToIndex(index-1)
        const nex = pre.next
        pre.next = newNode
        newNode.prev = pre
        newNode.next = nex
        nex.prev = newNode
        this.length++
        return this.printList()
    }

    remove(index) {
        if (index >= this.length || index < 0) return null
        
        const current = this.traverseToIndex(index)
        if (index === 0) {
            this.head = current.next
            this.head.prev = null
        }
        if (index === this.length-1) {
            this.tail = current.prev
            this.tail.next = null
        }
        const pre = current.prev
        const nex = current.next
        pre.next = nex
        nex.prev = pre
    }

    reverse() {
        let current = this.head,
            pre = null,
            nex = null
        
        while(current) {
            nex = current.next
            pre = current.pre

            current.next = pre
            current.prev = nex

            pre = current
            current = nex
        }

        // Rest head and tail
        this.tail = this.head
        this.head = pre

        return this
    }

    printList() {
        const arr = [];
        let current = this.head;
        while (current !== null){
            arr.push(current.value)
            current = current.next
        }
        return array;
    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.reverse()