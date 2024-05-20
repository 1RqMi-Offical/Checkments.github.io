
document.addEventListener("DOMContentLoaded", e => {
    setTimeout(function () {
        if (!localStorage.getItem("udate")) {
            localStorage.setItem("udate", "2024/28/2")
            popup("We've added [Suggestions] section check it out", `Welcome Back ${localStorage.getItem("name").toUpperCase()} To Checkments!`, "one", `Update Date | ${localStorage.getItem("udate")}`)

        }

    }, 100)

    var video = document.querySelector("video");
    video.volume = 0;

    function playVideo() {
        video.play();

        // Remove event listener to prevent multiple plays
        document.removeEventListener("click", playVideo);
        document.removeEventListener("keydown", playVideo);
    }

    // Listen for any interaction events (click or key press)
    document.addEventListener("click", playVideo);
    document.addEventListener("keydown", playVideo);

})



let updateSettingsMenu = function (id) {
    console.log("------------------ ID : " + id + " ---------")
    let Type = document.querySelector(`.t-type[type-name-element="${id}"]`)
    let settingsBtn = Type.querySelector(".t-title .t-schedule .t-s")
    let cloned = settingsBtn.parentElement.firstElementChild.cloneNode(true);
    console.log(cloned)
    document.body.appendChild(cloned);


    cloned.style.display = "flex";
    cloned.style.flexWrap = "nowrap";
    cloned.style.width = "max-content";
    cloned.style.height = "max-content";
    cloned.querySelector(".t-s-list").style.display = "flex"
    cloned.querySelector(".t-s-list").style.fontSize = "17px"
    cloned.querySelectorAll(".t-s-list li").forEach(e => { e.style.padding = "5px" });

    cloned.style.opacity = "0";



    let width = cloned.offsetWidth;


    Type.style.setProperty("--s-settings-list", width + 'px')

    document.body.removeChild(cloned)
    settingsBtn.parentElement.classList.add("display")
    settingsBtn.addEventListener("click", e => {

        settingsBtn.parentElement.classList.toggle("display")
        console.log("XD")

    })



    let delBtn = Type.querySelector(".t-settings-list .del");
    let impBtn = Type.querySelector(".t-settings-list .star");


    delBtn.addEventListener("click", e => {
        clearType(id)
        console.log(id)
    })

    impBtn.addEventListener("click", e => {
        let importants = JSON.parse(localStorage.getItem("important"));
        let cont = Type.querySelector(".t-cont-t")
        if (importants.includes(`${Type.getAttribute("type-name-element")}`)) {
            impBtn.classList.remove("active")
            cont.removeChild(cont.querySelector(".t-imp"))
            Type.classList.remove("important")


            importants = importants.map(function (element) {
                return "\"" + element + "\"";
            });

            var index = importants.indexOf(`"${Type.getAttribute("type-name-element")}"`);

            importants.splice(index, 1);


            localStorage.setItem("important", `[${importants}]`)
        } else {
            impBtn.classList.add("active")
            Type.classList.add("important")



            let impEle = document.createElement("div")
            impEle.classList.add("t-imp")
            impEle.textContent = "Important";

            importants = importants.map(function (element) {
                return "\"" + element + "\"";
            });

            importants.push(`"${Type.getAttribute("type-name-element")}"`)
            localStorage.setItem("important", `[${importants}]`)

            cont.insertBefore(impEle, cont.firstChild);

        }
    })

}