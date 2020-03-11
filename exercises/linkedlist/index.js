// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
      }
}

class LinkedList {

  constructor(){
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let count = 0;
    let nodeNext = this.head;
    
    while(nodeNext){
      count++;
      nodeNext = nodeNext.next;
    }

    return count;
  }

  getFirst(){
    let node = this.head;
    return node;
  }

  getLast(){
    let node = this.head;

    while(node.next)
      node = node.next;

    return node;
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    if(!this.head)
      return;
    
    this.head = this.head.next;
  }

  removeLast(){
    if(!this.head)
      return;
    else if(!this.head.next){
      this.head = null;
      return;
    }
    
    let node = this.head;
    while(node.next.next)
      node = node.next;
    
    node.next = null;
  }
}

module.exports = { Node, LinkedList };
