class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  //add to the end
  append(value) {
    //check if list is empty, than..
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }
  //add to the beggining
  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }
  addSomewhere(index, value) {
    if (index !== 0 && index !== this.length && this.length > 1) {
      let beforeNode = this.traverseToIndex(-1);
      let afterNode = this.traverseToIndex(+1);
      let newNode = new Node(value);

      beforeNode.next = newNode;
      afterNode.prev = newNode;
      newNode.next = afterNode;
      newNode.prev = beforeNode;
    } else {
      console.log("Unavailable, try another command");
    }
  }
  printList() {
    const arr = [];
    let currentValue = this.head;
    while (currentValue !== null) {
      arr.push(currentValue);
      currentValue = currentValue.next;
    }
    console.log(arr);
  }
  removeHead() {
    if (!this.head) {
      console.log("list is empty, unavailable command");
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    oldHead.next = this.head.next;
    oldHead = null;
  }
  removeTail() {
    if (!this.tail) {
      console.log("list is empty, unavailable command");
    }
    if (this.tail === this.head) {
      this.tail = this.head = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  traverseToIndex(index) {
    let current = this.head;
    let i = 0;
    while (i !== index) {
      current = current.next;
      i++;
    }
    return current;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.removeHead();
    }
    if (index === this.length - 1) {
      return this.removeTail();
    }
    //const afterRemoved = this.traverseToIndex(index +1)
    const beforeRemoved = this.traverseToIndex(index - 1); // - 1 because
    const nodeToRemove = beforeRemoved.next; // index = the node we
    beforeRemoved.next = nodeToRemove.next; // want to remove, so -1 = before it
    nodeToRemove.next.prev = beforeRemoved;
    //afterRemoved.prev = beforeRemoved;
    this.length--;
  }
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log("The music is in your playlist");
        return current;
      }
      current = current.next;
    }
    console.log("Not Found");
    return null;
  }
  nextElement(index) {
    if (this.traverseToIndex(index + 1)) {
      let element = this.traverseToIndex(index + 1);
      console.log(element.value);
    } else {
      console.log(`Invalid`);
    }
  }
  prevElement(index) {
    let element = this.traverseToIndex(index - 1);
    console.log(element.value);
  }
}

class Spotify {
  constructor() {
    this.musicplayer = new DoublyLinkedList();
  }
  addMusicToEnd(musicTitle) {
    this.musicplayer.append(musicTitle);
    console.log(`${musicTitle} added to the end of your playlist.`);
  }
  addMusicToBeggining(musicTitle) {
    this.musicplayer.prepend(musicTitle);
    console.log(`${musicTitle} added to the beggining of your playlist`);
  }
  deleteFirstMusic() {
    this.musicplayer.removeHead();
    console.log(`First Music Removed`);
  }
  deleteLastMusic() {
    this.musicplayer.removeTail();
    console.log(`Last music removed`);
  }
  deleteSomeMusic(musicTitle) {
    this.musicplayer.remove(musicTitle);
    console.log(`${musicTitle} was removed`);
  }
  skip(index) {
    this.musicplayer.nextElement(index);
  }
  previousMusic(index) {
    this.musicplayer.prevElement(index);
  }
  search(musicTitle) {
    this.musicplayer.search(musicTitle);
  }
  printPlaylist() {
    this.musicplayer.printList();
  }
}

const spotifyQueue = new Spotify();

spotifyQueue.addMusicToBeggining("Baby");
spotifyQueue.addMusicToBeggining("Hello");
spotifyQueue.addMusicToEnd("Happy");
spotifyQueue.search("Happy");
spotifyQueue.skip(1);
spotifyQueue.printPlaylist();
