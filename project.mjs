import * as Objects from './objects.mjs'; 

export function fillInfo(projObj) {
    const title = document.createTextNode(projObj.title);
    document.getElementById("title").appendChild(title);

    const name = document.createTextNode(projObj.name);
    document.getElementById("name").appendChild(name);

    document.getElementById("photo").setAttribute('data-src', projObj.photo);
    document.getElementById("photo").alt = projObj.alt;
    document.getElementById("photo").classList.add("lazy");

    const client = document.createTextNode(projObj.client);
    document.getElementById("client").appendChild(client);

    const desc = document.createTextNode(projObj.description);
    document.getElementById("desc").appendChild(desc);

    projObj.services.forEach(function(el, i) {
        const newLi = document.createElement("li");
        newLi.className = "li";
        const li = document.getElementById("services").appendChild(newLi);
        const s = document.createTextNode(projObj.services[i]);
        li.appendChild(s);
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
        newImg.className = "project-photo lazy";
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

export function loadImages(projObj) {
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

Objects.projectArray.forEach(function() {
    if (window.location.hash === Objects.projectArray[i].hash) {
        loadImages(Objects.projectArray[i]);
        fillInfo(Objects.projectArray[i]);
        console.log(Objects.projectArray[i]);
    }
})

// if (window.location.hash === '#krgv') {
//     loadImages(Objects.krgvProject);
//     fillInfo(Objects.krgvProject);
//     console.log(Objects.krgvProject);
// }
// if (window.location.hash === '#insightec') {
//     loadImages(Objects.insightecProject);
//     fillInfo(Objects.insightecProject);
//     console.log(Objects.insightecProject);
// }
// if (window.location.hash === '#alhuura') {
//     loadImages(Objects.alhuuraProject);
//     fillInfo(Objects.alhuuraProject);
//     console.log(Objects.alhuuraProject);
// }
// if (window.location.hash === '#facade') {
//     loadImages(Objects.facadeProject);
//     fillInfo(Objects.facadeProject);
//     console.log(Objects.facadeProject);
// }
// if (window.location.hash === '#foxsoccer') {
//     loadImages(Objects.foxsocProject);
//     fillInfo(Objects.foxsocProject);
//     console.log(Objects.foxsocProject);
// }
// if (window.location.hash === '#ktbs') {
//     loadImages(Objects.ktbsProject);
//     fillInfo(Objects.ktbsProject);
//     console.log(Objects.ktbsProject);
// }
// if (window.location.hash === '#arvr') {
//     loadImages(Objects.arvrProject);
//     fillInfo(Objects.arvrProject);
//     console.log(Objects.arvrProject);
// }
// if (window.location.hash === '#fox') {
//     loadImages(Objects.foxProject);
//     fillInfo(Objects.foxProject);
//     console.log(Objects.foxProject);
// }
// if (window.location.hash === '#al_watan') {
//     loadImages(Objects.alWatanProject);
//     fillInfo(Objects.alWatanProject);
//     console.log(Objects.alWatanProject);
// }
// if (window.location.hash === '#somos_noticias') {
//     loadImages(Objects.snProject);
//     fillInfo(Objects.snProject);
//     console.log(Objects.snProject);
// }
// if (window.location.hash === '#trt') {
//     loadImages(Objects.trtProject);
//     fillInfo(Objects.trtProject);
//     console.log(Objects.trtProject);
// }
// if (window.location.hash === '#regis_and_kelly') {
//     loadImages(Objects.rkProject);
//     fillInfo(Objects.rkProject);
//     console.log(Objects.rkProject);
// }
// if (window.location.hash === '#aj_election') {
//     loadImages(Objects.aJElectionProject);
//     fillInfo(Objects.aJElectionProject);
//     console.log(Objects.aJElectionProject)
// } 
// if (window.location.hash === '#sep') {
//     loadImages(Objects.sepProject);
//     fillInfo(Objects.sepProject);
//     console.log(Objects.sepProject);
// } 
// if (window.location.hash === '#wfmj') {
//     loadImages(Objects.wfmjProject);
//     fillInfo(Objects.wfmjProject);
//     console.log(Objects.wfmjProject);
// } 
// if (window.location.hash === '#foxboxing') {
//     loadImages(Objects.foxboxProject);
//     fillInfo(Objects.foxboxProject);
//     console.log(Objects.foxboxProject);
// }
// if (window.location.hash === '#wls') {
//     loadImages(Objects.wlsProject);
//     fillInfo(Objects.wlsProject);
//     console.log(Objects.wlsProject);
// }
// if (window.location.hash === '#pac12') {
//     loadImages(Objects.pac12Project);
//     fillInfo(Objects.pac12Project);
//     console.log(Objects.pac12Project);
// }
// if (window.location.hash === '#kxan') {
//     loadImages(Objects.kxanProject);
//     fillInfo(Objects.kxanProject);
//     console.log(Objects.kxanProject);
// }
// if (window.location.hash === '#ap') {
//     loadImages(Objects.apProject);
//     fillInfo(Objects.apProject);
//     console.log(Objects.apProject);
// }
// if (window.location.hash === '#sp') {
//     loadImages(Objects.spProject);
//     fillInfo(Objects.spProject);
//     console.log(Objects.spProject);
// }
// if (window.location.hash === '#byu') {
//     loadImages(Objects.buyProject);
//     fillInfo(Objects.buyProject);
//     console.log(Objects.buyProject);
// }
// if (window.location.hash === '#bon') {
//     loadImages(Objects.bonProject);
//     fillInfo(Objects.bonProject);
//     console.log(Objects.bonProject);
// }
// if (window.location.hash === '#univision_sports') {
//     loadImages(Objects.usProject);
//     fillInfo(Objects.usProject);
//     console.log(Objects.usProject);
// }
// if (window.location.hash === '#univision_news') {
//     loadImages(Objects.unProject);
//     fillInfo(Objects.unProject);
//     console.log(Objects.unProject);
// }
// if (window.location.hash === '#more_health') {
//     loadImages(Objects.mhProject);
//     fillInfo(Objects.mhProject);
//     console.log(Objects.mhProject);
// }
// if (window.location.hash === '#nfl') {
//     loadImages(Objects.nflProject);
//     fillInfo(Objects.nflProject);
//     console.log(Objects.nflProject);
// }
// if (window.location.hash === '#al_arab') {
//     loadImages(Objects.alArabProject);
//     fillInfo(Objects.alArabProject);
//     console.log(Objects.alArabProject);
// }
// if (window.location.hash === '#the_price_is_right') {
//     loadImages(Objects.tpirProject);
//     fillInfo(Objects.tpirProject);
//     console.log(Objects.tpirProject);
// }
// if (window.location.hash === '#orlando_city_soccer') {
//     loadImages(Objects.ocsProject);
//     fillInfo(Objects.ocsProject);
//     console.log(Objects.ocsProject);
// } 
// if (window.location.hash === '#at') {
//     loadImages(Objects.atProject);
//     fillInfo(Objects.atProject);
//     console.log(Objects.atProject);
// } 
// if (window.location.hash === '#experimental') {
//     loadImages(Objects.expProject);
//     fillInfo(Objects.expProject);
//     console.log(Objects.expProject);
// } 