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

}
 

 
 function test() {
    let myStack = new Stack(4);

    myStack.getTop();
    myStack.getLength();

    console.log("\nStack:");
    myStack.printStack();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Top: 4
    Length: 1

    Stack:
    4

*/
 