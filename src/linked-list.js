class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {

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
        if(index >= this.length) {
            return this.append(value);
        }
        let count = 1;
        let current = this.head;
        while (index != count) {
            current = current.next;
            count++;
        }
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }

    remove(index) {
        let count = 1;
        let current = this.head;
        while(index != count) {
            current = current.next;
            count++;
        }
        current.next = current.next.next;
        this.length--;
    }

    traverseList() {
        const list = [];
        let current = this.head;
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        return list;
    }

}
