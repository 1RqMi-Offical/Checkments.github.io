window.addEventListener("DOMContentLoaded", e => {





    let nVideo = 5;

    let urls = ["rEdXTgXdlwM", "l8kdWzs09K8"];

    for (let x = 0; x < urls.length; x++) {
        requestData(urls[x]).then(data => {
            console.log(data)

            let cont = document.querySelector(".playlist-cont .column-box");

            let videoEl = document.createElement("div");
            let videoTitle = document.createElement("div");
            let videoPause = document.createElement("span");
            videoPause.textContent = "◀︎";
            videoPause.classList.add("pause");
            let videoImg = document.createElement("img");
            videoImg.setAttribute("src", data.videoDetails.thumbnails[4].url);
            let videoBack = document.createElement("img");
            videoEl.appendChild(videoBack);
            videoBack.classList.add("videobc")
            videoBack.setAttribute("src", data.videoDetails.thumbnails[4].url);


            let videoIcon = document.createElement("div");
            videoIcon.classList.add("icon")
            videoIcon.appendChild(videoImg);

            let videoPair = document.createElement("div");
            videoPair.classList.add("pair")
            videoEl.classList.add("video")

            let audio = document.createElement("audio");
            audio.setAttribute("controls", true);
            audio.innerHTML = `<source src="${"https://tabby-quilled-bronze.glitch.me/?key=" + urls[x]}" type="audio/mpeg">`
            audio.classList.add("vaudio")
            videoEl.appendChild(audio);

            console.log("title: " + data.videoDetails.title);
            videoTitle.textContent = data.videoDetails.title;
            videoTitle.classList.add("v-title")

            videoPair.appendChild(videoIcon)
            videoPair.appendChild(videoTitle);

            videoEl.appendChild(videoPair);
            videoEl.appendChild(videoPause)

            cont.appendChild(videoEl);
            if (x >= urls.length - 1) {
                build();
                console.log("YES")
            }

        })

    }





})

let checkPause = function (element) {
    let audio = element.parentElement.querySelector("audio")
    if (element.textContent == "◀︎") {
        element.textContent = "❙❙"
        audio.play();
    } else {
        element.textContent = "◀︎"
        audio.pause();
    }
}
let build = function () {
    let expand = document.querySelector(".sug-sel .expand.sug-list-item");
    let container = document.querySelector(".box");
    let video = document.querySelectorAll(".column-box .video");
    video.forEach(e => {
        e.addEventListener("click", ev => {
            let yes = e.classList.contains("active");
            if (yes) {
                e.classList.remove("contains");
                checkPause(e.querySelector(".pause"));
                return
            }
            video.forEach(v => {
                if (v.classList.toString().includes("active")) {
                    v.classList.remove("active")

                    checkPause(v.querySelector(".pause"));

                }
            })
            checkPause(e.querySelector(".pause"))
            e.classList.toggle("active")

        })
    })
    let pause = document.querySelectorAll(".column-box .video .pause");

    expand.addEventListener("click", ev => {

        container.classList.toggle("full");

    })
}


async function requestData(key) {
    const response = await fetch("https://tabby-quilled-bronze.glitch.me/info?key=" + key)
    return await response.json()
}