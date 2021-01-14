import * as Objects from './objects.mjs'; 

function fillHomeProjects(objArr) {
    function makeEl(resolve, reject) {
        if (document.getElementById("homeProjectGrid")) {
            console.log(Objects.aJElectionProject);
            objArr.forEach(function(el, i) {
                const newDiv = document.createElement("div");
                const newImg = document.createElement("img");
                const newA = document.createElement("a");
                const newDiv2 = document.createElement("div");
                const newH2 = document.createElement("h2");
                const newTitle = document.createTextNode(objArr[i].title + " " + objArr[i].name);

                newDiv.className = "project project-column-2";

                newImg.className = "project-photo lazy";
                newImg.setAttribute('data-src', objArr[i].photo)
                newImg.alt = objArr[i].alt;

                newA.className = "proj-a";
                newA.href = objArr[i].href;

                newDiv2.className = "project-title-box";

                newH2.className = "project-title";

                const div = document.getElementById("homeProjectGrid").appendChild(newDiv);
                div.appendChild(newImg);
                const a = div.appendChild(newA);
                const div2 = a.appendChild(newDiv2);
                const h2 = div2.appendChild(newH2);
                h2.appendChild(newTitle);
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








function createProjectList() {
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
        newA.href = projectArray[i].href;
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

function fillInfo(projObj) {
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

function imgLoops(projObj) {
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
                newA.href = secretProjects[i].href;
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
