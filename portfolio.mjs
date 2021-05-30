import * as Objects from './objects.mjs';
import * as Project from './project.mjs';
import yall from './node_modules/yall-js/dist/yall.min.mjs';

function createProjectList() {
    const projectArray = Objects.projectArray;
    function group(i, category) {
        const newDiv = document.createElement("div");
        const newImg = document.createElement("img");
        const newA = document.createElement("a");
        const newDiv2 = document.createElement("div2");
        const newH4 = document.createElement("h4");
        const secondNewH4 = document.createElement("h4");
        const h4Text = document.createTextNode(projectArray[i].title);
        // const h4Text2 = document.createTextNode(projectArray[i].name);

        newDiv.className = "project";
        newImg.className = "project-photo lazy"
        newImg.setAttribute('data-src', projectArray[i].photo);
        newImg.alt = projectArray[i].alt;
        newA.className = "proj-a";
        newA.href = projectArray[i].hash;
        newDiv2.id = "project" + i;
        newDiv2.className = "project-title-box";
        newH4.className = "project-title";
        newH4.id = "H" + i;

        const div = document.getElementById(category).appendChild(newDiv);
        div.appendChild(newImg);
        const a = div.appendChild(newA);
        const div2 = a.appendChild(newDiv2);
        const h4 = div2.appendChild(newH4);
        h4.appendChild(h4Text);
    }

    function makeEl(resolve, reject) {
        if(projectArray) {
            projectArray.forEach(function(el, i) {
                group(i, "all-projects");
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("news")) {
                    group(i, "news");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("election")) {
                    group(i, "election");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("entertainment")) {
                    group(i, "entertainment");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("corporate")) {
                    group(i, "corporate");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("branding")) {
                    group(i, "branding");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("non-profit")) {
                    group(i, "non-profit");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("sports")) {
                    group(i, "sports");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("photography")) {
                    group(i, "photography");
                }
            });
            projectArray.forEach(function(el, i) {
                if (projectArray[i].category.includes("ar-vr")) {
                    group(i, "ar-vr");
                }
            }); 
            resolve();
        } else {
            reject("Something Went Wrong");
        }
    }

    const makeImg = () => {
        return new Promise(makeEl)
      };
    
    makeImg().then(function() {
        const projects = document.getElementsByClassName("project-title-box");
        const projA = document.getElementsByClassName("proj-a");
        const lightbox = document.getElementById("project-lightbox-container");
        console.log(projects[0]);
        for(let i = 0; i < projA.length; i++) { 
            projA[i].addEventListener('click', function() {
                lightbox.style.display = "block";
                console.log("event added");
                console.log(event.target.id);
                for(let j = 0; j < projects.length; j++) {
                    if(event.target.id === "project" + j || event.target.id === "H" + j) {
                        console.log("condition worked");
                        Project.loadImages(Objects.projectArray[j]);
                        Project.fillInfo(Objects.projectArray[j]);
                        console.log(Objects.projectArray[j]);
                    }
                }
            })
        }}).then(function() {
            document.addEventListener("DOMContentLoaded", setHeight2);
            window.onresize = function () {
            setHeight2();
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

createProjectList();