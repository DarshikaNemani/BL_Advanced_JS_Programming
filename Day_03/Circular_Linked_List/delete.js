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
    inserAt(){
        const newNode = new Node(value);
        if (index > 0 && this.head === null){
            this.head = newNode;
            this.head.next = this.head;
            console.log("No elements, inserted at 0th index.")
            return;

        }
        if (index === 0 && this.head === null){
            this.head = newNode;
            this.head.next = this.head;
            return;
        }
        let current = this.head, temp = null;
        for (let i = 0; current.next !== this.head; i++){
            temp = current;
            current = current.next;
        }
        temp.next = newNode;
        newNode.next = current;
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
c.inserAt(2,5)
c.print();