class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class cll {
    constructor() {
        this.head = null;
    }
    insertBeg(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = this.head;
            return;
        }

        let current = this.head;
        newNode.next = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }
        current.next = newNode;
        this.head = newNode;
    }
    print() {
        let current = this.head;
        let result = '';

        do {
            result += current.data + '->';
            current = current.next;
        } while (current !== this.head)

        console.log(result + 'Head');
    }
}

const c = new cll();
c.insertBeg(10);
c.insertBeg(20);
c.insertBeg(30);
c.print();