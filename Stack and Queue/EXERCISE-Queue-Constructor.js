// WRITE NODE CLASS HERE //
//                       //
//                       //
//                       //
//                       //
///////////////////////////

class Queue {
	// WRITE QUEUE CONSTRUCTOR HERE //
	//                              //
	//                              //
	//                              //
	//                              //
	//////////////////////////////////

    printQueue() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getFirst() {
        if (this.first === null) {
            console.log("First: null");
        } else {
            console.log("First: " + this.first.value);
        }
    }

    getLast() {
        if (this.last === null) {
            console.log("Last: null");
        } else {
            console.log("Last: " + this.last.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

}
 
 

function test() {
    let myQueue = new Queue(4);

    myQueue.getFirst();
    myQueue.getLast();
    myQueue.getLength();

    console.log("\nQueue:");
    myQueue.printQueue();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    First: 4
    Last: 4
    Length: 1
    
    Queue:
    4

*/