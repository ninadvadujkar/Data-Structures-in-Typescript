import { Node1 } from './Node';

class NodeChain {
    first: Node1;
    middle: Node1;
    last: Node1;
    createNodeChain() {
        /*
            [10, null]
        */
        this.first = new Node1(10);

        /*
            [10, null] [20, null]
        */
        this.middle = new Node1(20);

        /*
            [10, *--]---> [20, null]
        */
        this.first.Next = this.middle;

        /*
            [10, *--]---> [20, null] [30, null]
        */
        this.last = new Node1(30);

        /*
            [10, *--]---> [20, *--]---> [30, null]
        */
        this.middle.Next = this.last;

        this.printList(this.first);
    }
    printList(node: Node1) {
        while(node != null) {
            console.log(node.value);
            node = node.Next;
        }
    }
}

let m = new NodeChain();
m.createNodeChain();

