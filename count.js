let vol = document.querySelector(".vol .val");
let volume;
let slider = document.querySelector(".sound")
if (localStorage.getItem("sound")) {
    volume = localStorage.getItem("sound")
    vol.textContent = volume * 100;
    slider.value = volume * 100;
} else {
    volume = 0.5;
    localStorage.setItem("sound", 0.5)

}
let theme;
if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
} else {
    theme = "basic";
    localStorage.setItem("theme", "basic")

}




slider.addEventListener("input", e => {

    volume = slider.value / 100;
    vol.textContent = slider.value;
    localStorage.setItem("sound", volume)
})

function separateText(text) {


    const numericPart = text.replace(/[^0-9]/g, '');
    const nonNumericPart = text.replace(/[0-9]/g, '');

    return {
        NTime: numericPart,
        TTime: nonNumericPart
    };
}

let emojiFix = function (row, column, typeChecked, TypeElement) {
    if (row * column > typeChecked.length) {
        TypeElement.classList.add("isUp", "sad")

    } else {
        TypeElement.classList.add("isUp", "happy")
    }
}

function secondsToHoursMinutes(seconds) {
    const years = Math.floor(seconds / (365 * 24 * 3600)); // 365 days in a year
    const remainingSecondsAfterYears = seconds % (365 * 24 * 3600);

    const months = Math.floor(remainingSecondsAfterYears / (30 * 24 * 3600)); // 30 days in a month (approximation)
    const remainingSecondsAfterMonths = remainingSecondsAfterYears % (30 * 24 * 3600);

    const days = Math.floor(remainingSecondsAfterMonths / (24 * 3600));
    const remainingSecondsAfterDays = remainingSecondsAfterMonths % (24 * 3600);

    const hours = Math.floor(remainingSecondsAfterDays / 3600);
    const remainingSecondsAfterHours = remainingSecondsAfterDays % 3600;

    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const second = Math.floor(remainingSecondsAfterHours % 60);


    return {
        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        second: second
    };
}


let popup = function (text, state, buttoned, subtitle) {
    let overlay = document.createElement("div")
    overlay.classList.add("overlay")

    let warntxtheader = document.createElement("h1")
    if (!state) { state = "Warning" }
    warntxtheader.textContent = `${state}`
    warntxtheader.classList.add("heading")
    let btnCont = document.createElement("div")
    let btn1 = document.createElement("button")
    btn1.textContent = "Cancel";
    btn1.classList.add("cancel")
    let btn2 = document.createElement("button")
    btn2.textContent = "continue";
    btn2.classList.add("continue")
    btnCont.classList.add("btncont")
    if (buttoned == "two") { btnCont.appendChild(btn1) }

    btnCont.appendChild(btn2)
    let warn = document.createElement("div")
    let warntxt = document.createElement("div")
    warntxt.classList.add("warn-txt")
    warntxt.textContent = `${text}`
    warn.classList.add("warn")
    if (subtitle) {
        let subt = document.createElement("p");
        subt.textContent = subtitle;
        warntxt.appendChild(subt);
    }
    warn.appendChild(warntxtheader)
    warn.appendChild(warntxt)


    warn.appendChild(btnCont)

    overlay.appendChild(warn)
    if (!buttoned || buttoned == "one") {
        btn2.setAttribute("state", "access");
    }

    if (buttoned == "two") {
        btn2.setAttribute("state", "clear");
        btn1.setAttribute("state", "clear");
    }
    overlay.addEventListener("click", e => {
        if (e.target.classList.toString().includes("overlay") || (e.target.classList.toString().includes("cancel") && e.target.getAttribute("state") == "clear") || (e.target.classList.toString().includes("continue") && e.target.getAttribute("state") == "access")) {
            overlay.style.setProperty("--animation-name", "end-fade-y 0.3s ease-in-out 1");
            overlay.style.setProperty("--opacity", "transparent");
            warn.addEventListener("animationend", x => {

                document.body.removeChild(overlay);
            })

            document.body.style.overflow = "visible"
        } else if (e.target.classList.toString().includes("continue")) {
            if (e.target.getAttribute("state") == "clear") {
                location.reload();
                localStorage.clear();
            }
        }
    })
    document.body.appendChild(overlay)
    document.body.style.overflow = "hidden"
}
document.addEventListener('DOMContentLoaded', function () {

    let typeArrange = document.querySelector(".selector.type")
    let pc = typeArrange.querySelector(".placeholder");
    pc.addEventListener("click", e => {
        setTimeout(function () { changes(pc) }, 100)


    })
    typeArrange.querySelectorAll(".option").forEach(e => {

        e.addEventListener("click", ev => {
            changes(e)
        })

    });

})
let changes = function (e) {

    if (e.getAttribute("unit").toString().toLowerCase() == "all") {
        document.querySelectorAll(".t-type").forEach(v => {
            v.setAttribute("reveal", "all")
        })
    } else if ((e.getAttribute("unit").toString().toLowerCase() == "important")) {
        document.querySelectorAll(".t-type").forEach(v => {
            v.setAttribute("reveal", "important")
        })

    } else if ((e.getAttribute("unit").toString().toLowerCase() == "failed")) {
        document.querySelectorAll(".t-type").forEach(v => {
            v.setAttribute("reveal", "failed")
        })

    } else if ((e.getAttribute("unit").toString().toLowerCase() == "success")) {
        document.querySelectorAll(".t-type").forEach(v => {
            v.setAttribute("reveal", "success")
        })

    } else if ((e.getAttribute("unit").toString().toLowerCase() == "finished")) {
        document.querySelectorAll(".t-type").forEach(v => {
            v.setAttribute("reveal", "finished")
        })

    } else if ((e.getAttribute("unit").toString().toLowerCase() == "nfinished")) {
        document.querySelectorAll(".t-type").forEach(v => {
            v.setAttribute("reveal", "nfinished")
        })

    } else if ((e.getAttribute("unit").toString().toLowerCase() == "hasbc")) {
        document.querySelectorAll(".t-type").forEach(v => {
            if (v.querySelector(".t-title").classList.toString().includes("bc")) {
                v.setAttribute("reveal", "hasbc")
            } else {
                v.setAttribute("reveal", "none")
            }
        })

    } else if ((e.getAttribute("unit").toString().toLowerCase() == "none")) {
        document.querySelectorAll(".t-type").forEach(v => {
            v.setAttribute("reveal", "none")
        })

    }

}
let element = document.querySelectorAll(".dropdown .drop");
let texts = ["one", "two", "three"]
for (let x = 0; x < element.length; x++) {
    let computedHeight = window.getComputedStyle(element[x]).height;

    setTimeout(function () { element[x].classList.add("zero") }, 100)

    document.documentElement.style.setProperty(`--height-${texts[x]}`, `${computedHeight}`);
    element[x].setAttribute("height", `${computedHeight}`)

}


