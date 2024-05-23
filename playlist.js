function getExcludedElements(bigArray, keysArray) {
    const keysSet = new Set(keysArray);
    return bigArray.filter(element => !keysSet.has(element));
}

window.addEventListener("DOMContentLoaded", e => {
    let expand = document.querySelector(".sug-sel .expand.sug-list-item");
    let container = document.querySelector(".box");
    expand.addEventListener("click", ev => {

        container.classList.toggle("full");

    })


    let seemore = document.querySelector(".pl-sug-cont .playlist-cont .scroll  .expandvid")
    let urls = ["K5ldLDf_G6Q", "pdYJtRBPlTw", "qVZ1DU_ZE_4", "d3ivPRg8XfI", "htXY770KDdk", "wdG8Y-UI7Ls", "WVbB7PRTvpM"];

    seemore.addEventListener("click", ev => {
        let videos = document.querySelectorAll(".playlist-cont .column-box .video");
        let urlsCurrent = [];
        videos.forEach(el => {
            urlsCurrent.push(el.getAttribute("ID"));

        })

        let excluded = getExcludedElements(urls, urlsCurrent)
        addVideos(excluded.splice(0, 4), urls);
        seemore.classList.add("hide")
    })
    seemore.addEventListener("transitionend", x => {
        if (seemore.classList.contains("hide")) {
            setTimeout(function () {
                seemore.classList.remove("hide");
            }, 2000)

        }
    })

    let urlsR = urlRandomize(urls);

    console.log("randomized: " + Math.floor(Math.random() * urls.length))



    addVideos(urlsR, urls);


})

let addVideos = function (urlsR, urls) {
    for (let x = 0; x < urlsR.length; x++) {
        requestData(urlsR[x]).then(data => {
            console.log(data)

            let cont = document.querySelector(".playlist-cont .column-box");

            let videoEl = document.createElement("div");
            let videoTitle = document.createElement("div");
            let videoPause = document.createElement("span");
            videoPause.textContent = "◀︎";
            videoPause.classList.add("pause");
            let videoImg = document.createElement("img");
            videoImg.setAttribute("src", data.videoDetails.thumbnails[1].url);
            let videoBack = document.createElement("img");
            videoEl.appendChild(videoBack);
            videoBack.classList.add("videobc")
            let len = data.videoDetails.thumbnails.length;
            videoBack.setAttribute("src", data.videoDetails.thumbnails[len - 1].url);
            videoEl.setAttribute("ID", urlsR[x])

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
            audio.volume = localStorage.getItem("sound");

            console.log("title: " + data.videoDetails.title);
            videoTitle.textContent = data.videoDetails.title;
            videoTitle.classList.add("v-title")

            videoPair.appendChild(videoIcon)
            videoPair.appendChild(videoTitle);

            videoEl.appendChild(videoPair);
            videoEl.appendChild(videoPause)

            cont.appendChild(videoEl);
            console.log("x: " + x + " length: " + urls.length)
            console.log("BUILT????????????????????????????????")
            build(videoEl);
            console.log("BUILT????????????????????????????????")
            if ((document.querySelectorAll(".playlist-cont .scroll .column-box .video").length <= 1 && document.querySelector(".playlist-cont").classList.contains("loading"))) {
                document.querySelector(".playlist-cont").classList.remove("loading")
                console.log("HELLO therE??????????????")
            }
            if (document.querySelectorAll(".playlist-cont .column-box .video").length == urls.length) {
                document.querySelector(".playlist-cont .column-box .expandvid").classList.add("hidden")
            }
        })


    }
}

let urlRandomize = function (urls) {
    let randomizedNum = Math.floor(Math.random() * urls.length) + 1
    let poo = urls.slice(Math.floor(Math.random() * randomizedNum), randomizedNum)
    console.log("RURL = " + poo)
    return poo;
}
let changeAudio = function (volume) {
    let audios = document.querySelectorAll("audio");
    audios.forEach(v => {
        v.volume = volume;
    })
}
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
let getPause = function (element) {
    if (element.textContent == "◀︎") {
        return true;
    } else {
        return false;
    }
}
let build = function (e) {


    e.addEventListener("click", ev => {
        let video = document.querySelectorAll(".column-box .video");
        let yes = e.classList.contains("active");
        if (yes) {
            e.classList.remove("contains");
            checkPause(e.querySelector(".pause"));
            return
        }

        video.forEach(v => {
            if (v.classList.toString().includes("active")) {
                v.classList.remove("active")
                let paused = getPause(v.querySelector(".pause"))

                if (!paused) {
                    checkPause(v.querySelector(".pause"));
                }

            }
        })
        checkPause(e.querySelector(".pause"))
        e.classList.toggle("active")

    })


}


async function requestData(key) {
    const response = await fetch("https://tabby-quilled-bronze.glitch.me/info?key=" + key)
    return await response.json()
}