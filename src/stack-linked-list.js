class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (this.isEmpty()) {
            return this.top.value;
        }
        return null;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.top = newNode;
            this.bottom = this.top;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.isEmpty()) return null;
        const popNode = this.top;
        this.top = this.top.next;
        this.length--;
        return popNode;
    }

    isEmpty() {
        //convert to boolean
        //after that toggle the value
        //incase we have top it will return true
        //but we will return false because list is not empty
        return !!!this.top;
    }

}
