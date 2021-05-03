class Queue {
  //creating the queue properties
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

class Customers {
  constructor() {
    this.custQueue = new Queue(); // using the properties
  }

  serve() {
    // serve() = dequeue.. --
    var nextInQueue = this.custQueue.dequeue();
    if (nextInQueue == undefined) {
      console.log("queue is empty");
    } else {
      console.log(nextInQueue + " served");
    }
  }

  addCust(customerName) {
    //addCustom()= enqueue.. ++
    this.custQueue.enqueue(customerName);
    console.log(customerName + " is now waiting...");
  }
}
