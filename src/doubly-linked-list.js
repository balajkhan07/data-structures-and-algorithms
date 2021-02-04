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

    insert(index, value) {
        if (index >= this.length - 1) {
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

    remove(index) {
        if (index >= this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return
        }
        if (index == 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return
        }
        let currentIndex = 1;
        let currentNode = this.head;
        while (index != currentIndex) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        const leaderNode = currentNode;
        const followerNode = currentNode.next;
        leaderNode.next = followerNode.next;
        followerNode.next.prev = leaderNode;
        this.length--;
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