class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class SinglyLinkedList {

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
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
        let currentIndex = 1;
        let currentNode = this.head;
        while (index != currentIndex) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        const newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index == 0) {
            this.head = this.head.next;
            this.length--;
            return
        }
        let currentIndex = 1;
        let currentNode = this.head;
        while (index != currentIndex) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        currentNode.next = currentNode.next.next;
        this.length--;
    }

    traverseList() {
        const list = [];
        let currentNode = this.head;
        while (currentNode) {
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return list;
    }

    reverseList() {
        let prev = null;
        let currentNode = this.head;
        let nextNode;
        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = nextNode;
        }
        this.head = prev;
    }

}

const linkedList = new SinglyLinkedList(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.reverseList();
console.log(linkedList.traverseList());
