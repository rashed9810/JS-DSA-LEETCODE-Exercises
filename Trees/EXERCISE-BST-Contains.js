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

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } 
                temp = temp.right;
            }
        }
    }

	/// WRITE CONTAINS METHOD HERE ///
	//                              //
	//                              //
	//                              //
	//                              //
	//////////////////////////////////
      
}



function test() {
    let myBST = new BST();

    myBST.insert(47);
    myBST.insert(21);
    myBST.insert(76);
    myBST.insert(18);
    myBST.insert(27);
    myBST.insert(52);
    myBST.insert(82);


    console.log("BST Contains 27:");
    console.log(myBST.contains(27));

    console.log("\nBST Contains 17:");
    console.log(myBST.contains(17));
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    BST Contains 27:
    true
    
    BST Contains 17:
    false

*/