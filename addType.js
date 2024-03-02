let preview = document.querySelector(".preview");
let Ucreate = document.querySelector(".createType .createTypeBox");
let Upreview = document.querySelector(".createType .createTypePreview");
let Utitle = document.querySelector(".createType .in-put-cont .t-t");
let Urow = document.querySelector(".createType .in-put-cont .t-row");
let Ucolumn = document.querySelector(".createType .in-put-cont .t-column");
let Uexpire = document.querySelector(".createType .in-put-cont .t-exp");
let Uunit = document.querySelector(".createType .in-put-cont .unit.selector .placeholder");
let bground = document.querySelector(".createType .in-put-cont .bground.selector .placeholder");
let Uchecked = document.querySelector(".createType .in-put-cont .t-checked");

Upreview.addEventListener("click", e => {

    preview.innerHTML = "<span class=\"title\">Preview</span>"

    let typeTitle = `${Utitle.value}`;
    let typeColumn = +Ucolumn.value;
    let typeRow = +Urow.value;
    let typeChecked = []
    let currDate = new Date();
    let timeval;

    let bgs = bground.textContent.toLocaleLowerCase();

    if (!Uunit.getAttribute("unit")) {
        timeval = +Uexpire.value;
    } else if (Uunit.getAttribute("unit") == "sec") {
        timeval = Uexpire.value;
    } else if (Uunit.getAttribute("unit") == "min") {
        timeval = Uexpire.value * 60;
    } else if (Uunit.getAttribute("unit") == "hr") {
        timeval = Uexpire.value * 60 * 60;
    } else if (Uunit.getAttribute("unit") == "d") {
        timeval = Uexpire.value * 60 * 60 * 24;
    } else if (Uunit.getAttribute("unit") == "mo") {
        timeval = Uexpire.value * 60 * 60 * 24 * 30;
    } else if (Uunit.getAttribute("unit") == "yr") {
        timeval = Uexpire.value * 60 * 60 * 24 * 30 * 12;
    }


    currDate.setSeconds(currDate.getSeconds() + (+timeval))
    let datesec = currDate.getTime();
    console.log(" fucking : " + currDate)
    console.log(" fucking v: " + Uexpire.value)
    let dateTimer = Uexpire.value;




    let id = generateRandomId();

    createElementBox(typeTitle, typeColumn, typeRow, typeChecked, datesec, dateTimer, 0, preview, id, bgs)
    updateSettingsMenu(id)
})

Ucreate.addEventListener("click", e => {
    var audio = new Audio('unlock.mp3');
    audio.volume = volume;
    // Play the audio
    audio.play();
    preview.innerHTML = "<span class=\"title\">Preview</span>"

    let typeTitle = `${Utitle.value}`;
    let typeColumn = +Ucolumn.value;
    let typeRow = +Urow.value;

    let typeChecked = []
    let currDate = new Date();
    let timeval;
    let id = generateRandomId();
    let bgs = bground.textContent.toLocaleLowerCase();
    if (!Uunit.getAttribute("unit")) {
        timeval = +Uexpire.value;
    } else if (Uunit.getAttribute("unit") == "sec") {
        timeval = Uexpire.value;
    } else if (Uunit.getAttribute("unit") == "min") {
        timeval = Uexpire.value * 60;
    } else if (Uunit.getAttribute("unit") == "hr") {
        timeval = Uexpire.value * 60 * 60;
    } else if (Uunit.getAttribute("unit") == "d") {
        timeval = Uexpire.value * 60 * 60 * 24;
    } else if (Uunit.getAttribute("unit") == "mo") {
        timeval = Uexpire.value * 60 * 60 * 24 * 30;
    } else if (Uunit.getAttribute("unit") == "yr") {
        timeval = Uexpire.value * 60 * 60 * 24 * 30 * 12;
    }

    currDate.setSeconds(currDate.getSeconds() + (+timeval))
    let datesec = currDate.getTime();
    console.log(" fucking : " + currDate)
    console.log(" fucking v: " + Uexpire.value)
    let dateTimer = Uexpire.value;




    if (localStorage.getItem("tLength").length <= 2) {
        localStorage.setItem("tLength", `["${id}"]`);

    } else {
        updateLength = localStorage.getItem("tLength").slice(1, localStorage.getItem("tLength").length - 1);
        localStorage.setItem("tLength", `[${updateLength}, "${id}"]`);
    }
    let tlx = JSON.parse(localStorage.getItem("tLength"))
    console.log("tlx" + tlx.length)
    for (let x = 0; x < Uchecked.value; x++) {
        typeChecked.push(x);
        console.log("what? " + typeChecked)
    }


    if (typeTitle == "") typeTitle = "No title";
    if (bground.getAttribute("link")) {

        if ((bground.getAttribute("link")).includes("https")) {
            bgs = bground.getAttribute("link");
        }
    }
    localStorage.setItem(`types${id}`, `["${typeTitle}",${typeColumn},${typeRow},"[${typeChecked}]", "${datesec}", "${dateTimer}","${id}","${bgs}"]`)

    createElementBox(typeTitle, typeColumn, typeRow, typeChecked, datesec, dateTimer, tlx.length - 1, box, id, bgs)
    updateSettingsMenu(id)
    typesReStyle();

    setTimeout(function () {
        window.scrollTo({
            top: document.querySelector(`[type-name-element="${id}"]`).offsetTop + (document.querySelector(`[type-name-element="${id}"]`).offsetHeight / 2),
            behavior: 'smooth'
        });
    }, 100)


})