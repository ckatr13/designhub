
// HOMEPAGE SLIDER

function slide(items) {
  var posInitial = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;

    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);

    function shiftSlide(dir, action) {
        items.classList.add('shifting');
        
        if (allowShift) {
          if (!action) { posInitial = items.offsetLeft; }
    
          if (dir == 1) {
            items.style.left = (posInitial - slideSize) + "px";
            index++;      
          } else if (dir == -1) {
            items.style.left = (posInitial + slideSize) + "px";
            index--;      
          }
        };
        posInitial = items.offsetLeft;
        allowShift = false;
      }

      function checkIndex (){
        items.classList.remove('shifting');
    
        if (index == -1) {
          items.style.left = -(slidesLength * slideSize) + "px";
          index = slidesLength - 1;
        }
    
        if (index == slidesLength) {
          items.style.left = -(1 * slideSize) + "px";
          index = 0;
        }
        
        allowShift = true;
      }

      items.addEventListener('transitionend', checkIndex);

      function start() {
        setInterval(function () { shiftSlide(1)}, 5000);
        let windowWidth = window.innerWidth; 
        window.onresize = function () {
          if (window.innerWidth != windowWidth) {
            windowWidth = window.innerWidth;
            location.reload()
          }
        }
      };

      window.addEventListener('load', start);
    }

// TOGGLE PROJECT ON MEMEBER PAGE 

function toggleProject() {
  const toggleSwitch = document.getElementsByClassName("toggle-switch");
  const projects = document.getElementsByClassName("toggle-projects");

  for (i=0; i < toggleSwitch.length; i++) {
    if (toggleSwitch[i] == window.event.target.closest(".toggle-switch")) {
      projects[i].classList.remove("hide");
    } else {
      projects[i].classList.add("hide");
    }
  }
}

// VALIDATE PASSWORD

function validate(){
    var password = document.getElementById("password").value;
    if (password == "snow") {
        document.getElementById("member-portfolio").classList.remove("hide");
        document.getElementById("login").style.display = "none";
        return false;
  } else {
        alert("The password you entered was incorrect");
        return false;
    }
}

// TOGGLE MENU BAR

function toggleMenu() {
  if (document.getElementById("hamburger-button").style.display == "block") {
    document.getElementById("hamburger-button").style.display = "none";
    document.getElementById("wipe").style.transform = "translateX(0)";

    setTimeout(function () {
      document.getElementById("mobile-menu").style.transform = "translateX(0)";
    }, 250);

    setTimeout(function () {
      document.querySelectorAll('.mobile-link').forEach(function(element, i) {
        setTimeout(function() {
            element.style.opacity = "1";
        }, i * 125)
      });
    }, 500);
  } 
  else {
    document.getElementById("hamburger-button").style.display = "block";
    document.getElementById("mobile-menu").style.transform = "translateX(100%)"
  
    document.querySelectorAll('.mobile-link').forEach(function(element, i) {
      element.style.opacity = "0";
    });
  
    setTimeout(function () {
      document.getElementById("wipe").style.transform = "translateX(100%)";
    }, 250);
  }
}

document.getElementById("hamburger-button").addEventListener('click', toggleMenu);
document.getElementById("x").addEventListener('click', toggleMenu);

// WIPE ON LOAD

function wipeOn() {
  document.getElementById("wipe-start").style.transform = "translateX(100%)";
  setTimeout(function() {
    document.getElementById("wipe-start2").style.transform = "translateX(100%)";
  }, 450);

  if (document.getElementById("line") !== null) {
    setTimeout(function () {
      document.getElementById("line").style.width = "100%";
    }, 500);
    setTimeout(function () {
      document.getElementById("line").style.width = "36px";
      document.getElementById("line").style.float = "left";
    }, 1000);
  }

  if(document.getElementById("scroll1") !== null) {
    setTimeout(function () {
      document.getElementById("scroll1").style.opacity = "1";
    }, 1450);
    setTimeout(function () {
      document.getElementById("arrow1").style.opacity = "1";
    }, 1950);
  }
}

// MENU LINK HOVER STATE

function underlineIn(el) {
  var targ;
  if (!el) var el = window.event;
  if (el.target) targ = el.target;
  else if (el.srcElement) targ = el.srcElement;
  if (targ.nodeType == 3) // defeat Safari bug
      targ = targ.parentNode;
  if (targ.className == "mobile-link") {
    document.getElementById(targ.id).childNodes[2].style.width = "100%";
  }
}

function underlineOut(el) {
  var targ;
  if (!el) var el = window.event;
  if (el.target) targ = el.target;
  else if (el.srcElement) targ = el.srcElement;
  if (targ.nodeType == 3)
      targ = targ.parentNode;
  if (targ.className == "mobile-link") {
    document.getElementById(targ.id).childNodes[2].style.width = "0%";
  }
}

document.onmouseover = function(el) {
  underlineIn(el);
}

document.onmouseout = function(el) {
  underlineOut(el);
}

// SOCIAL MEDIA LINK HOVER STATE

