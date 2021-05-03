class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //if is the first value
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    if (value !== this.root.value) {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value === current.value) {
          console.log(`${value} Doubled`);
          return undefined;
        }
      }
    }
  }
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        console.log(`${value} found!`);
        return true;
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    console.log(`${value} not found!`);
    return false;
  }
}

class BooksLocations {
  constructor() {
    this.location = new BinarySearchTree();
  }
  add(bookCode) {
    this.location.insert(bookCode);
    console.log(`${bookCode} was added.`);
  }
  search(bookCode) {
    this.location.search(bookCode);
  }
}

const library = new BooksLocations();

library.add(120);
library.add(63);
library.add(209);
library.add(51);
library.add(160);
library.search(209);
library.search(120);
library.search(300);
library.search(51);
