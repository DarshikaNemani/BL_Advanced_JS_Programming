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
    insertAt(index, data) {
    let newNode = new Node(data);

    if (this.head === null && index === 0) {
        this.head = newNode;
        this.tail = newNode;
        return;
    }

    if (index === 0) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        if (current === null) {
            console.log("Index out of bounds!");
            return;
        }
        current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;

    if (current.next !== null) {
        current.next.prev = newNode;
    } else {
        this.tail = newNode;
    }

    current.next = newNode;
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
dll.insertAt(2,5);
dll.print(); 