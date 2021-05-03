"use strict";
//array

//stack

/*
class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }


    push(element) {
        this.size++
        this.storage[this.size] = element
    }

    pop() {
        let removed = this.storage[this.size]
        this.size--
        return removed
    }

    peek() {
        return this.storage[this.size]
    }
}

const stack = new Stack

stack.push('blue')
stack.push('red')
stack.push('grey')

console.log(stack)

stack.pop()
console.log(stack.peek())
console.log(stack)


//queue

class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

const queue = new Queue()

queue.enqueue('homeworks.studentsCS.pdf')
queue.enqueue('homeworks.studentsPHYSICS.pdf')
queue.enqueue('tests.studentsMATH.pdf')

console.log(queue)











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Queue {
    constructor() {
        this.storage = []
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

class Printer {
    constructor() {
        this.printQueue = new Queue()
    }

    print() {
        var nextInQueue = this.printQueue.dequeue()
        if (nextInQueue == undefined) {
            console.log('queue is empty')
        }
        else {
            console.log(nextInQueue + ' printed')
        }
    }

    addJob(filename, copies) {
        for (var i = 0; i < copies; i++) {
            this.printQueue.enqueue(filename)
            console.log(filename + ' added')
        }
    }
}


var printer = new Printer()

printer.addJob('/shared/file.pdf', 3)
printer.addJob('/shared/vghvjchjxdh.pdf', 2)
printer.print()
printer.print()
printer.print()
printer.print()
printer.print()
printer.print()

*/

// BINARY SEARCH TREE

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        }
        // if left child, look left again
        else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
        }
        // if right child, look right again
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }
}

class familyTree {
  constructor() {
    this.familyTree = new binarySearchTree();
  }
  familySize() {
    let size = this.familyTree.size();
    console.log(`The family has ${size} members.`);
  }
  addMemberAge(addMemberAge) {
    this.familyTree.insert(addMemberAge);
    console.log(`${addMemberAge} was added.`);
  }
  isMember(age) {
    this.familyTree.contains(age);
    if (age) {
      console.log(`${age} is a Souza's age`);
    } else {
      console.log(`${age} is NOT a Souza's age`);
    }
  }
}

let souzaFamily = new familyTree();

souzaFamily.addMemberAge(10);
souzaFamily.addMemberAge(8);
souzaFamily.addMemberAge(1);
souzaFamily.addMemberAge(16);
souzaFamily.addMemberAge(5);
souzaFamily.familySize();
souzaFamily.isMember(10); // retornando true.. ???
souzaFamily.isMember(8);

class nodeStack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new nodeStack(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top; // saving the last top value to a const
      this.top = newNode; // putting the new value to the top
      this.top.next = holdingPointer; // putting the last top value below
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      // if top does now exist
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    if (this.length === 0) {
      console.log("is empty");
    } else {
      console.log("not empty");
    }
  }
  peek() {
    return this.top;
  }
}

class Books {
  constructor() {
    this.bookPile = new Stack();
  }
  addBook(element) {
    this.bookPile.push(element);
    console.log(`${element} added to the stack.`);
  }
  removeBook() {
    this.bookPile.pop();
  }
  lookBookOnTop() {
    this.bookPile.peek();
  }
  emptyPile() {
    this.bookPile.isEmpty();
  }
}

const books = new Books();

books.addBook("ass creed");
books.addBook("little prince");
books.lookBookOnTop();
books.removeBook();
console.log(books);

//4.b) queue imp

class Queue {
  //creating the class properties
  constructor() {
    this.storage = [];
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

class Printer {
  constructor() {
    this.printerMachine = new Queue();
  } // using class properties
  addFile(filename) {
    this.printerMachine.enqueue(filename);
    console.log(`${filename} added.`);
  } // to add a file
  printFile() {
    this.printerMachine.dequeue();
    console.log(`one file printed`);
  } // remove/print the next file
}

var printing = new Printer();

printing.addFile("file hw 1");
printing.addFile("file hw 2");
printing.printFile();
console.log(printing);

/* test ll
append(value) {
  let oldTail = this.tail;
  this.tail = new Node(value);
  this.tail.next = null;
  oldTail.next = this.tail;
  this.length++;
}
}
*/
// let currentValue = this.head;
// let i = 0;
// let previous = null;
// while(i !== index) {
//   currentValue = currentValue.next
//   previous = currentValue
//   i++;
// }
// previous.next = currentValue.next
// }
// }
