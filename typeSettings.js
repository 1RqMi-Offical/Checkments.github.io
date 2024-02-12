
document.addEventListener("DOMContentLoaded", e => {
    if (document.querySelector(".t-type")) {
        updateSettingsMenu()
    }
})

let updateSettingsMenu = function () {
    let settingsBtn = document.querySelectorAll(".t-type .t-title .t-schedule .t-s")
    let childrens = document.querySelectorAll(".t-type .t-title .t-schedule .t-settings-list")
    var children = document.querySelector(".t-type .t-title .t-schedule .t-settings-list");
    let cloned = children.cloneNode(true);
    document.body.appendChild(cloned);

    let style = children.computedStyleMap()
    cloned.style = style;

    cloned.style.display = "flex";
    cloned.style.flexWrap = "nowrap";
    cloned.style.width = "max-content";
    cloned.style.height = "max-content";
    cloned.querySelector(".t-s-list").style.display = "flex"
    cloned.querySelector(".t-s-list").style.fontSize = "17px"
    cloned.querySelectorAll(".t-s-list li").forEach(e => { e.style.padding = "5px" });

    cloned.style.opacity = "0";



    childrens.forEach(e => { e.style.display = 'none'; });
    childrens.forEach(e => { e.style.width = '0'; });


    var totalWidth = cloned.offsetWidth;
    // document.body.removeChild(cloned);
    childrens.forEach(e => { e.style.removeProperty('display'); });
    childrens.forEach(e => { e.style.removeProperty('width'); });

    document.body.removeChild(cloned)


    document.documentElement.style.setProperty("--s-settings-list", totalWidth + 'px')
    settingsBtn.forEach(ele => {
        ele.parentElement.classList.toggle("display")
        ele.addEventListener("click", e => {

            ele.parentElement.classList.toggle("display")
            console.log("XD")

        })

    })
    let delBtn = document.querySelectorAll(".t-type .t-settings-list .del");
    let impBtn = document.querySelectorAll(".t-type .t-settings-list .star");

    delBtn.forEach(el => {
        el.addEventListener("click", e => {
            clearType(el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute("type-name-element"))
        })
    })
    impBtn.forEach(el => {
        el.addEventListener("click", e => {
            let importants = JSON.parse(localStorage.getItem("important"));
            let type = el.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            let cont = type.querySelector(".t-cont-t")
            if (importants.includes(`${type.getAttribute("type-name-element")}`)) {
                el.classList.remove("active")
                cont.removeChild(cont.querySelector(".t-imp"))
                type.classList.remove("important")


                importants = importants.map(function (element) {
                    return "\"" + element + "\"";
                });

                var index = importants.indexOf(`"${type.getAttribute("type-name-element")}"`);

                importants.splice(index, 1);


                localStorage.setItem("important", `[${importants}]`)
            } else {
                el.classList.add("active")
                type.classList.add("important")



                let impEle = document.createElement("div")
                impEle.classList.add("t-imp")
                impEle.textContent = "Important";

                importants = importants.map(function (element) {
                    return "\"" + element + "\"";
                });

                importants.push(`"${type.getAttribute("type-name-element")}"`)
                localStorage.setItem("important", `[${importants}]`)

                cont.insertBefore(impEle, cont.firstChild);

            }
        })
    })

}