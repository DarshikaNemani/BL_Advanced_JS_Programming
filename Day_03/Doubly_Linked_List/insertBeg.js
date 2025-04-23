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
}

const dll = new LinkedList();
dll.insertBeg(10);
dll.insertBeg(20);
dll.insertBeg(30);
dll.print(); 