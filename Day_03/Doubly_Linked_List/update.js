class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertBeg(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
    }
    print() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + "<=>";
            current = current.next;
        }
        console.log(result + 'null');
    }
    update(index, value) {
        let current = this.head;
        if (this.head === null) {
            console.log('No elements');
        }
        for (let i = 0; current !== null; i++) {
            if (i == index) {
                current.data = value;
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
dll.update(2, 99);
dll.print();
dll.update(10, 88);
dll.print();