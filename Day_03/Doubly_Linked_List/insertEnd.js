class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(data) {
        const newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    print() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + '<=>';
            current = current.next;
        }
        console.log('null<=>' + result + 'null');
    }
}


const dll = new LinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.print();