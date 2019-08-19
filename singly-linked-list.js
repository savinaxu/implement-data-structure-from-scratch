class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        const arr = []
        let current = this.head
        while (current) {
            arr.push(current.value)
            current = current.next
        }
        return arr
    }

    traverseToIndex(index) {
        //check parameters
        let counter = 0
        let current = this.head
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    insert(index, value) {
        if (index >= this.length) return this.append(value)

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1)
        const temp = leader.next
        leader.next = newNode
        newNode.next = temp
        this.length++

        return this.printList()
    }

    remove(index) {
        //check parameters
        const leader = this.traverseToIndex(index-1)
        const removeNode = leader.next
        leader.next = removeNode.next
        this.length--

        return this.printList()
    }

    reverse() {
        if (!this.head.next) return this.head
        let first = this.head
        this.tail = this.head
        let second = first.next

        while(second) {
            const temp = second.next
            second.next = first
            first = second
            second = temp
        }

        this.head.next = null
        this.head = first
        return this.printList()
    }
}

let myLinkedList = new LinkedList(18)
myLinkedList.append(5)
myLinkedList.append(8)
myLinkedList.prepend(23)
console.log(myLinkedList.printList())
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
myLinkedList.reverse()
console.log(myLinkedList.printList())