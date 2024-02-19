function getRandomActivity(activities) {



    // Replace elements in the picked activity

    let newArr = [];
    let titles = [];
    let n = 0;

    let ran = Math.floor(Math.random() * activities.length);
    while (ran >= 20 || ran <= 2) {
        ran = Math.floor(Math.random() * activities.length / 10);
        console.log("Fuck " + ran)
    }
    for (let x = 0; x < activities.length; x++) {
        n++
        if (n >= ran) {
            return { arr: newArr, titles: titles };
        }
        x = Math.floor(Math.random() * activities.length);
        activities[x][6] = generateRandomId();
        newArr.push(activities[x])
        titles.push(activities[x][0])

    }


    return { arr: newArr, titles: titles };
}

let generateRandomId = function () {
    const baseId = 'task';
    const randomString = Math.random().toString(36).substring(2, 8);

    const randomId = baseId + '-' + randomString;


    return randomId;
}

// Your array of activities
const activities = [
    ["Work", 4, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Math", 5, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Cooking", 2, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Gym", 3, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Shower", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Physics", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Eat Breakfast", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Workout", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Clean the House", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Read a Book", 3, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Chemistry", 2, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "https://images.theconversation.com/files/553049/original/file-20231010-21-ljmz9o.jpg?ixlib=rb-1.1.0&rect=41%2C288%2C5458%2C2729&q=45&auto=format&w=1356&h=668&fit=crop"],
    ["Watch TV", 1, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Have Lunch", 5, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Go for a Walk", 4, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Take a Nap", 3, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Listen to Music", 2, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Meet Friends", 1, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Biology", 5, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Have Dinner", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Relax", 3, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Literature", 2, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Sleep", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Commute to Work", 4, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study History", 5, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Emails", 2, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Go for a Run", 3, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Shop for Groceries", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Art", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Do Laundry", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Social Media", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Write in a Journal", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Call Family", 5, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Take a Shower", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Geography", 2, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Listen to Podcasts", 3, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Water Plants", 4, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Philosophy", 5, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "https://static1.squarespace.com/static/5ce71504c7259600017b8c37/5cf401fb779aee0001cf461b/63c05d8691756c5bea24b847/1674217002894/What+is+Philosophy.jpg?format=1500w"],
    ["Check News", 1, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", 1, "work"],
    ["Prepare Lunch", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Economics", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Take Medication", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Languages", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Plan Meals", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Computer Science", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Do Dishes", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Weather", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Philosophy", 5, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "https://static1.squarespace.com/static/5ce71504c7259600017b8c37/5cf401fb779aee0001cf461b/63c05d8691756c5bea24b847/1674217002894/What+is+Philosophy.jpg?format=1500w"],
    ["Meditate", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Philosophy", 1, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "https://static1.squarespace.com/static/5ce71504c7259600017b8c37/5cf401fb779aee0001cf461b/63c05d8691756c5bea24b847/1674217002894/What+is+Philosophy.jpg?format=1500w"],
    ["Water Garden", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Literature", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Pay Bills", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Engineering", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Water Flowers", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Finances", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Political Science", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Make Coffee", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Medicine", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Exercise Brain", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Mail", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Make Tea", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Law", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Stretch", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Messages", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Study Astronomy", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Water Houseplants", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Take a Break", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Calendar", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Brew Coffee", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Go for a Drive", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Notifications", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Brew Tea", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Browse Internet", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Updates", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Drink Water", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Check Social Networks", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "work"],
    ["Chat with Friends", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "work"],

];

// Get a random activity
const randomActivitytitles = getRandomActivity(activities).titles;
const randomActivityarr = getRandomActivity(activities).arr;

console.log(randomActivityarr)

window.addEventListener("DOMContentLoaded", e => {
    let suggestions = document.querySelector(".box .suggestions");

    suggestions.setAttribute("selected", "0");


    for (let y = 0; y < randomActivityarr.length; y++) {

        let recommend = document.createElement("div");
        recommend.classList.add("sug-item")
        recommend.textContent = randomActivityarr[y][0];

        recommend.addEventListener("click", ex => {

            console.log(suggestions.getAttribute("selected"))


            if (recommend.classList.contains("active")) {
                suggestions.setAttribute("selected", 0)

                recommend.classList.remove("active")
                let sugitems = suggestions.querySelectorAll(".sug-item.active");
                sugitems.forEach(el => {

                    suggestions.setAttribute("selected", +suggestions.getAttribute("selected") + 1)
                    el.style.setProperty("--num", `"${+suggestions.getAttribute("selected")}"`)



                });
            } else {

                if (suggestions.getAttribute("selected") <= 0) {
                    suggestions.setAttribute("selected", 0)

                }
                suggestions.setAttribute("selected", +suggestions.getAttribute("selected") + 1)
                recommend.classList.add("active")
                recommend.style.setProperty("--num", `"${+suggestions.getAttribute("selected")}"`)
            }

        })
        suggestions.appendChild(recommend);


    }
    let sel = document.querySelector(".box .sug-sel .sug-list-item.sel");
    let reset = document.querySelector(".box .sug-sel .sug-list-item.res");
    let create = document.querySelector(".box .sug-sel .sug-list-item.create");

    sel.addEventListener("click", ex => {

        suggestions.querySelectorAll(" .sug-item:not(.active)").forEach(e => {
            e.click();
        })

    })

    reset.addEventListener("click", ex => {

        suggestions.querySelectorAll(".sug-item.active").forEach(e => {
            e.click();
        })

    })
    create.addEventListener("click", ex => {
        let firstArray = randomActivityarr;
        let secondArray = [];

        let loloyArray = [];

        suggestions.querySelectorAll(".sug-item.active").forEach(e => {
            secondArray.push(`${e.textContent}`)

        })
        console.log("sarry:" + firstArray)
        console.log("sarry:" + secondArray)
        for (let i = 0; i < secondArray.length; i++) {
            // Check if the element in secondArray exists in the firstArray
            if (firstArray[i][0] == secondArray[i]) {
                loloyArray.push(firstArray[i]);
                console.log("IT MUST BE")
            }
        }
        for (let i = 0; i < loloyArray.length; i++) {
            if (loloyArray[i][4].includes("Date.now()")) {
                loloyArray[i][4] = loloyArray[i][4].replaceAll("Date.now()", Date.now()).replaceAll("new Date(", "");
                console.log(loloyArray[i][4])
                let parts = loloyArray[i][4].split('+');

                // Parse each part into a number and perform addition
                let result = parseInt(parts[0]) + parseInt(parts[1]);
                loloyArray[i][4] = `${result}`;
                console.log(loloyArray[i][4])
            }

            let typeTitle = loloyArray[i][0];
            let typeColumn = loloyArray[i][1];
            let typeRow = loloyArray[i][2];
            let typeChecked = loloyArray[i][3];
            let datesec = loloyArray[i][4];
            let dateTimer = loloyArray[i][5];
            let id = loloyArray[i][6];
            let bgs = loloyArray[i][7];
            let updatedArray = [`"${typeTitle}"`, typeColumn, typeRow, `"[]"`, `"${datesec}"`, `"${dateTimer}", "${id}", "${bgs}"`]

            localStorage.setItem(`types${id}`, `[${updatedArray}]`);
            let tLength = JSON.parse(localStorage.getItem("tLength"));
            tLength = tLength.map(e => { return `"${e}"` })

            tLength.push(`"${id}"`);
            localStorage.setItem("tLength", `[${tLength}]`)




            let tELE = JSON.parse(localStorage.getItem("tLength")).length - 1;
            console.log("TELE : " + tELE)
            createElementBox(typeTitle, typeColumn, typeRow, typeChecked, datesec, dateTimer, tELE, document.querySelector(".box"), id, bgs)
        }

        console.log(loloyArray)
    })


})