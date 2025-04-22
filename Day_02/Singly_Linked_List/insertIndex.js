class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    print(){
        let current = this.head;
        let result = '';
        while (current!== null){
            result += current.data + '->';
            current = current.next;
        }
        console.log(result + 'null');
    }
    insertAt(data, index){
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
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
        current.next = newNode
    }
}

let ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.insertAt(5,2);
ll.print();