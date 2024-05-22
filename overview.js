let overviewBtn = document.querySelector(".category .overview")
let back = document.querySelector(".container .back")

overviewBtn.addEventListener("click", e => {

    console.log(location.pathname)
    let x = "";
    if (location.hostname.toString().toLowerCase() == "1rqmi-official.github.io") {
        x = "/checkments.github.io"
        console.log(location.hash)
    }
    console.log(location.hostname)
    if (location.pathname == "/index.html" || location.pathname == "/" || location.pathname == "") {

        console.log("GO overview")
        location.href = location.origin + x + "/overview.html"
    } else {
        console.log("GO check")
        location.href = location.origin + x + "/index.html"
    }

})
if (back)
    back.addEventListener("click", e => {
        let x = "";
        if (location.hostname.toString().toLowerCase() == "1rqmi-official.github.io") {
            x = "/checkments.github.io"
        }
        location.href = location.origin + x + "/index.html"
    })