
let setUpSelector = function (container) {

    let placeholder = document.querySelector(`.${container}.selector .placeholder`);
    let optionCont = document.querySelector(`.${container}.selector .option-cont`);
    let options = document.querySelectorAll(`.${container}.selector .option-cont .option`);

    let animateUnit = function (element, ele) {

        let eleText = element.textContent.split("");
        ele.textContent = "";
        eleText.forEach(char => {
            setTimeout(function () {
                ele.innerHTML = ele.innerHTML.replace(`<span style="color: gray; transition: 0.3s; padding: 5px;">`, "")
                ele.innerHTML = ele.innerHTML.replace(`</span>`, "")
                ele.innerHTML = ele.innerHTML + `<span style="color: gray; transition: 0.3s; padding: 5px;">${char}</span>`;

                if (eleText.indexOf(char) == eleText.length - 1) {
                    ele.innerHTML = ele.innerHTML.replace(`<span style="color: gray; transition: 0.3s; padding: 5px;">`, "")
                    ele.innerHTML = ele.innerHTML.replace(`</span>`, "")

                }
            }, eleText.indexOf(char) * 70);


        })
    }
    options.forEach((element) => {

        element.addEventListener("click", e => {

            animateUnit(element, placeholder)

            placeholder.setAttribute("unit", element.getAttribute("unit"))
            optionCont.style.display = "none";

        })

    })
    placeholder.addEventListener("click", e => {

        for (let x = 0; x < options.length; x++) {
            options[x].classList.remove("active")
            if (placeholder.textContent == options[x].textContent) {
                if (x == options.length - 1) x = -1;
                animateUnit(options[x + 1], placeholder)
                placeholder.setAttribute("unit", options[x + 1].getAttribute("unit"))
                return
            }

        }
        console.log("Yez")

    });
}

setUpSelector("unit")
setUpSelector("typeBoxes")