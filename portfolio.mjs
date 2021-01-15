import * as Objects from './objects.mjs';

function createProjectList() {
    const projectArray = Objects.projectArray;
    function group(i, category) {
        const newDiv = document.createElement("div");
        const newImg = document.createElement("img");
        const newA = document.createElement("a");
        const newDiv2 = document.createElement("div2");
        const newH4 = document.createElement("h4");
        const h4Text = document.createTextNode(projectArray[i].title + " " + projectArray[i].name);

        newDiv.className = "project";
        newImg.className = "project-photo lazy"
        newImg.setAttribute('data-src', projectArray[i].photo);
        newImg.alt = projectArray[i].alt;
        newA.className = "proj-a";
        newA.href = "project" + projectArray[i].hash;
        newDiv2.className = "project-title-box";
        newH4.className = "project-title";

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