let resSavings = document.querySelector(".dropdown .drop .res-savings");
resSavings.addEventListener("click", x => {

    popup("By proceeding, you will erase all of your data stored on this website.", "Warning", "two");

})
var toggleCheckbox = document.getElementById('toggledark');

let checker = localStorage.getItem("dark");
if (checker == "white") {
    document.documentElement.style.setProperty(`--bc`, `white`);
    toggleCheckbox.setAttribute("checked", "true")

} else {
    document.documentElement.style.setProperty(`--bc`, `rgb(13, 12, 17)`);
}

toggleCheckbox.addEventListener('change', function () {
    // When the checkbox state changes (checked or unchecked), this function will be executed
    if (toggleCheckbox.checked) {
        // Checkbox is checked
        document.documentElement.style.setProperty(`--bc`, `white`);
        localStorage.setItem("dark", "white")
    } else {
        // Checkbox is unchecked
        document.documentElement.style.setProperty(`--bc`, `rgb(13, 12, 17)`);
        localStorage.setItem("dark", "notwhite")
    }
});



window.addEventListener("offline", e => {


    document.body.innerHTML = `<div class="turnof"> Drink coffee. </div>`

    let turnof = document.querySelector(".turnof")

    turnof.onclick = function () {
        location.reload()
    }

})
window.addEventListener("online", e => {

    location.reload()


})

if (!localStorage.getItem("tLength")) {
    localStorage.setItem("tLength", "[]")
}
let oldY = 0;
let closestc = false;
document.addEventListener("mousemove", e => {
    if (e.target.closest(".nav")) {
        closestc = true;
    } else {
        closestc = false;
    }
})
window.addEventListener('scroll', ev => {
    var navbar = document.querySelector('.nav .navlinks');

    var scrollPosition = window.scrollY;

    if (!document.querySelector(".nav.clicked")) {
        if (scrollPosition > 250) {

            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (!closestc) {
                if (currentScroll > lastScrollTop) {
                    if (!navbar.classList.contains("merge"))
                        navbar.classList.add("merge");
                } else {
                    if (navbar.classList.contains("merge"))
                        navbar.classList.remove("merge");

                }
            }
            if (!navbar.classList.contains("navbar-fixed"))
                navbar.classList.add('navbar-fixed');

        } else {
            if (navbar.classList.contains("navbar-fixed"))
                navbar.classList.remove('navbar-fixed');
        }
    }



    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
})



var lastScrollTop = 0;

window.addEventListener("scroll", function () {

}, false);


