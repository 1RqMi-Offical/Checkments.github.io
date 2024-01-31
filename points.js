

let points = 0;

let ptsEle = document.querySelector(".navlinks .pts .pts-num")

let checkPoints = function () {

    let tpoints = localStorage.getItem("points")
    points = +tpoints;
    ptsEle.textContent = points;
    updateRoles();

}
let updatedStoragePoints = function () {

    localStorage.setItem("points", points)
    ptsEle.textContent = +points;
}
checkPoints();
updatedStoragePoints();



let updatePoints = function (addition) {

    let tpoints = localStorage.getItem("points")
    points = +points + +addition;
    localStorage.setItem("points", points);
    ptsEle.textContent = points;
    console.log(points)
    updateRoles();
}


let addEle = document.querySelector("li.addition");
let removeEle = document.querySelector("li.remove");
let clicking;
addEle.addEventListener("mousedown", e => {
    clicking = setInterval(function () {

        addEle.click()


    }, 30);


})

removeEle.addEventListener("mousedown", e => {
    clicking = setInterval(function () {

        removeEle.click()


    }, 30);


})

addEle.addEventListener("mouseup", e => { clearInterval(clicking); });
removeEle.addEventListener("mouseup", e => { clearInterval(clicking); });
addEle.addEventListener("click", e => {
    updatePoints("+10")
})
removeEle.addEventListener("click", e => {
    updatePoints("-10")
})


let checkUpdatedPoints = function (num, boolean) {

    checkPoints();

    if (boolean === "true") {

        points = +points + +num;


    } else if (boolean === "false") {
        points = +points - +num;
    }
    updatedStoragePoints();
    checkPoints();

}