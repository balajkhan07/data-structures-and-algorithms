class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    remove(index) {
        let currentIndex = 1;
        let currentNode = this.head;
        while (index != currentIndex) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        currentNode.next = currentNode.next.next;
        this.length--;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index == 0) {
            return this.prepend(value);
        }
        let currentIndex = 0;
        let currentNode = this.head;
        while (index - 1 != currentIndex) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        const newNode = new Node(value);
        const leaderNode = currentNode;
        const followerNode = currentNode.next;
        newNode.prev = leaderNode;
        newNode.next = followerNode;
        leaderNode.next = newNode;
        followerNode.prev = newNode;
        this.length++;
    }

    traverseHead() {
        const list = [];
        let currentNode = this.head;
        while (currentNode) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }

    traverseTail() {
        const list = [];
        let currentNode = this.tail;
        while (currentNode) {
            list.push(currentNode.value);
            currentNode = currentNode.prev;
        }
        return list;
    }

}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(5);
doublyLinkedList.append(51);
doublyLinkedList.insert(1, 19);
console.log(doublyLinkedList.traverseHead());
console.log(doublyLinkedList.traverseTail());