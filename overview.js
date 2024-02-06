let overviewBtn = document.querySelector(".category .overview")
let back = document.querySelector(".container .back")

overviewBtn.addEventListener("click", e => {

    console.log(location.pathname)
    if (location.pathname == "/index.html") {

        console.log("GO overview")
        location.href = "/overview.html"
    } else {
        console.log("GO check")
        location.href = "/index.html"
    }

})

back.addEventListener("click", e => {
    location.href = "/index.html"
})