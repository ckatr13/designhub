import * as Objects from './objects.mjs'; 
import {fillInfo, imgLoops} from './project.mjs';

const secretProjects = Objects.secretProjects;

function fillSecretInfo(projObj, projObj2) {
    fillInfo(projObj);
    const title2 = document.createTextNode(projObj2.title);
    document.getElementById("title2").appendChild(title2);
    const name2 = document.createTextNode(projObj2.name);
    document.getElementById("name2").appendChild(name2);
    document.getElementById("photo-2").setAttribute('data-src', projObj2.photo);
    document.getElementById("photo-2").alt = projObj2.alt;
    const client2 = document.createTextNode(projObj2.client);
    document.getElementById("client2").appendChild(client2);
    const desc2 = document.createTextNode(projObj2.description);
    document.getElementById("desc2").appendChild(desc2);
    projObj2.services.forEach(function(el, i) {
        const newLi = document.createElement("li");
        newLi.className = "li";
        const li = document.getElementById("services2").appendChild(newLi);
        const s = document.createTextNode(projObj2.services[i]);
        li.appendChild(s);
    });
}

function loadSecretImages(projObj, projObj2) {
    function makeEl(resolve, reject) {
        if(document.getElementById("overviewGrid")) {

            imgLoops(projObj);

            secretProjects.forEach(function(el, i) {
                const newDiv = document.createElement("div");
                const newImg = document.createElement("img");
                const newA = document.createElement("a");
                const newDiv2 = document.createElement("div");
                const newH2 = document.createElement("h2");
                const title = document.createTextNode(secretProjects[i].title + " " + secretProjects[i].name);
            
                newDiv.className = "project toggle-switch";
                newDiv.setAttribute('onclick', "toggleProject()");
                newImg.className = "project-p lazy";
                newImg.setAttribute('data-src', secretProjects[i].photo);
                newImg.Alt = secretProjects[i].alt;
                newA.className = "proj-a";
                newA.href = secretProjects[i].hash;
                newDiv2.className = "project-title-box";
                newH2.className = "project-title";
            
                const div = document.getElementById("member-portfolio").appendChild(newDiv);
                div.appendChild(newImg);
                const a = div.appendChild(newA);
                const div2 = a.appendChild(newDiv2);
                const h2 = div2.appendChild(newH2);
                h2.appendChild(title);
            });
        
            projObj2.imgArr.forEach(function(el, i) {
                const newImg = document.createElement("img");
                const newDiv = document.createElement("div");
                const newA = document.createElement("a");
                const newDiv2 = document.createElement("div");

                newDiv.className = "project project-detail";

                newImg.setAttribute('data-src', projObj2.imgArr[i]);
                newImg.className = "project-photo lazy";
                newImg.alt = projObj2.alt;

                newA.className = "proj-a";
                newA.href = "#photo" + (i + 88);

                newDiv2.className = "project-title-box gray";

                let div = document.getElementById("overviewGrid2").appendChild(newDiv);
                div.appendChild(newImg);
                let a = div.appendChild(newA);
                a.appendChild(newDiv2);
            });

            projObj2.videoArr.forEach(function(el, i) {
                const newDiv = document.createElement("div");
                const newVideo = document.createElement("video");
                const newSource = document.createElement("source");

                newDiv.className = "project project-detail2";

                newVideo.controls = true;

                newSource.src = projObj2.videoArr[i];
                newSource.type = "video/mp4";

                let div = document.getElementById("photoGallery2").appendChild(newDiv);
                let video = div.appendChild(newVideo);
                video.appendChild(newSource);
            })

            projObj2.imgArr.forEach(function(el, i) {
                const newDiv = document.createElement("div");
                const newImg = document.createElement("img");

                newDiv.className = "project project-detail2";
                newDiv.id = "photo" + (i + 88);

                newImg.setAttribute('data-src', projObj2.imgArr[i]);
                newImg.className = "project-photo2 lazy";
                newImg.alt = projObj.alt;

                let div = document.getElementById("photoGallery2").appendChild(newDiv);
                div.appendChild(newImg);
            })
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
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("photo").style.height = window.innerWidth / 1.77777778 + "px";
            document.getElementById("photo-2").style.height = window.innerWidth / 1.77777778 + "px";
        });
        window.onresize = function () {
            setHeight();
            document.getElementById("photo").style.height = window.innerWidth / 1.77777778 + "px";
            document.getElementById("photo-2").style.height = window.innerWidth / 1.77777778 + "px";
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
};

fillSecretInfo(Objects.bloombergProject, Objects.aljazeeraProject);
loadSecretImages(Objects.bloombergProject, Objects.aljazeeraProject);