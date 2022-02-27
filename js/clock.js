const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    //const seconds = String(date.getSeconds()).padStart(2, "0");

    let ampm;
    if (date.getHours() < 12) {
        ampm = "A.M.";
    }
    else {
        ampm = "P.M.";
    }

    clock.innerText = `${hours} : ${minutes}  ${ampm}`;
}

getClock();
setInterval(getClock, 1000);
