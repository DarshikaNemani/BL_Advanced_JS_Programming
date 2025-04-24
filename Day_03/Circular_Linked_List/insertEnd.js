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
    append(data) {
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
        newNode.next = this.head;
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
c.append(10);
c.append(20);
c.append(30);
c.print();