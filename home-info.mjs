import * as Objects from './objects.mjs'; 
import yall from './node_modules/yall-js/dist/yall.min.mjs';

function fillHomeProjects(objArr) {
    function makeEl(resolve, reject) {
        if (document.getElementById("homeProjectGrid")) {
            objArr.forEach(function(el, i) {
                const newDiv = document.createElement("div");
                const newImg = document.createElement("img");
                const newA = document.createElement("a");
                const newDiv2 = document.createElement("div");
                const newH2 = document.createElement("h2");
                const newH22 = document.createElement("h2");
                const newTitle = document.createTextNode(objArr[i].title);
                const newTitle2 = document.createTextNode(objArr[i].name);

                newDiv.className = "project project-column-2";

                newImg.className = "project-photo lazy";
                newImg.setAttribute('data-src', objArr[i].photo)
                newImg.alt = objArr[i].alt;

                newA.className = "proj-a";
                newA.href = "project" + objArr[i].hash;

                newDiv2.className = "project-title-box";

                newH2.className = "project-title";
                newH22.className = "project-title";

                const div = document.getElementById("homeProjectGrid").appendChild(newDiv);
                div.appendChild(newImg);
                const a = div.appendChild(newA);
                const div2 = a.appendChild(newDiv2);
                const h2 = div2.appendChild(newH2);
                const h22 = div2.appendChild(newH22);
                h2.appendChild(newTitle);
                h22.appendChild(newTitle2);
            })
            resolve();
        } else {
            reject("Something Went Wrong");
        }
    }
    const makeImg = () => {
        return new Promise(makeEl)
      };
    
    makeImg().then(function() {
        document.addEventListener("DOMContentLoaded", setHeight3);
        window.onresize = function () {
          setHeight3();
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

const homepageProjectDisplay = [Objects.aJElectionProject, Objects.alhuuraProject, Objects.insightecProject, Objects.foxsocProject, 
    Objects.ktbsProject, Objects.foxProject, Objects.alWatanProject, Objects.snProject];

fillHomeProjects(homepageProjectDisplay);