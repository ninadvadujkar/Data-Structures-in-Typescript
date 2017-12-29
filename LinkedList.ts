import { Node1 } from './Node';

class LinkedList {
    public Head: Node1;
    public Tail: Node1;
    public listEmpty = true;

    constructor() {
        this.Head = null;
        this.Tail = null;
    }
    addAtStart(node: Node1) {
        let temp = this.Head;
        this.Head = node;
        this.Head.Next = temp;
        // If list is empty i.e. we are adding for the first time then Head and Tail both point to the same node.
        if(this.listEmpty) {
            this.Tail = node;
        }
        this.listEmpty = false;
    }
    addAtEnd(node: Node1) {
        // If list is empty i.e. we are adding for the first time then Head and Tail both point to the same node.
        if(this.listEmpty) {
            this.Head = node;
        } else {
            this.Tail.Next = node;
        }
        this.Tail = node;
    }
    printList() {
        let tempNode = this.Head;
        while(tempNode != null) {
            console.log(tempNode.value);
            tempNode = tempNode.Next;
        }
    }
}

let node1 = new Node1(10);
let list = new LinkedList();
list.addAtStart(node1);
list.addAtStart(new Node1(20));
list.addAtStart(new Node1(-5));
list.addAtEnd(new Node1(50));
list.printList();