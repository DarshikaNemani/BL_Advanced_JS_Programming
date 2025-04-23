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
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

let ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.print();
ll.reverse();
ll.print();