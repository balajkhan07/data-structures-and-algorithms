class Stack {

    constructor() {
        this.array = [];
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        return this.array.pop();
    }

    isEmpty() {
        //convert to boolean
        //after that toggle the value
        //incase we have top it will return true
        //but we will return false because list is not empty
        return !!!this.array.length;
    }

}