let box = document.querySelector(".box");

let typesLength = localStorage.getItem("tLength");
let types = [];


let typesReStyle = function () {
    types = [];
    typesLength = localStorage.getItem("tLength");
    typesLength = JSON.parse(typesLength);

    if (typesLength.length <= 0) {
        return
    }

    for (let l = 0; l < typesLength.length; l++) {
        let typeNum = localStorage.getItem(`types${typesLength[l]}`);
        typeNum = JSON.parse(typeNum);
        let typeOne = [];
        for (let t = 0; t < typeNum.length; t++) {



            typeOne.push(typeNum[t]);
        }



        types.push(typeOne);
    }


}
let clearType = function (id) {
    let elx = document.querySelector(`.t-type[type-name-element="${id}"]`);
    elx.style.height = `${elx.offsetHeight}px`;
    if (Array.from(box.children).includes(elx)) {
        console.log("YEPPP")
    }

    console.log(elx)
    let audio = new Audio("click.mp3")
    audio.play();
    console.log("HEY start DELEtion : " + id)
    intervalId = elx.getAttribute("interval");
    clearInterval(intervalId)
    localStorage.removeItem(`types${id}`)


    let arr = JSON.parse(localStorage.getItem("tLength"));

    let indexToRemove = arr.indexOf(`${id}`);

    if (indexToRemove !== -1) {
        // Remove the element at the found index
        arr.splice(indexToRemove, 1);
    }


    let newArray = arr.map(function (element) {
        return "\"" + element + "\"";
    });



    localStorage.setItem("tLength", `[${newArray}]`)


    console.log("xd")
    box = document.querySelector(".box")

    let x = 0;

    setTimeout(function () {
        console.log("Transition has been end.");
        elx.classList.add("removeal");


        setTimeout(function () {
            elx.classList.remove("removeal");
            console.log(elx)

            box.removeChild(elx);
        }, 600)

    }, 100)



}

