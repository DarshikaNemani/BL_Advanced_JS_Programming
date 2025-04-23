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
    search(value){
        let current = this.head
        while(current!=null){
            if(current.data === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    
}

let ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);

console.log(ll.search(20));  // true
console.log(ll.search(40));  // false