function socialMediaHover() {
  const social = window.event.target.closest(".social");
  const target = window.event.target;

  if (social.id == "linkedin" && target.classList.contains("hide2")) {
    document.getElementById("white").classList.remove("hide2");
  } else if (social.id !== "linkedin" && target.classList.contains("hide2")) {
    document.getElementById("white2").classList.remove("hide2");
  } else if (social.id == "linkedin" && !target.classList.contains("hide2")) {
    document.getElementById("white").classList.add("hide2"); 
  } else {
    document.getElementById("white2").classList.add("hide2");
  }
}

document.querySelectorAll(".social").forEach(function(el) {
  el.addEventListener('mouseover', socialMediaHover);
  el.addEventListener('mouseout', socialMediaHover);
});

function socialMediaContactHover() {
  const social = window.event.target.closest(".social-contact");
  const target = window.event.target;

  if (social.id == "contact-linkedin" && target.classList.contains("hide2")) {
    document.getElementById("black").classList.remove("hide2");
  } else if (social.id !== "contact-linkedin" && target.classList.contains("hide2")) {
    document.getElementById("black2").classList.remove("hide2");
  } else if (social.id == "contact-linkedin" && !target.classList.contains("hide2")) {
    document.getElementById("black").classList.add("hide2");
  } else {
    document.getElementById("black2").classList.add("hide2");
  }
}

document.querySelectorAll(".social-contact").forEach(function(el) {
  el.addEventListener('mouseover', socialMediaContactHover);
  el.addEventListener('mouseout', socialMediaContactHover);
});

// TOGGLE PROJECT CATEGORY DISPLAY

function toggleProjectCategory() {
  const toggleSwitch = document.querySelectorAll(".project-list"),
        category = document.getElementsByClassName("portfolio-grid"),
        circles = document.getElementsByClassName("toggle"),
        hashArray = ["#all_projects", "#news", "#election", "#entertainment", "#corporate",
      "#branding", "#cell_animation", "#sports", "#photography", "#ar_vr"];

  if(window.event.target) {
    const target = window.event.target.closest(".project-list");
    for (i=0; i < toggleSwitch.length; i++) {
      if (target && toggleSwitch[i] == target) {
        category[i].classList.remove("hide");
        circles[i].classList.add("circle");
        toggleSwitch[i].style.color = "white";
      } else {
        category[i].classList.add("hide");
        category[i].style.opacity = "0";
        circles[i].classList.remove("circle");
        toggleSwitch[i].style.color = "gray";
      }
    }
    toggleSwitch.forEach(function(el, i) {
      if (el == target) {
        setTimeout(function () {
          category[i].style.opacity = "1";
        }, 0);
      }
    })
  } else {
    for (i=0; i < toggleSwitch.length; i++) {
      if (window.location.hash === hashArray[i]) {
        category[i].classList.remove("hide");
        circles[i].classList.add("circle");
        toggleSwitch[i].style.color = "white";
      } else {
        category[i].classList.add("hide");
        category[i].style.opacity = "0";
        circles[i].classList.remove("circle");
        toggleSwitch[i].style.color = "gray";
      }
    }
    toggleSwitch.forEach(function(el, i) {
      if (window.location.hash === hashArray[i]) {
        setTimeout(function () {
          category[i].style.opacity = "1";
        }, 0);
      }
    });
  }
};


// SETTING DEFAULT HIEGHT OF IMAGES

function setHeight() {
  const el = document.getElementsByClassName("project-photo");
  const a = document.getElementsByClassName("project-photo2");
  let width =  window.innerWidth / 4;
  let width2 = window.innerWidth;

  for (var i = 0; i < el.length; i++) {
    el[i].style.height = width / 1.77777778 + "px";
  } 

  for (var i = 0; i < a.length; i++) {
    a[i].style.height = width2 / 1.77777778 + "px";
  } 
}

function setHeight2() {
  const el = document.getElementsByClassName("project-photo");
  if (window.innerWidth > 862) {
    let width = window.innerWidth / 3;
    for (var i = 0; i < el.length; i++) {
      el[i].style.height = width / 1.77777778 + "px";
    } 
  } else if (window.innerWidth <= 862 && window.innerWidth > 429) {
    let width = window.innerWidth / 2;
    for (var i = 0; i < el.length; i++) {
      el[i].style.height = width / 1.77777778 + "px";
    } 
  } else {
    let width = window.innerWidth;
    for (var i = 0; i < el.length; i++) {
      el[i].style.height = width / 1.77777778 + "px";
    } 
  }
}


function setHeight3() {
  const el = document.getElementsByClassName("project-photo");
  if (window.innerWidth > 429) {
    let width = window.innerWidth / 2;
    for (var i = 0; i < el.length; i++) {
      el[i].style.height = width / 1.77777778 + "px";
    } 
  } else {
    let width = window.innerWidth;
    for (var i = 0; i < el.length; i++) {
      el[i].style.height = width / 1.77777778 + "px";
    } 
  }
}