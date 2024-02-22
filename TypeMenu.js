let typeMenu = function (customElement, event, id, intervalId) {
    let type = event.target;
    customElement.className = 'custom-element';

    customElement.innerHTML = `
    <div class="in">
    <div class="menuCategory"><h1> Settings </h1> <i class="fa-solid fa-gear"></i></div>
    <h3 class="item">Type » <button class="deletion">Delete Type</button></h3>
    <div class="menuCategory"><h1> Information </h1> <i class="fa-solid fa-id-card"></i></div>
    <h3 class="item">ID » ${id}</h3>
    </div>
    `;

    openMenu = true;


    console.log(event.clientX + 300)
    customElement.style.left = event.clientX + 'px';
    customElement.style.top = event.pageY + 'px';
    if (event.clientX + 300 > document.body.offsetWidth) {
        console.log("out")
        customElement.style.left = event.clientX - (event.clientX + 300 - document.body.offsetWidth) + 'px';
    }
    let btndel = document.querySelector(".deletion")
    customElement.querySelector(".deletion").addEventListener("click", e => {
        clearType(id)
    })
    console.log(type)
}

window.onload = function () {
    if (!localStorage.getItem("name")) {
        location.href = location.origin + "/login.html"

    }
    let homebtn = document.querySelector(".m-link.home");
    homebtn.addEventListener("click", e => {
        location.href = location.origin + "/index.html";
    })

};

