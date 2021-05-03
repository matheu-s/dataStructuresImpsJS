class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //print some element
  get(index) {
    console.log(this.data[index]);
  }
  //add to the end
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  //remove the end
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  // add to the beggining
  unshift(item) {
    return this.shiftItemsRight(0, item);
  }
  //remove from the beggining
  shift() {
    return this.shiftItemsLeft(0);
  }
  //move all elements to the left
  // a[0], b[1], c[2]
  //shiftitems(1) means data[1] = data[1+1]
  //b = c..... and in the end, remove thail
  shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  //remove anywhere
  remove(index) {
    return this.shiftItemsLeft(index);
  }
  shiftItemsRight(index, item) {
    // maybe the solution is move to the right and the index that we are adding will be doubled, to we substitute the new value in its place
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
  }
  //add anywhere
  add(index, item) {
    return this.shiftItemsRight(index, item);
  }
  search(item) {
    for (let i = 0; i < this.length - 1; i++) {
      if (this.data[i] === item) {
        console.log(`${item} was found! It is in position ${i}`);
        break;
      } else {
        console.log("not found yet");
      }
    }
  }
}

class SoccerTeams {
  constructor() {
    this.teamsList = new Array();
  }
  addLastTeam(team) {
    this.teamsList.push(team);
    console.log(`${team} was added to the end`);
  }
  deleteLastTeam() {
    this.teamsList.pop();
    console.log(`Last team was removed`);
  }
  addFirstTeam(team) {
    this.teamsList.unshift(team);
    console.log(`${team} is the first now!`);
  }
  deleteFirstTeam() {
    this.shift();
    console.log(`First team was removed`);
  }
  addAnywhere(position, team) {
    this.teamsList.add(position, team);
    console.log(`${team} was added to the position ${position}`);
  }
  removeAnywhere(position) {
    this.teamsList.remove(position);
    console.log(`Team removed`);
  }
  findTeam(team) {
    this.teamsList.search(team);
  }
}
const teams = new SoccerTeams();
teams.addLastTeam("Internacional FC");
teams.addLastTeam("Corinthians FC");
teams.addFirstTeam("Santos FC");
teams.deleteLastTeam();
teams.addAnywhere(1, "Gremio FC");
teams.addFirstTeam("Sao Paulo FC");
teams.removeAnywhere(2);
console.log(teams);
teams.findTeam("Santos FC");
