class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = []; // a list of pending requests (numbers)
    this.direction = "";
    this.waitingList = []; // people waiting for the elevator
    this.passengers = []; // people currently in the elevator
  }

  start() {
    this.startId = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.startId);
  }

  update() {
    this._passengersEnter();
    this._passengersLeave();
    this.log();
    this.floorUp();
  }

  _passengersEnter() {
    for (let i = 0; i < 10; i++) {
      if (this.waitingList > 0) {
        this.passengers.push(this.waitingList[i]);
        this.requests.push(this.waitingList[i].destinationFloor);
        console.log(this.waitingList[i]);
        this.waitingList.splice(i, 1);
      }
    }
  }
  _passengersLeave() {}

  floorUp() {
    if (this.floor < 10) {
      this.floor = this.floor + 1;
    }
    this.direction = "up";
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor = this.floor - 1;
    }
    this.direction = "down";
  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person.destinationFloor);
  }

  log() {
    console.log(
      "Direction: " +
        this.direction +
        " | Floor: " +
        this.floor +
        " | Passengers: " +
        this.passengers.length
    );
  }
}

module.exports = Elevator;
