class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }
   
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

	///  WRITE SET METHOD HERE  ///
	//                           //
	//                           //
	//                           //
	//                           //
	///////////////////////////////

}



function test() {

    let myHashTable = new HashTable();

    myHashTable.set("nails", 100);
    myHashTable.set("tile", 50);
    myHashTable.set("lumber", 80);
    myHashTable.set("bolts", 200);
    myHashTable.set("screws", 140);

    myHashTable.printTable();    
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    0 :  undefined
    1 :  undefined
    2 :  undefined
    3 :  [ [ 'screws', 140 ] ]
    4 :  [ [ 'bolts', 200 ] ]
    5 :  undefined
    6 :  [ [ 'nails', 100 ], [ 'tile', 50 ], [ 'lumber', 80 ] ]

*/