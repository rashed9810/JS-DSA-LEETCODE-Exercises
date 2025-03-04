class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    printStack() {
        let temp = this.top;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getTop() {
        if (this.top === null) {
            console.log("Top: null");
        } else {
            console.log("Top: " + this.top.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.top = null;
        this.height = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }
 
    pop() {
        if(this.length === 0) return undefined;
        
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;

        this.length--;
        return temp;
    }

}



function test () {
    let myStack = new Stack(2);
    myStack.push(1);

    // (2) Items - Returns 1 Node
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }

    // (1) Item - Returns 2 Node
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }

    // (0) Items - Returns undefined
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    1
    2
    undefined

*/