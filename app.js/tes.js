function di(algo) {
    console.log(algo);
}

function exec(func, arg) {
    func(arg);
}

exec((algo) => {
    console.log(algo);
}, "hola javascript");

window.setTimeout((algo) => {
    console.log(algo);
}, 3000, "hola javascript");

var timeoutID;
function delayedAlert() {
    timeoutID = window.setTimeout(slowAlert, 3000);
}

function slowAlert() {
    alert("aqui esta el mensaje");
}

function clearAlert() {
    window.clearTimeout(timeoutID);
}