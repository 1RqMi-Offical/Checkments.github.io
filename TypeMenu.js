let typeMenu = function (customElement) {

    customElement.className = 'custom-element';

    customElement.innerHTML = `
    <div class="in">
    <div class="menuCategory"><h1> Settings </h1> <i class="fa-solid fa-gear"></i></div>
    <button class="deletion">Delete Type</button>
    </div>
    `;

    openMenu = true;


    customElement.style.left = event.clientX + 'px';
    customElement.style.top = event.pageY + 'px';

    let btndel = document.querySelector(".deletion")
    let type = event.target.parent;
    console.log(type)
}