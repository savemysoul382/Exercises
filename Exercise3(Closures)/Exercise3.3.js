// 1st
function makeTimer(doneMessage, n) {
    setTimeout(function () {
        alert(doneMessage);
    }, n);
}

makeTimer("Cookies are done!", 1000);

//1.2
function makeTimer2(doneMessage, n) {
    setTimeout(function () {
        alert(doneMessage);
    }, n);

    doneMessage = "OUCH!";
}

makeTimer2("Cookies are done!", 1000);

//2nd
