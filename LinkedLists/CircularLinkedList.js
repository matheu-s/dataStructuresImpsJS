//the only diff is that tail points to head,
//and in doubly LL case, the head also points to tail

//cicular in singly linked list

class Node {
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
  }
}

class circularLinkedList {
  constructor() {
    this.head = this.tail = null;
  }
  //add to the end
  append(value) {
    if (!this.tail) {
      this.tail = this.head = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.next = this.head;
    }
  }
  //add to the beggining
  prepand(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }
  }
  printList() {
    if (!this.head || !this.tail) {
      console.log("empty list");
    } else {
      const arr = [];
      let current = this.head;
      while (current !== this.head) {
        arr.push(current);
        current = current.next;
      }
      arr.push(current);
      console.log(arr);
      //console.log(this.tail); just check the tail
    }
  }
  removeHead() {
    let oldHead = this.head;
    this.head = oldHead.next;
  }
  fromBeggining() {
    console.log(this.tail.next);
  }
}

// const circLL = new circularLinkedList();

// circLL.append("b");
// circLL.append("c");
// circLL.prepand("a");
// circLL.append("d");
// circLL.prepand("z");
// circLL.append("i");
// circLL.printList();
// console.log("----------------------TEST REMOVE");
// circLL.removeHead();
// circLL.printList();
// circLL.fromBeggining();

class Spotify {
  constructor() {
    this.playlist = new circularLinkedList();
  }
  addMusicEnd(value) {
    this.playlist.append(value);
    console.log(`${value} added to the end`);
  }
  addMusicBeggining(value) {
    this.playlist.prepand(value);
    console.log(`${value} added to the beggining`);
  }
  removeFirst() {
    this.playlist.removeHead();
    console.log(`First of the playlist was removed`);
  }
  restartPlaylist() {
    this.playlist.fromBeggining();
  }
  seePlaylist() {
    this.playlist.printList();
  }
}

const playlist = new Spotify();

playlist.addMusicBeggining("Shakira - Hello");
playlist.addMusicBeggining("Ivete Sangalo - Alegria");
playlist.addMusicEnd("Caetano - Sozinho");
playlist.seePlaylist();
console.log(`removing  head  -------------`);
playlist.removeFirst();
playlist.seePlaylist();
console.log(`check if after last music, playlist will restart`);
playlist.restartPlaylist();
console.log(`Yes, working =D`);
