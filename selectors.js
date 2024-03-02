
let setUpSelector = function (container) {

    let selector = document.querySelector(`.${container}.selector`);
    let placeholder = document.querySelector(`.${container}.selector .placeholder`);
    let optionCont = document.querySelector(`.${container}.selector .option-cont`);
    let options = document.querySelectorAll(`.${container}.selector .option-cont .option`);

    if (!placeholder) {
        return
    }


    let animateUnit = function (element, ele) {
        console.log(element.textContent.toString().replaceAll(" ", "").replaceAll(/\n/g, ""))
        let eleText = element.textContent.toString().replaceAll(" ", "").replaceAll(/\n/g, "").split("");
        ele.textContent = "";
        let c = 0;
        eleText.forEach(char => {
            c++;

            setTimeout(function () {
                ele.innerHTML = ele.innerHTML.replace(`<span style="color: gray; transition: 0.3s; padding: 5px;">`, "")
                ele.innerHTML = ele.innerHTML.replace(`</span>`, "")
                ele.innerHTML = ele.innerHTML + `<span style="color: gray; transition: 0.3s; padding: 5px;">${char}</span>`;


                if (ele.textContent.length == eleText.length) {
                    ele.innerHTML = ele.innerHTML.replace(`<span style="color: gray; transition: 0.3s; padding: 5px;">`, "")
                    ele.innerHTML = ele.innerHTML.replace(`</span>`, "")
                }


            }, c * 70);


        })
    }
    options.forEach((element) => {

        element.addEventListener("click", e => {

            if ((element.textContent.includes(placeholder.textContent))) {
                if ((!element.querySelector("input"))) {
                    return
                }

            }
            options.forEach(e => { e.classList.remove("active") })
            element.classList.add("active");
            placeholder.setAttribute("unit", element.getAttribute("unit"))
            optionCont.style.display = "none";
            if (element.querySelector("input")) {

                let inpt = element.querySelector("input");
                element.setAttribute("link", inpt.value.toString());
                placeholder.setAttribute("link", inpt.value.toString());
                if ((element.textContent.includes(placeholder.textContent))) {
                    return
                }
            }


            animateUnit(element, placeholder)





        })

    })
    if (!placeholder) {
        return
    }
    placeholder.addEventListener("click", e => {


        for (let x = 0; x < options.length; x++) {
            options[x].classList.remove("active")
            if (placeholder.textContent.toString().replaceAll(" ", "").replaceAll(/\n/g, "") == options[x].textContent.toString().replaceAll(" ", "").replaceAll(/\n/g, "")) {
                if (x >= options.length - 1) x = -1;
                animateUnit(options[x + 1], placeholder)
                placeholder.setAttribute("unit", options[x + 1].getAttribute("unit"))
                options[x + 1].classList.add("active")
                return
            }

        }


    });

    optionCont.style.display = "block";

    setTimeout(function () {
        selector.style.width = optionCont.getBoundingClientRect().width + "px";

        optionCont.style.display = "none";
    }, 100)


}
window.addEventListener("DOMContentLoaded", e => {
    setUpSelector("unit")
    setUpSelector("bground")
    setUpSelector("typeBoxes")
    setUpSelector("type")
})