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
    removeFromEnd() {
        // If list not empty then only proceed ahead to delete
        if(!this.listEmpty) {
            let current: Node1 = this.Head;
            //If there's only one node present hence no need to traverse. Just assing Head and Tail as null
            if(!current.Next) {
                this.Head = null;
                this.Tail = null;
            } else {
                // We can confirm that we reached the second last node when it's Next pointer points to Tail.
                while(current.Next != this.Tail) {
                    current = current.Next;
                }
                // Assign second last node's Next to null and assign it as Tail
                current.Next = null;
                this.Tail = current;
            }
        }
    }
    removeFromStart() {
        // If list is not empty make head's Next pointer as Head (i.e. the 2nd node becomes the first node now)
        if(!this.listEmpty) {
            this.Head = this.Head.Next;
        }
    }
    printList() {
        let tempNode = this.Head;
        if(this.Head == null) {
            console.log("List is empty!");
        } else {
            while(tempNode != null) {
                console.log(tempNode.value);
                tempNode = tempNode.Next;
            }
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
list.removeFromEnd();
console.log("----------------------------");
list.printList();
list.removeFromStart();
console.log("----------------------------");
list.printList();