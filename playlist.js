function getExcludedElements(bigArray, keysArray) {
    const keysSet = new Set(keysArray);
    return bigArray.filter(element => !keysSet.has(element));
}
function arrayContainsArray(array1, array2) {
    console.log(array1)
    console.log(array2)
    return array2.every(element => array1.includes(element));

}
let currAdded = [];
window.addEventListener("DOMContentLoaded", e => {
    let expand = document.querySelector(".sug-sel .expand.sug-list-item");
    let container = document.querySelector(".box");
    expand.addEventListener("click", ev => {

        container.classList.toggle("full");

    })


    let seemore = document.querySelector(".pl-sug-cont .playlist-cont .scroll  .expandvid")
    let urls = ["K5ldLDf_G6Q", "pdYJtRBPlTw", "qVZ1DU_ZE_4", "aVP4fbI0UzY", "bPG7tV8doxA", "Rkd2atLhJkA", "9ZsxyrhpBw0", "sBaW1bDwVvU", "d3ivPRg8XfI", "htXY770KDdk", "wdG8Y-UI7Ls", "WVbB7PRTvpM"];
    seemore.addEventListener("click", ev => {
        let videos = document.querySelectorAll(".playlist-cont .column-box .video");
        let urlsCurrent = [];
        videos.forEach(el => {
            urlsCurrent.push(el.getAttribute("ID"));

        })

        let excluded = getExcludedElements(urls, urlsCurrent)
        let excludedv2 = excluded.splice(0, 4)
        currAdded = excludedv2;
        addVideos(excludedv2, urls);
        seemore.classList.add("hide")

    })
    seemore.addEventListener("transitionend", x => {
        if (seemore.classList.contains("hide")) {
            let showUntilend = setInterval(function () {
                let arr = [];
                document.querySelectorAll(".playlist-cont .column-box .video").forEach(e => {
                    arr.push(e.getAttribute("ID"))
                });

                if (arrayContainsArray(arr, currAdded)) {
                    seemore.classList.remove("hide");
                    clearInterval(showUntilend)
                }
            }, 1000)

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
            audio.innerHTML = `<source src="${"https://tabby-quilled-bronze.glitch.me/?key=" + urlsR[x]}" type="audio/mpeg">`
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
            build(videoEl);

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
    let randomizedNum = Math.floor(Math.random() * urls.length);
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
    let wave;
    let video = element.parentElement;
    if (!video.querySelector(".wave")) {
        wave = document.createElement("div")
        wave.classList.add("wave");
        for (let x = 0; x < 25; x++) {
            let waveSpan = document.createElement("span");
            wave.appendChild(waveSpan);
        }
        video.appendChild(wave);
        console.log(element)
        console.log("Done")
    } else {
        wave = video.querySelector(".wave")
    }
    let audio = element.parentElement.querySelector("audio")
    if (element.textContent == "◀︎") {
        element.textContent = "❙❙"
        wave.classList.remove("psd")
        audio.play();
    } else {
        element.textContent = "◀︎"
        wave.classList.add("psd")
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
                if (v != e) {
                    if (v.querySelector(".wave"))
                        v.removeChild(v.querySelector(".wave"));
                }

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