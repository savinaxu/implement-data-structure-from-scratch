class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value)
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

    printList() {
        const arr = []
        let newNode = this.head
        while(newNode) {
            arr.push(newNode.value)
            newNode = newNode.next
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
        //Check for proper parameters
        if(index >= this.length) return this.append(value)
        
        const newNode = new Node(value)
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        leader.next = newNode
        newNode.prev = leader
        newNode.next = follower
        follower.prev = newNode
        this.length++
        return this.printList()
    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
console.log(myLinkedList.printList())