let overviewBtn = document.querySelector(".category .overview")
let back = document.querySelector(".container .back")

overviewBtn.addEventListener("click", e => {

    console.log(location.pathname)
    if (location.pathname == "/index.html" || location.pathname == "/" || location.pathname == "") {

        console.log("GO overview")
        location.href = location.origin + "/overview.html"
    } else {
        console.log("GO check")
        location.href = location.origin + "/index.html"
    }

})

back.addEventListener("click", e => {
    location.href = location.origin + "/index.html"
})