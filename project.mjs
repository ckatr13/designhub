import * as Objects from './objects.mjs'; 
import yall from './node_modules/yall-js/dist/yall.min.mjs';

export function fillInfo(projObj) {
    const title = document.createTextNode(projObj.title);
    document.getElementById("title").appendChild(title);

    const name = document.createTextNode(projObj.name);
    document.getElementById("name").appendChild(name);

    // document.getElementById("photo").setAttribute('data-src', projObj.photo);
    // document.getElementById("photo").alt = projObj.alt;
    // document.getElementById("photo").classList.add("lazy");

    const client = document.createTextNode(projObj.client);
    document.getElementById("client").appendChild(client);

    const desc = document.createTextNode(projObj.description);
    document.getElementById("desc").appendChild(desc);

    projObj.services.forEach(function(el, i) {
        const newLi = document.createElement("li");
        newLi.className = "li client";
        const li = document.getElementById("services").appendChild(newLi);
        const s = document.createTextNode(projObj.services[i] + "\xa0" + "/" + "\xa0");
        const lastS = document.createTextNode(projObj.services[i]);
        if(projObj.services.indexOf(el) < projObj.services.length - 1) {
            li.appendChild(s);
        } else {
            li.appendChild(lastS);
        }
    })
}

export function imgLoops(projObj) {
    projObj.imgArr.forEach(function(el, i) {
        const newImg = document.createElement("img");
        const newDiv = document.createElement("div");
        const newA = document.createElement("a");
        const newDiv2 = document.createElement("div");

        newDiv.className = "project project-detail";

        newImg.setAttribute('data-src', projObj.imgArr[i]);
        newImg.className = "lightbox-photo lazy";
        newImg.alt = projObj.alt;

        newA.className = "proj-a";
        newA.href = "#photo" + (i + 1);

        newDiv2.className = "project-title-box gray";

        let div = document.getElementById("overviewGrid").appendChild(newDiv);
        div.appendChild(newImg);
        let a = div.appendChild(newA);
        a.appendChild(newDiv2);
    });

    projObj.videoArr.forEach(function(el, i) {
        const newDiv = document.createElement("div");
        const newVideo = document.createElement("video");
        const newSource = document.createElement("source");

        newDiv.className = "project project-detail2";

        newVideo.controls = true;

        newSource.src = projObj.videoArr[i];
        newSource.type = "video/mp4";

        let div = document.getElementById("photoGallery").appendChild(newDiv);
        let video = div.appendChild(newVideo);
        video.appendChild(newSource);
    })

    projObj.imgArr.forEach(function(el, i) {
        const newDiv = document.createElement("div");
        const newImg = document.createElement("img");

        newDiv.className = "project project-detail2";
        newDiv.id = "photo" + (i + 1);

        newImg.setAttribute('data-src', projObj.imgArr[i]);
        newImg.className = "project-photo2 lazy";
        newImg.alt = projObj.alt;

        let div = document.getElementById("photoGallery").appendChild(newDiv);
        div.appendChild(newImg);
    })
}

function loadImages(projObj) {
    function makeEl(resolve, reject) {
        if(document.getElementById("overviewGrid")) {
            imgLoops(projObj);
            resolve();
        } else {
            reject("Something Went Wrong")
        }
    }

    const makeImg = () => {
        return new Promise(makeEl)
      };
    
    makeImg().then(function() {
        console.log("working");
        document.addEventListener("DOMContentLoaded", setHeight);
        window.onresize = function () {
          setHeight();
        };
        document.addEventListener("DOMContentLoaded", function () {
            yall({
                events: {
                    load: function (event) {
                        if(!event.target.classList.contains("hide2")) {
                        event.target.style.opacity = "1";
                        }
                    }
                }
            });
        });
    }).catch(function(rejectionReason) {
        console.log(rejectionReason);
    })
}

Objects.projectArray.forEach(function(el, i) {
    if (window.location.hash === Objects.projectArray[i].hash) {
        loadImages(Objects.projectArray[i]);
        fillInfo(Objects.projectArray[i]);
        console.log(Objects.projectArray[i]);
    }
});

// loadImages(Objects.projectArray[12]);
// fillInfo(Objects.projectArray[12]);
// console.log(Objects.projectArray[12]);