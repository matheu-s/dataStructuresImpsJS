// add a method remove() to the linked list that deletes a node to the specified index.
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //add to the end
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  //add to the beggining
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  //to be able to remove the tail
  findNodeBefore(value) {
    if (!value) {
      console.log("Invalid value");
    }
    if (value === this.head) {
      return null;
    }
    let currentValue = this.head;
    while (current) {
      if (current.next === value) {
        break;
      }
      currentValue = currentValue.next;
    }
    return currentValue;
  }
  removeTail() {
    if (!this.tail) {
      console.log("No tail detected");
    }
    let nodeToRemove = this.tail;
    this.tail = this.findNodeBefore(this.tail);
    this.tail = null;
    if (nodeToRemove === this.head) {
      this.head = null;
    }
    return nodeToRemove;
  }
  removeHead() {
    if (!this.head) {
      console.log("empty queue");
    }
    let nodeToRemove = this.head;
    this.head = nodeToRemove.next;
    nodeToRemove.next = null;

    if (nodeToRemove === this.tail) {
      this.tail = null;
    }
    return nodeToRemove;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
}

class bankQueue {
  constructor() {
    this.bankQueue = new LinkedList();
  }
  addClient(element) {
    this.bankQueue.append(element);
    console.log(`${element} Added to the end`);
  }
  addClientPriority(element) {
    this.bankQueue.prepend(element);
    console.log(`${element} Added to the beggining`);
  }
  lookQueue() {
    this.bankQueue.printList();
  }
  serveClient() {
    this.bankQueue.removeHead();
    console.log("Client served");
  }
}

const bankQ = new bankQueue();
