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
    deleteAt(index){
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (current === null|| current.next === null) {
                console.log("Index out of bounds!");
                return;
            }
            current = current.next;
        }
        current.next = current.next.next;
    }
}

let ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.deleteAt(2);
ll.print();