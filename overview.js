let overviewBtn = document.querySelector(".category .overview")
let back = document.querySelector(".container .back")

overviewBtn.addEventListener("click", e => {

    console.log(location.pathname)
    if (location.pathname == "/checkments.github.io/index.html") {

        console.log("GO overview")
        location.href = "/checkments.github.io/overview.html"
    } else {
        console.log("GO check")
        location.href = "/checkments.github.io/index.html"
    }

})

back.addEventListener("click", e => {
    location.href = "/checkments.github.io/index.html"
})
