function getRandomActivity(activities) {



    // Replace elements in the picked activity

    let newArr = [];
    let titles = [];
    let n = 0;

    let ran = Math.floor(Math.random() * activities.length);
    while (ran >= 20 || ran <= 2) {
        ran = Math.floor(Math.random() * activities.length / 10);
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
    ["Exercise Brain", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "https://cdn.cnn.com/cnnnext/dam/assets/131106134340-01-young-brain-restricted-horizontal-large-gallery.jpg"],
    ["Check Mail", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "https://emaillistvalidation.com/blog/content/images/size/w500/2023/03/Untitled-design--11-.png"],
    ["Study Law", 1, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "https://pavaedu.com/wp-content/uploads/2019/08/law-milano-un%C4%B1versitesi-pavaedu-1024x538.jpg"],
    ["Stretch", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "https://images.ctfassets.net/hjcv6wdwxsdz/30748WEbOJBfAIZXDVvVMS/681653b4c4ee1c097dd69c36a746f201/iStock-1344890104.jpg?w=1258&h=834&fl=progressive&q=50&fm=jpg"],
    ["Check Messages", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "https://www.techfunnel.com/wp-content/uploads/2019/08/Top-6-Instant-Messaging-Apps-for-Business-and-3-Key-Benefits-1.png"],
    ["Study Astronomy", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "https://www.collegeatlas.org/wp-content/uploads/2017/03/student-studying-astronomy.jpg"],
    ["Water Houseplants", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "https://plantperfect.com/wp-content/uploads/2022/10/Plant-Perfect-Garden-Center-Bismarck-How-to-Water-Houseplants-in-the-Winter-watering-can-houseplant.jpg"],
    ["Take a Break", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "https://static.businessworld.in/article/article_extra_large_image/1564477703_dlw1n4_coffee_mug_take_a_break_shutterstock_470.jpg"],
    ["Check Calendar", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "https://thumbs.dreamstime.com/b/d-character-standing-calendar-checkmarks-isolated-white-94688983.jpg"],
    ["Coffee", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1708560000&semt=sph"],
    ["Go for a Drive", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "https://www.nps.gov/thingstodo/images/Do_Drive_GTSR_JF_2.jpg?maxwidth=1300&autorotate=false"],
    ["Check Notifications", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "https://i0.wp.com/technode.com/wp-content/uploads/2022/03/55363556_l-scaled.jpg?fit=2560%2C1707&ssl=1"],
    ["Tea", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "https://www.saatva.com/blog/wp-content/uploads/2021/04/c68ae959-811e-485f-b5d3-d6b7ae56cea2_beginners-tea-guide-main-4.jpeg"],
    ["Browse Internet", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "https://engineering.fb.com/wp-content/uploads/2013/07/internet-browsing-data.jpg"],
    ["Check Updates", 3, 1, "[]", "new Date(Date.now() + " + (30 * 24 * 60 * 60 * 1000) + "", "1", "", "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg"],
    ["Drink Water", 5, 1, "[]", "new Date(Date.now() + " + (7 * 24 * 60 * 60 * 1000) + "", "1", "", "https://media.post.rvohealth.io/wp-content/uploads/2020/06/glass-drinking-water-1200x628-Facebook-1200x628.jpg"],
    ["Check Social Networks", 2, 1, "[]", "new Date(Date.now() + " + (24 * 60 * 60 * 1000) + "", "1", "", "https://assets-global.website-files.com/5f22271f4a92a90a8198c6ef/5f581f61563c688743b41aff_best-social-networking-sites.jpg"],
    ["Chat with Friends", 4, 1, "[]", "new Date(Date.now() + " + (1 * 60 * 60 * 1000) + "", "1", "", "https://freedesignfile.com/upload/2018/07/Chat-online-with-friends-using-laptop-Stock-Photo.jpg"],

];
let reID = function (list) {

    list.forEach(e => {

        e[6] = `${generateRandomId()}`;
        console.log("3ndy.")
        console.log(": " + e)
    });
    console.log(list)
    return list;
}
// Get a random activity
let randomActivityarr;

console.log(randomActivityarr)
let reloadSuggestions = function () {
    randomActivityarr = getRandomActivity(activities).arr;


    let suggestions = document.querySelector(".box .suggestions");

    suggestions.setAttribute("selected", "0");

    suggestions.innerHTML = "";
    let p = 0;
    for (let y = 0; y < randomActivityarr.length; y++) {
        p++;
        let recommend = document.createElement("div");
        recommend.classList.add("sug-item")
        recommend.textContent = randomActivityarr[y][0];
        recommend.setAttribute("id", randomActivityarr[y][6]);

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
        smoothAddition(recommend, suggestions, p, 100)

    }
}

let smoothAddition = function (element, container, n, speed) {


    setTimeout(function () { container.appendChild(element) }, speed * n)
}
window.addEventListener("DOMContentLoaded", e => {
    reloadSuggestions()
    let suggestions = document.querySelector(".box .suggestions");
    let sel = document.querySelector(".box .sug-sel .sug-list-item.sel");
    let reset = document.querySelector(".box .sug-sel .sug-list-item.res");
    let ref = document.querySelector(".box .sug-sel .sug-list-item.ref");
    let create = document.querySelector(".box .sug-sel .sug-list-item.create");
    ref.addEventListener("click", e => {

        reloadSuggestions()

    })
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
        suggestions = document.querySelector(".box .suggestions");
        if (!suggestions.querySelector(".active")) { return }
        suggestions.querySelectorAll(".sug-item.active").forEach(e => {
            secondArray.push(`${e.getAttribute("id")}`)

        })

        console.log("sarry 1 :" + firstArray)
        console.log("sarry 2:" + secondArray)
        for (let ff = 0; ff < firstArray.length; ff++) {
            for (let i = 0; i < secondArray.length; i++) {
                if (firstArray[ff][6] == secondArray[i]) {
                    loloyArray.push(firstArray[ff]);
                    console.log("IT MUST BE + " + firstArray[ff] + " " + secondArray[i])
                }

            }

        }
        for (let i = 0; i < loloyArray.length; i++) {
            if (loloyArray[i][4].includes("Date.now()")) {
                loloyArray[i][4] = loloyArray[i][4].replaceAll("Date.now()", Date.now()).replaceAll("new Date(", "");
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
            window.scrollTo({
                top: document.querySelector(`div[type-name-element="${id}"]`).offsetTop + document.querySelector(`div[type-name-element="${id}"]`).offsetHeight / 2,
                behavior: 'smooth'
            });

        }


        randomActivityarr = reID(randomActivityarr);

        suggestions.querySelectorAll(".sug-item.active").forEach(e => { e.click() });
        let n = 0;
        suggestions.querySelectorAll(".sug-item").forEach(e => {
            e.setAttribute("id", `${randomActivityarr[n][6]}`)
            n++;


        })
    })


})