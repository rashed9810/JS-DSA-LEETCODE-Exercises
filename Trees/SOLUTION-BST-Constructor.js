class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        this.root = null;
    }

}

 

function test() {
    let myBST = new BST();   
    
    if (myBST.root === null) {
        console.log("Root: null");
    } else {
        console.log("Root:", myBST.root.value);
    }
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Root: null

*/