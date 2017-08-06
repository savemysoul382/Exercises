var passengers = [  { name: "Jane Doloop", paid: true, ticket: "coach"},
                    { name: "Dr. Evel", paid: true, ticket: "firstclass"},
                    { name: "Sue Property", paid: false, ticket: "firstclass"},
                    { name: "John Funcall", paid: true, ticket: "coach"}
];

function checkPaid(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            return false;
        }
    }
    return true;
}

function checkNoFly(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        if (onNoFlyList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

function printPassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        return false;
    }
    return true;
}

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evil");
}

function checkNotPaid(passenger) {
    return(!passenger.paid);
}

//2 ex
var allCanFly = processPassengers (passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can`t take off, we have a passenger ");
}

var allPaid = processPassengers (passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can`t take off: not everyone has paid.")
}

//3 ex

function printPassenger(passenger) {
    var message = passenger.name;
    if (passenger.paid === true) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}

processPassengers(passengers, printPassenger);

//Offer drinks according to class
function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like cocktail ot wine?");
        };
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water");
        };
    }
    return orderFunction;
}

function serveCostumer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    //offer a dinner
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    //offer a movie
    getDrinkOrderFunction();
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCostumer(passengers[i]);
    }
}

servePassengers(passengers);