function secondsToDate(seconds) {
    // Create a new Date object with the input seconds
    let date = new Date(0);
    date.setSeconds(seconds);

    return date;
}
let animates = function (element, speed) {

    let eleText = element.textContent.split("");

    element.textContent = "";
    let chars = 0;
    eleText.forEach(char => {
        chars++;
        setTimeout(function () {
            element.textContent = element.textContent + `${char}`;
        }, chars * speed);


    })
}
if (!localStorage.getItem("important")) {
    localStorage.setItem("important", `[]`)
}
function getNumberPattern(text) {

    // Regular expression to match the pattern [number/number/number]
    const regex = /\[(\d+\/\d+\/\d+)\]/;

    // Search for the pattern in the text
    const match = text.match(regex);

    // If a match is found, return the captured group (the numbers)
    if (match) {
        return match[1];
    }

    // Otherwise, return null
    return null;
}
let createElementBox = function (typeTitle, typeColumn, typeRow, typeChecked, datesec, dateTimer, tELE, ElementContainer, id, bgs, boxType, listMarks) {
    typesReStyle();

    console.log("------------listmarks")
    console.log(listMarks)



    console.log("------------listmarks")
    let important;
    if (localStorage.getItem("important").includes(id)) {
        important = true;
    }

    let TypeEle = document.createElement("div");
    TypeEle.classList.add(`t-type`)


    TypeEle.setAttribute(`type-name-element`, id);
    TypeEle.setAttribute(`reveal`, "all");




    let TypeTitleCont = document.createElement("div");
    TypeTitleCont.classList.add("t-cont-t")

    if (important) {
        TypeEle.classList.add("important")
        let impEle = document.createElement("div")
        impEle.classList.add("t-imp")
        impEle.textContent = "Important"
        TypeTitleCont.appendChild(impEle)
    }


    let TypeTitleEle = document.createElement("div");



    let TypeTitlePEle = document.createElement("h3");
    let TypeTitleDate = document.createElement("div");

    TypeTitleDate.classList.add("date", "hoverUp")

    let TypeTitleSchedule = document.createElement("div");

    let scheduleTimer = document.createElement("div")

    scheduleTimer.classList.add("t-timer")

    let endDate = new Date(+datesec);
    console.log("END DATE: " + endDate.getTime())

    let isDate;
    if (datesec) {
        let NewDate = new Date();
        isDate = new Date(NewDate.getTime() + secondsToDate(dateTimer).getTime());

        if (NewDate > endDate) {
            console.log("The time was end from a while")
            scheduleTimer.setAttribute("timeDifference", 0);
        }
        if (NewDate < endDate) {
            console.log("Here? + " + (endDate - NewDate))
            console.log("Here? e + " + (endDate))
            console.log("Here? n + " + (NewDate))
            scheduleTimer.setAttribute("timeDifference", (endDate.getTime() - NewDate.getTime()));
        }



    }


    let currentDate = new Date();

    TypeTitleDate.textContent = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`;


    let intervalId;
    let finishedBtn = document.createElement("button")
    finishedBtn.classList.add("t-btn");
    finishedBtn.textContent = "Delete?"
    scheduleTimer.textContent = "Time remaining: Hours » 0, Minutes » 0, Seconds » "
    if (isDate) {
        console.log("IS GREATER: " + (currentDate > endDate))
        console.log("IS curr: " + (currentDate))
        console.log("IS end: " + (endDate))
        if (currentDate > endDate) {


            TypeTitleDate.textContent = (`${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()} has passed.`);
            if (intervalId) {
                clearInterval(intervalId);
            }

            scheduleTimer.textContent = "Time's up! Create a new one";

            emojiFix(typeRow, typeColumn, typeChecked, TypeEle);
            finishedBtn.setAttribute("finished", "true")
        } else {


            animates(scheduleTimer, 20)
            TypeTitleDate.textContent = `${endDate.getFullYear()}/${endDate.getMonth() + 1}/${endDate.getDate()}`;


            intervalId = setInterval(() => {
                updateTimer(+scheduleTimer.getAttribute("timeDifference"), scheduleTimer, intervalId, tELE, typeChecked)
            }, 1000);
            TypeEle.setAttribute("interval", intervalId)
        }


    }













    finishedBtn.addEventListener("click", e => {

        clearType(id)

    })

    document.addEventListener('contextmenu', function (event) {
        // Prevent the default right-click menu



        // Check if the target element has the class "t-type"
        if (event.target.classList.contains('t-type')) {

            if (document.querySelector(".custom-element")) {
                document.body.removeChild(document.querySelector(".custom-element"))
                openMenu = false;
            }
            // Create a new element  
            if (openMenu) return;
            event.preventDefault();
            let id = event.target.getAttribute("type-name-element")
            var customElement = document.createElement('div');
            typeMenu(customElement, event, id, intervalId);

            // Append the element to the body
            document.body.appendChild(customElement);
        }
    });





    TypeTitleEle.classList.add("t-title")
    TypeTitleSchedule.innerHTML = `
    
        <div class="t-settings-list">
            <ul class="t-s-list">
                <li class="t-s-item del"><i class="fa-solid fa-trash"></i></li>
                <li class="t-s-item edit"><i class="fa-solid fa-pen-to-square"></i></li>
                <li class="t-s-item check"><i class="fa-regular fa-circle-check"></i></li>
                <li class="t-s-item pause"><i class="fa-regular fa-circle-pause"></i></li>
                <li class="t-s-item star"><i class="fa-solid fa-star"></i></li>
            </ul>
        </div>
        <i class="fa-solid fa-sliders t-s"></i>
    `;

    TypeTitleSchedule.classList.add("t-schedule")
    TypeTitlePEle.textContent = typeTitle;


    animates(TypeTitlePEle, 70)



    TypeTitleEle.appendChild(TypeTitlePEle)
    TypeTitleEle.appendChild(TypeTitleDate)
    TypeTitleEle.appendChild(TypeTitleSchedule)
    if (important) {
        TypeTitleEle.querySelector(".star").classList.add("active")
    }
    let TypeBoxesEle = document.createElement("div");

    if (boxType == "numbers" || !boxType) {

        TypeBoxesEle.style.gridTemplateColumns = `repeat(${Number.parseInt(typeColumn)}, 1fr)`;
    } else if (boxType == "marks") {

        TypeBoxesEle.classList.add("bCont-marks");

    }
    TypeBoxesEle.classList.add("boxesCont")





    let isDragging = false;

    let drag = function (e) {
        if (isDragging) {

            if (e.target.getAttribute("selected") == "true") {
                e.target.setAttribute("selected", "false");
                e.target.click();
            }
        }
    }

    // Reset the hasClicked variable when the user leaves and comes back

    TypeBoxesEle.addEventListener('mousemove', e => { if (isDragging) drag(e) });

    TypeBoxesEle.addEventListener('mouseup', function () {
        isDragging = false;

        // Remove event listeners when the dragging stops
    });
    TypeBoxesEle.addEventListener('mouseleave', function () {
        isDragging = false;

        // Remove event listeners when the dragging stops
    });

    TypeBoxesEle.addEventListener('mousedown', function () {
        isDragging = true;

        // Remove event listeners when the dragging stops
    });


    TypeBoxesEle.setAttribute("checks", 0)

    if (boxType == "numbers" || !boxType) {
        boxesL = Number.parseInt(typeRow) * Number.parseInt(typeColumn);
        console.log("boxesL: " + boxesL)
        console.log("trowL: " + typeRow)
        console.log("tcolumnL: " + typeColumn)
        console.log("tL: " + types)
    } else if (boxType == "marks") {
        boxesL = listMarks.length;
    }

    for (let b = 0; b < boxesL; b++) {
        let tBox = document.createElement("div");
        let dating;
        if (boxType == "numbers" || !boxType) {
            tBox.classList.add("b-num")
            tBox.textContent = `${b + 1}`
        } else if (boxType == "marks") {
            tBox.classList.add("b-marks")
            tBox.textContent = `${listMarks[b].toString().slice(0, listMarks[b].indexOf("[")).replaceAll(`"`, "")}`
            dating = `${listMarks[b].toString().slice(listMarks[b].indexOf("[") + 1, listMarks[b].indexOf("]"))}`
            console.log("datingg: " + dating)

            tBox.style.setProperty("--history", `"${dating}"`)


        }
        tBox.classList.add("t-Box");
        tBox.setAttribute("checked", "false")

        for (let bX = 0; bX < typeChecked.length; bX++) {
            if (b + 1 == typeChecked[bX]) {

                tBox.classList.add("t-Box-checked")
                tBox.setAttribute("checked", "true")
            }
        }


        tBox.addEventListener("mouseenter", e => {

            tBox.setAttribute("selected", "true")

        })
        tBox.addEventListener("click", e => {
            var audio = new Audio('click.mp3');
            audio.volume = volume;
            // Play the audio
            audio.play();
            typesReStyle();

            if (boxType == "numbers" || !boxType) {
            } else if (boxType == "marks") {
                let n = new Date(Date.now())
                if (dating) {
                    listMarks[b] = listMarks[b].slice(0, listMarks[b].indexOf("["))
                    types[tELE][9] = listMarks;
                }
                tBox.style.setProperty("--history", `"${n.getFullYear()}` + "/" + `${n.getMonth() + 1}` + "/" + `${n.getDate()}"`)
                console.log(listMarks.indexOf(tBox.textContent))
                let editlistmarks = listMarks;
                editlistmarks[listMarks.indexOf(tBox.textContent)] = `${tBox.textContent}[${n.getFullYear()}` + "/" + `${n.getMonth() + 1}` + "/" + `${n.getDate()}]`
                types[tELE][9] = editlistmarks;
            }

            tBox.classList.toggle("t-Box-checked")
            if (tBox.getAttribute("checked") == "true") {

                if (+tBox.parentElement.getAttribute("checks") == boxesL) {
                    finishedBtn.setAttribute("finished", "false")
                }

                tBox.setAttribute("checked", "false")
                tBox.parentElement.setAttribute("checks", +tBox.parentElement.getAttribute("checks") - 1)


            } else if (tBox.getAttribute("checked") == "false") {
                tBox.setAttribute("checked", "true")
                tBox.parentElement.setAttribute("checks", +tBox.parentElement.getAttribute("checks") + 1)
            }
            if (+tBox.parentElement.getAttribute("checks") == boxesL) {
                finishedBtn.setAttribute("finished", true)

            }
            let ordered = [];
            if (typeChecked.includes(b + 1)) {


                for (let k = 0; k < typeChecked.length; k++) {

                    if (!((b + 1) == typeChecked[k])) {
                        ordered.push(typeChecked[k])
                    }


                }
            } else {

                typeChecked.push(b + 1);
                ordered = typeChecked;

            }
            typeTitle = types[tELE][0];
            typeColumn = types[tELE][1];
            typeRow = types[tELE][2];
            typeChecked = `[${ordered}]`;
            typeChecked = JSON.parse(typeChecked);
            datesec = Number.parseInt(types[tELE][4]);
            dateTimer = Number.parseInt(types[tELE][5]);
            let id = (types[tELE][6]);
            let bgs = (types[tELE][7]);
            boxType = types[tELE][8];
            listMarks = (types[tELE][9]);;
            let updatedArray = [`"${typeTitle}"`, typeColumn, typeRow, `"[${typeChecked}]"`, `"${datesec}"`, `"${dateTimer}", "${id}", "${bgs}"`, `"${boxType}"`, `${JSON.stringify(listMarks)}`]



            localStorage.setItem(`types${id}`, `[${updatedArray}]`)







            checkUpdatedPoints(10, tBox.getAttribute("checked"));



        })

        TypeBoxesEle.appendChild(tBox);

        tBox.style.display = "none"
        setTimeout(function () {
            tBox.classList.add("animate-colors");
            tBox.addEventListener("animationend", e => {

                tBox.classList.remove("animate-colors")
                tBox.style.opacity = `1`
                tBox.style.display = `flex`

            })
            const newHeight = TypeBoxesEle.scrollHeight;

            // Apply the new height with a transition
            TypeBoxesEle.style.height = newHeight + 'px';

            if (b == (typeRow * typeColumn) - 1) {
                TypeBoxesEle.style.height = `max - content`;
            }
        }, (10 + (b / 8)) * b)







    }


    TypeTitleCont.appendChild(TypeTitleEle);
    TypeTitleCont.appendChild(scheduleTimer);


    TypeEle.appendChild(TypeTitleCont);

    TypeEle.appendChild(TypeBoxesEle);



    TypeEle.appendChild(finishedBtn);

    ElementContainer.appendChild(TypeEle)
    setTimeout(function () { updateSettingsMenu(id) }, 100)

    if (bgs != "transparent") {

        if (!bgs.toString().includes("https")) {
            TypeTitleEle.classList.add(bgs + "bc", "bc")
        } else {
            console.log("Bxxx")
            TypeTitleEle.classList.add("bc")
            TypeTitleEle.style.backgroundImage = `linear - gradient(to top, rgba(0, 0, 0, 0.733), rgba(0, 0, 0, 0)), url(${bgs})`
        }


    }


}
let checktypes = function () {


    typesLength = JSON.parse(typesLength);

    if (typesLength.length <= 0) {
        return
    }

    for (let l = 0; l < typesLength.length; l++) {
        let typeNum = localStorage.getItem(`types${typesLength[l]}`);
        typeNum = JSON.parse(typeNum);
        let typeOne = [];
        for (let t = 0; t < typeNum.length; t++) {



            typeOne.push(typeNum[t]);
        }



        types.push(typeOne);

    }


    if (types) {
        if (typesLength.length <= 0) return;
        for (let tELE = 0; tELE < typesLength.length; tELE++) {



            let typeTitle = types[tELE][0];
            let typeColumn = types[tELE][1];
            let typeRow = types[tELE][2];
            let typeChecked = JSON.parse(types[tELE][3]);
            let dateSec = Number.parseInt(types[tELE][4]);
            let dateTimer = Number.parseInt(types[tELE][5]);
            let id = (types[tELE][6]);
            let bgs = (types[tELE][7]);
            let boxType = types[tELE][8];
            console.log(types[tELE][9])
            let listMarks = (types[tELE][9]);
            console.log("HERe ----------------------x")
            console.log(listMarks)
            createElementBox(typeTitle, typeColumn, typeRow, typeChecked, dateSec, dateTimer, tELE, box, id, bgs, boxType, listMarks)






        }

    }




}
let resetPtsBtn = document.querySelector(".nav .navlinks .nav-ul .category .reset")
let typeCreator = document.querySelector(".nav .navlinks .nav-ul .category .create")

resetPtsBtn.addEventListener("click", e => {

    points = 0;
    updatedStoragePoints();
    updateRoles();


});
let toggleListed = function () {
    document.querySelector(".nav").classList.toggle("clicked")
    if (document.querySelector(".nav").classList.toString().includes("clicked")) {
        document.body.style.overflowY = "scroll"
        document.body.querySelectorAll("*").forEach(e => {
            e.style.setProperty('display', 'none', 'important');
            document.querySelector(".nav .navlinks").classList.remove('navbar-fixed');
            document.querySelector(".nav").style.display = "flex";
            document.querySelectorAll(".nav *").forEach(v => { v.style.removeProperty("display"); })
        })
    } else {
        document.body.querySelectorAll("*").forEach(e => { e.style.removeProperty('display'); });

        document.body.style.overflowY = "scroll"
    }
}
let boxBackup = box;

typeCreator.addEventListener("click", e => {
    if (document.querySelector(".clicked.nav")) { toggleListed(); }

    setTimeout(function () {
        window.scrollTo({
            top: document.querySelector(`.createType`).offsetTop + (document.querySelector(`.createType`).offsetHeight / 2) - (window.innerHeight / 2),
            behavior: 'smooth'
        });
    }, 100)





});

window.addEventListener("DOMContentLoaded", e => {


    let createtype = document.querySelector(".createType")
    let sselector = document.querySelector(".createType .selector.typeBoxes")

    sselector.addEventListener("click", e => {
        let x = sselector.querySelector(".placeholder").getAttribute("unit").toString().toLowerCase();
        console.log(x)
        if (x == "checkmarks") {
            createtype.classList.remove("numbers")
            createtype.classList.add("marks")
        } else if (x == "numbers") {
            createtype.classList.add("numbers")
            createtype.classList.remove("marks")

        }

    })
    let inadd = document.querySelector(".createType .t-line")
    let adder = document.querySelector(".createType .adder");

    let additionCont = document.querySelector(".createType .t-add-cont")

    adder.addEventListener("click", e => {
        if (!inadd.value.length > 0) {
            inadd.focus();
            return
        }
        let line = document.createElement("div")
        line.classList.add("line")
        line.textContent = inadd.value;
        inadd.value = "";
        additionCont.appendChild(line);

        line.addEventListener("click", e => {
            additionCont.removeChild(line);
        })



    })

    let listed = document.querySelector(".nav .navlinks .nav-list")
    listed.addEventListener("click", v => {


        toggleListed();

    })

    let searcher = document.querySelector(".nav-box .input-nav");
    let create = document.querySelector(".nav-box .create");
    let clear = document.querySelector(".nav-box .clear");

    clear.addEventListener("click", e => {

        let types = document.querySelectorAll(".t-type");

        let IDS = [];
        let intervals = []
        types.forEach(e => {

            IDS.push(e.getAttribute("type-name-element"));
            intervals.push(e.getAttribute("interval"));

        })


        for (let x = 0; x < IDS.length; x++) {

            clearType(IDS[x])
        }

    })
    create.addEventListener("click", e => {
        setTimeout(function () {
            window.scrollTo({
                top: document.querySelector(`.createType`).offsetTop + (document.querySelector(`.createType`).offsetHeight / 2) - (window.innerHeight / 2),
                behavior: 'smooth'
            });
        }, 100)
    })
    searcher.addEventListener("input", v => {

        let allTypes = document.querySelectorAll(".t-type")

        allTypes.forEach(type => {
            if (searcher.value.length >= 1) {
                type.classList.add("hidden");
            } else {
                type.classList.remove("hidden")
            }
            if (type.getAttribute("type-name-element").includes(searcher.value)) {

                type.classList.remove("hidden")

            } else if (type.textContent.toString().toLowerCase().includes(searcher.value.toString().toLowerCase())) {
                type.classList.remove("hidden")
            }

        })

    })

    let linkers = document.querySelectorAll(".nav .navlinks .nav-ul .m-link.dropdown")
    linkers.forEach(element => {
        element.addEventListener("click", e => {
            if (document.querySelector(".nav").classList.toString().includes("clicked")) {
                if (e.target.classList.toString().includes("m-link")) {
                    (element.querySelector(".drop")).classList.toggle("cl-visible")
                    window.scrollTo({
                        top: element.offsetTop + 10 + (element.offsetHeight / 2),
                        behavior: 'smooth'
                    });
                }
            }
        })
    })
    let uncheckall = document.querySelector(".nav .navlinks .nav-ul .uncheckall")

    uncheckall.addEventListener("click", e => {


        let allTypes = document.querySelectorAll(".box .t-type")

        for (let y = 0; y < allTypes.length; y++) {


            let typeBoxes = allTypes[y].firstElementChild.nextElementSibling.childNodes;
            let lighted = 0;
            for (let bb = 0; bb < typeBoxes.length; bb++) {

                if (typeBoxes[bb].getAttribute("checked") === "true") {

                    lighted++;
                    checkUpdatedPoints(10, "false")
                }

                typeBoxes[bb].setAttribute("checked", "false")
                typeBoxes[bb].classList.remove("t-Box-checked")



            }
            typesReStyle();
            let typeTitle = types[y][0];
            let typeColumn = types[y][1];
            let typeRow = types[y][2];
            let typeChecked = `[]`;
            let datesec = Number.parseInt(types[y][4]);
            let dateTimer = Number.parseInt(types[y][5]);
            let id = (types[y][6]);
            let bgs = (types[y][7]);
            typeChecked = JSON.parse(typeChecked);
            let boxType = types[y][8];
            let listMarks = (types[y][9]);
            let updatedArray = [`"${typeTitle}"`, typeColumn, typeRow, `"[${typeChecked}]"`, `"${datesec}"`, `"${dateTimer}", "${id}", "${bgs}"`, `"${boxType}"`, `${JSON.stringify(listMarks)}`]

            localStorage.setItem(`types${typesLength[y]}`, `[${updatedArray}]`)


        }
        let finishedBtn = document.querySelector(".t-btn")
        let b = document.querySelector(".boxesCont")

        if (finishedBtn.getAttribute("finished") == "true") {
            finishedBtn.setAttribute("finished", false)
            b.setAttribute("checks", 0);
        }


    })

    document.addEventListener('click', e => {

        if (openMenu) {
            document.body.removeChild(document.querySelector(".custom-element"))
            openMenu = false;

        }
    })




})
let openMenu = false
let updateRoles = function () {
    let roleText = document.querySelector(".dropdown span.role")
    let tiers = document.querySelectorAll(".category.roles li")
    let unlockedTiers = []

    for (let x = 0; x < tiers.length; x++) {
        tiers[x].setAttribute("status", "locked")


        if (points >= +tiers[x].getAttribute("pointed")) {

            unlockedTiers.push(tiers[x].getAttribute("role"))
            console.log("Yes role: " + tiers[x].getAttribute("role"))

        }
    }

    for (let q = 0; q < tiers.length; q++) {


        for (let unt = 0; unt < unlockedTiers.length; unt++) {

            if (tiers[q].getAttribute("role") == unlockedTiers[unt]) {
                tiers[q].setAttribute("status", "unlocked")

                if (tiers[q].getAttribute("role") == unlockedTiers[unlockedTiers.length - 1]) {
                    if (tiers[q].classList.contains("active")) {
                        return
                    }
                    let rAudio = new Audio("role.mp3")
                    rAudio.volume = volume;
                    rAudio.play();

                    tiers.forEach(e => { e.classList.remove("active") })
                    tiers[q].classList.add("active")

                    roleText.textContent = unlockedTiers[unlockedTiers.length - 1]
                    roleText.addEventListener("animationend", v => { roleText.style.removeProperty("animation") })
                    roleText.style.animation = "rolemove 0.5s linear 1";

                    animates(roleText, 100)

                    return
                }
            }
        }


    }






}




window.addEventListener("DOMContentLoaded", e => {

    checktypes();
    let navList = document.querySelector(".nav .navlinks .nav-list")
    navList.addEventListener("click", ex => {

        navList.parentElement.querySelector(".nav-ul").classList.toggle("show")

    })

})
































function parseInput(input, unit) {
    // Parse the input based on the specified unit
    switch (unit) {
        case 'sec':
            return parseFloat(input) * 1000; // Convert hours to milliseconds
        case 'min':
            return parseFloat(input) * 60 * 1000; // Convert hours to milliseconds    
        case 'hr':
            return parseFloat(input) * 60 * 60 * 1000; // Convert hours to milliseconds
        case 'd':
            return parseFloat(input) * 24 * 60 * 60 * 1000; // Convert days to milliseconds
        case 'mo':
            return parseFloat(input) * 30 * 24 * 60 * 60 * 1000; // Assuming 30 days in a month
        case 'yr':
            return parseFloat(input) * 12 * 30 * 24 * 60 * 60 * 1000;
        default:
            return NaN;
    }
}
window.addEventListener('beforeunload', function (event) {
    // Set a variable or perform any action before the page unloads
    localStorage.setItem('closingTime', new Date());
    // The message returned here will be displayed in the confirmation dialog


});
function updateTimer(timeDifference, element, intervalId, tELE, ordered) {

    let id = types[tELE][6];

    intervalId = document.querySelector(`.t-type[type-name-element=${id}]`).getAttribute("interval")




    // Update the timer display
    let secondsDifference = Math.floor(timeDifference / 1000);

    element.textContent = `Time remaining: Months » ${secondsToHoursMinutes(secondsDifference).months}, Days  » ${secondsToHoursMinutes(secondsDifference).days}, Hours » ${secondsToHoursMinutes(secondsDifference).hours}, Minutes »  ${secondsToHoursMinutes(secondsDifference).minutes}, Seconds »  ${secondsToHoursMinutes(secondsDifference).second}`;

    if (secondsDifference <= 9) {
        let audio = new Audio("tn.mp3")
        audio.volume = ((Math.floor(secondsDifference)) / 100);
        audio.play();
    }
    if (secondsDifference <= 0) {
        // Stop the timer when time is up
        clearInterval(intervalId)
        element.textContent = "Time's up!";
        let audio = new Audio("tn.mp3")
        audio.volume = 1;
        audio.play();
        let finishedBtn = document.querySelector(".t-btn")
        finishedBtn.setAttribute("finished", "true")
        emojiFix(types[tELE][1], types[tELE][2], types[tELE][3], element.parentNode.parentNode);
    }

    element.setAttribute("timeDifference", timeDifference -= 1000)
}


function calculateTimeDifference(targetDate) {
    // Convert target date to a JavaScript Date object

    // Get the current date
    const now = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = now - targetDate;

    // Calculate years, months, days, hours, and seconds
    const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((-timeDifference));

    console.log("seconds: " + seconds)
    // Return the result as an object
    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}


let getTheme = function () {

    return localStorage.getItem("theme")

}

let glowFor = function (e) {
    let el = e;
    function glow(event) {

        if (event.animationName === "glows") {
            el.classList.remove("glow-for-while")
            el.removeEventListener("animationend", glow)
        }






    }

    e.classList.add("glow-for-while")

    e.addEventListener("animationend", glow)



}