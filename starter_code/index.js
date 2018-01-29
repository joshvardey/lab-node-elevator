const Elevator = require("./elevator");
const Person = require("./person");

var e = new Elevator();

let maxence = new Person("Maxence", 1, 4);
let josh = new Person("Josh", 8, 2);

e.call(maxence);
e.call(josh);

e._passengersEnter();
