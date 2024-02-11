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



document.addEventListener('DOMContentLoaded', function () {
    let element = document.querySelectorAll(".dropdown .drop");
    let texts = ["one", "two", "three"]
    for (let x = 0; x < element.length; x++) {
        let computedHeight = window.getComputedStyle(element[x]).height;

        setTimeout(function () { element[x].classList.add("zero") }, 100)

        document.documentElement.style.setProperty(`--height-${texts[x]}`, `${computedHeight}`);
        element[x].setAttribute("height", `${computedHeight}`)

    }



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

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.nav .navlinks');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 250) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});
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
let clearType = function (id, intervalId) {
    let elx = document.querySelector(`.t-type[type-name-element="${id}"]`);
    elx.style.height = `${elx.offsetHeight}px`;
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
    setTimeout(function () { elx.classList.add("removeal"); }, 100)


}
let generateRandomId = function () {
    const baseId = 'randomId';
    const randomString = Math.random().toString(36).substring(2, 8); // Generates a random string

    const randomId = baseId + '-' + randomString;


    return randomId;
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
let createElementBox = function (typeTitle, typeColumn, typeRow, typeChecked, datesec, dateTimer, tELE, ElementContainer, id, bgs) {

    let TypeEle = document.createElement("div");
    TypeEle.classList.add(`t-type`)


    TypeEle.setAttribute(`type-name-element`, id);




    let TypeTitleCont = document.createElement("div");
    TypeTitleCont.classList.add("t-cont-t")


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
    finishedBtn.textContent = "Finished, Delete?"
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
            TypeTitleDate.textContent = `${isDate.getFullYear()}/${isDate.getMonth() + 1}/${isDate.getDate()}`;


            intervalId = setInterval(() => {
                updateTimer(+scheduleTimer.getAttribute("timeDifference"), scheduleTimer, intervalId, tELE, typeChecked)
            }, 1000);
            TypeEle.setAttribute("interval", intervalId)
        }


    }













    finishedBtn.addEventListener("click", e => {

        clearType(id, intervalId)

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
                <li class="t-s-item important"><i class="fa-solid fa-star"></i></li>
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

    let TypeBoxesEle = document.createElement("div");
    TypeBoxesEle.classList.add("boxesCont")

    TypeBoxesEle.style.gridTemplateColumns = `repeat(${Number.parseInt(typeColumn)}, 1fr)`;




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

    TypeBoxesEle.addEventListener('mousedown', function () {
        isDragging = true;

        // Remove event listeners when the dragging stops
    });


    TypeBoxesEle.setAttribute("checks", 0)

    boxesL = Number.parseInt(typeRow) * Number.parseInt(typeColumn);
    console.log("boxesL: " + boxesL)
    console.log("trowL: " + typeRow)
    console.log("tcolumnL: " + typeColumn)
    console.log("tL: " + types)
    for (let b = 0; b < boxesL; b++) {
        let tBox = document.createElement("div");
        tBox.classList.add("t-Box")
        tBox.textContent = `${b + 1}`;
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
            let updatedArray = [`"${typeTitle}"`, typeColumn, typeRow, `"[${typeChecked}]"`, `"${datesec}"`, `"${dateTimer}", "${id}", "${bgs}"`]



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
                TypeBoxesEle.style.height = `max-content`;
            }
        }, (10 + (b / 8)) * b)







    }


    TypeTitleCont.appendChild(TypeTitleEle);
    TypeTitleCont.appendChild(scheduleTimer);


    TypeEle.appendChild(TypeTitleCont);

    TypeEle.appendChild(TypeBoxesEle);



    TypeEle.appendChild(finishedBtn);

    ElementContainer.appendChild(TypeEle)
    if (bgs != "transparent") {

        if (!bgs.toString().includes("https")) {
            TypeTitleEle.classList.add(bgs + "bc", "bc")
        } else {
            console.log("Bxxx")
            TypeTitleEle.classList.add("bc")
            TypeTitleEle.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.733), rgba(0, 0, 0, 0)), url(${bgs})`
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

            createElementBox(typeTitle, typeColumn, typeRow, typeChecked, dateSec, dateTimer, tELE, box, id, bgs)






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

let boxBackup = box;
typeCreator.addEventListener("click", e => {

    window.scrollTo({
        top: document.querySelector(`.createType`).offsetTop,
        behavior: 'smooth'
    });




});
window.addEventListener("DOMContentLoaded", e => {
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
            let id = (types[tELE][6]);
            let bgs = (types[tELE][7]);
            typeChecked = JSON.parse(typeChecked);
            let updatedArray = [`"${typeTitle}"`, typeColumn, typeRow, `"[${typeChecked}]"`, `"${datesec}"`, `"${dateTimer}", "${id}, "${bgs}"`]

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





checktypes();































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

function updateTimer(timeDifference, element, intervalId, tELE, ordered) {

    let typeTitle = types[tELE][0];
    let typeColumn = types[tELE][1];
    let typeRow = types[tELE][2];
    let typeChecked = `[${ordered}]`;
    let datesec = Number.parseInt(types[tELE][4])
    typeChecked = JSON.parse(typeChecked);
    let id = (types[tELE][6]);
    let bgs = (types[tELE][7]);
    let updatedArray = [`"${typeTitle}"`, typeColumn, typeRow, `"[${typeChecked}]"`, `"${datesec}"`, `"${timeDifference / 1000}", "${id}", "${bgs}"`]

    intervalId = document.querySelector(`.t-type[type-name-element=${id}]`).getAttribute("interval")

    localStorage.setItem(`types${id}`, `[${updatedArray}]`)


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
        emojiFix(typeRow, typeColumn, typeChecked, element.parentNode.parentNode);
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

