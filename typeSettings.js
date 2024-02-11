
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
}