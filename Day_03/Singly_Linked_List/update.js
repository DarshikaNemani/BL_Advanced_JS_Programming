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
    print() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + '->';
            current = current.next;
        }
        console.log(result + 'null');
    }
    update(index, value) {
        let current = this.head;
        for (let i = 0; current !== null; i++) {
            if (i === index) {
                current.data = value;
                return;
            }
            current = current.next;
        }
        console.log("Index out of bounds!");
    }

}

let ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.update(1,5);
ll.append(30);
ll.print();