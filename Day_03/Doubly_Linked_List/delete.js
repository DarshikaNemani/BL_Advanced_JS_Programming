class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertBeg(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
        }
    }
    print(){
        let current = this.head;
        let result = '';
        while(current !== null){
            result += current.data + "<=>";
            current = current.next;
        }
        console.log(result + 'null');
    }
    deleteAt(index){
        let current = this.head;
    
        if (this.head === null){
            console.log("No elements");
            return;
        }
    
        if (index === 0){
            this.head = current.next; 
            if (this.head !== null) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            return;
        }
    
        for (let i = 0; current !== null; i++){
            if (i == index && current.next !== null){
                current.next.prev = current.prev;
                current.prev.next = current.next;
                return;
            }
            else if(i == index && current.next === null){
                this.tail = current.prev;
                if (current.prev !== null) {
                    current.prev.next = null;
                }
                return;
            }
            current = current.next;
        }
    
        console.log("Index out of bounds!");
    }
}

const dll = new LinkedList();
dll.insertBeg(10);
dll.insertBeg(20);
dll.insertBeg(30)
dll.deleteAt(1);
dll.print(); 