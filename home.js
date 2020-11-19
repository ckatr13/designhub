

// function isTransformedOnce() {
//     if (getComputedStyle(document.getElementById("group")).transform = "translateX(0%)") {
//         return true;
//     }
// }

// function isTransformed() {
//     if (getComputedStyle(document.getElementById("group")).transform = "translateX(-75%)") {
//         return true;
//     }
// }

// function animateSlides() {
//     setTimeout(function () {
//         document.getElementById("group").style.transform = "translateX(-25%)";
//     }, 3000);
//     setTimeout(function () {
//         document.getElementById("group").style.transform = "translateX(-50%)"
//     }, 7000);
//     setTimeout(function () {
//         document.getElementById("group").style.transform = "translateX(-75%)"
//     }, 11000);
//     setTimeout(function () {
//         document.getElementById("group").style.transform = "translateX(0%)"
//     }, 15000);
// }

// function animate() {
//   animateSlides();
//   myFunction();
// }

// var myVar;

// function myFunction() {
//   myVar = setInterval(animateSlides, 16000);
// }

// window.addEventListener("load", animate);

var target = document.querySelector('#header');
const nav = document.getElementById("nav"); 
// const a = document.getElementById("a");
// const a2 = document.getElementById("a2");
// const a3 = document.getElementById("a3");

document.addEventListener('scroll', () => {
  if (window.scrollY >= (target.getBoundingClientRect().top + 500)) {
    nav.style.backgroundColor = "rgba(18, 18, 18, 1)";
    // a.style.color = "white";
    // a2.style.color = "white";
    // a3.style.color = "white";
  } else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
    // a.style.color = "black";
    // a2.style.color = "black";
    // a3.style.color = "black";
  }
})

const slider = document.getElementById('slider');
const sliderItems = document.getElementById('slides');

function slide(wrapper, items) {
    var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
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
    // wrapper.classList.add('loaded');


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

      function fn () {
        window.setInterval(function () { shiftSlide(1)}, 5000);
        // setTimeout(function () { shiftSlide(1)}, 2000)
      };

      window.addEventListener('load', fn);
    }

    slide(slider, sliderItems);

// const img1 = document.getElementById("img1");
// const img2 = document.getElementById("img2");

// function rotateCube() { 
//     img1.style.transform = "rotateY(-90deg) translateZ(50vw)"; 
//     img2.style.transform = "rotateY(0deg) translateY(0) translateZ(0)";
//     // img2.style.transition = "ease-in-out .75s";
// }

// function rotate() {
//     setTimeout(rotateCube, 1000);
// }

// window.addEventListener("load", rotate);

// function menuHover() {
//     document.getElementById("line").style.width = "56px";
// }

// function menuOut() {
//     document.getElementById("line").style.width = "0px";
// }

// function menuHover2() {
//     document.getElementById("line2").style.width = "68px";
// }

// function menuOut2() {
//     document.getElementById("line2").style.width = "0px";
// }

// function menuHover3() {
//     document.getElementById("line3").style.width = "68px";
// }

// function menuOut3() {
//     document.getElementById("line3").style.width = "0px";
// }


function wipe() {
    document.getElementById("wipe-on").style.width = "0px"
}

const bloomberg = document.getElementById("bloomberg");
const aj = document.getElementById("aj");
const arVr = document.getElementById("ar-vr");

function showProject1() {
    bloomberg.classList.remove("hide");
    aj.classList.add("hide");
    arVr.classList.add("hide");
}

function showProject2() {
    bloomberg.classList.add("hide");
    aj.classList.remove("hide");
    arVr.classList.add("hide");
}

function showProject3() {
    bloomberg.classList.add("hide");
    aj.classList.add("hide");
    arVr.classList.remove("hide");
}


function validate(){
    var password = document.getElementById("password").value;
    if ( password == "lucky") {
        document.getElementById("member-portfolio").classList.remove("hide");
        document.getElementById("login").style.display = "none";
        return false;
    } else{
        alert("The password you entered was incorrect");
        return false;
    }
}

function delayShow() {
    document.getElementById("mobile-menu").style.transform = "translateX(0)";
}

function delayShowMenu() {
    document.querySelectorAll('.mobile-link').forEach(function(element, i) {
        setTimeout(function() {
            element.style.opacity = "1";
        }, i * 125)
    });
}


function displayMenu() {
    document.getElementById("hamburger-button").style.display = "none";
    setTimeout(delayShow, 250);
    document.getElementById("wipe").style.transform = "translateX(0)";
    setTimeout(delayShowMenu, 350);
}

function delayHideMenu() {
    document.querySelectorAll('.mobile-link').forEach(function(element, i) {
            element.style.opacity = "0";
    });
}


function delayHide() {
    document.getElementById("wipe").style.transform = "translateX(100%)";
}

function animateLineOut() {
  document.getElementById("line").style.width = "100%";
}

function animateLineIn() {
  document.getElementById("line").style.width = "36px";
  document.getElementById("line").style.float = "left";
}

function wipeOn() {
  document.getElementById("wipe-start").style.transform = "translateX(100%)";
  setTimeout(function() {
    document.getElementById("wipe-start2").style.transform = "translateX(100%)";
  }, 250)
  setTimeout(function () {
    animateLineOut()
  }, 500)
  setTimeout(function () {
    animateLineIn()
  }, 1000)
  setTimeout(function () {
    bringInScroll();
  }, 1200);
}

window.addEventListener('load', wipeOn);

function bringInScroll() {
  setTimeout(function () {
    document.getElementById("scroll1").style.opacity = "1";
  }, 250);
  setTimeout(function () {
    document.getElementById("arrow1").style.opacity = "1";
  }, 500);
}


function hideMenu() {
    // document.getElementById("mobile-menu").classList.add("hide");
    // document.getElementById("x").style.display = "none";
    document.getElementById("hamburger-button").style.display = "block";
    document.getElementById("mobile-menu").style.transform = "translateX(100%)"
    setTimeout(delayHide, 250);
    document.getElementsByClassName("mobile-link")
    delayHideMenu();
}

function underlineIn(e) {
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;
  if (targ.nodeType == 3) // defeat Safari bug
      targ = targ.parentNode;
  // console.log(targ.id);
  if (targ.className == "mobile-link") {
    document.getElementById(targ.id).childNodes[2].style.width = "100%";
  }
}

function underlineOut(e) {
  var targ;
  if (!e) var e = window.event;
  if (e.target) targ = e.target;
  else if (e.srcElement) targ = e.srcElement;
  if (targ.nodeType == 3)
      targ = targ.parentNode;
  if (targ.className == "mobile-link") {
    document.getElementById(targ.id).childNodes[2].style.width = "0%";
  }
}

document.onmouseover = function(e) {
  underlineIn(e);
}

document.onmouseout = function(e) {
  underlineOut(e);
}

function socialMediaHover() {
  document.getElementById("white").classList.remove("hide2");
}

function socialMediaOut() {
  document.getElementById("white").classList.add("hide2");
}

function socialMediaHover2() {
  document.getElementById("white2").classList.remove("hide2");
}

function socialMediaOut2() {
  document.getElementById("white2").classList.add("hide2");
}

function socialMediaHover3() {
  document.getElementById("black").classList.remove("hide2");
}

function socialMediaOut3() {
  document.getElementById("black").classList.add("hide2");
}

function socialMediaHover4() {
  document.getElementById("black2").classList.remove("hide2");
}

function socialMediaOut4() {
  document.getElementById("black2").classList.add("hide2");
}




function fillCircle() {
    document.getElementById("circle").classList.add("circle");
    document.getElementById("project-item1").style.color = "white";
    document.getElementById("circle2").classList.remove("circle");
    document.getElementById("project-item2").style.color = "gray";
    document.getElementById("circle3").classList.remove("circle");
    document.getElementById("project-item3").style.color = "gray";
    document.getElementById("circle4").classList.remove("circle");
    document.getElementById("project-item4").style.color = "gray";
    document.getElementById("circle5").classList.remove("circle");
    document.getElementById("project-item5").style.color = "gray";
    document.getElementById("circle6").classList.remove("circle");
    document.getElementById("project-item6").style.color = "gray";
    document.getElementById("circle7").classList.remove("circle");
    document.getElementById("project-item7").style.color = "gray";

    document.getElementById("all-projects").classList.remove("hide");
    document.getElementById("news").classList.add("hide");
    document.getElementById("election").classList.add("hide");
    document.getElementById("entertainment").classList.add("hide");
    document.getElementById("non-profit").classList.add("hide");
    document.getElementById("branding").classList.add("hide");
    document.getElementById("sports").classList.add("hide");
}

function fillCircle2() {
    document.getElementById("circle2").classList.add("circle");
    document.getElementById("project-item2").style.color = "white";
    document.getElementById("circle").classList.remove("circle");
    document.getElementById("project-item1").style.color = "gray";
    document.getElementById("circle3").classList.remove("circle");
    document.getElementById("project-item3").style.color = "gray";
    document.getElementById("circle4").classList.remove("circle");
    document.getElementById("project-item4").style.color = "gray";
    document.getElementById("circle5").classList.remove("circle");
    document.getElementById("project-item5").style.color = "gray";
    document.getElementById("circle6").classList.remove("circle");
    document.getElementById("project-item6").style.color = "gray";
    document.getElementById("circle7").classList.remove("circle");
    document.getElementById("project-item7").style.color = "gray";

    document.getElementById("news").classList.remove("hide");
    document.getElementById("all-projects").classList.add("hide");
    document.getElementById("election").classList.add("hide");
    document.getElementById("entertainment").classList.add("hide");
    document.getElementById("non-profit").classList.add("hide");
    document.getElementById("branding").classList.add("hide");
    document.getElementById("sports").classList.add("hide");
}

function fillCircle3() {
  document.getElementById("circle3").classList.add("circle");
  document.getElementById("project-item3").style.color = "white";
  document.getElementById("circle").classList.remove("circle");
  document.getElementById("project-item1").style.color = "gray";
  document.getElementById("circle2").classList.remove("circle");
  document.getElementById("project-item2").style.color = "gray";
  document.getElementById("circle4").classList.remove("circle");
  document.getElementById("project-item4").style.color = "gray";
  document.getElementById("circle5").classList.remove("circle");
  document.getElementById("project-item5").style.color = "gray";
  document.getElementById("circle6").classList.remove("circle");
  document.getElementById("project-item6").style.color = "gray";
  document.getElementById("circle7").classList.remove("circle");
  document.getElementById("project-item7").style.color = "gray";

  document.getElementById("election").classList.remove("hide");
  document.getElementById("all-projects").classList.add("hide");
  document.getElementById("news").classList.add("hide");
  document.getElementById("entertainment").classList.add("hide");
  document.getElementById("non-profit").classList.add("hide");
  document.getElementById("branding").classList.add("hide");
  document.getElementById("sports").classList.add("hide");
}

function fillCircle4() {
  document.getElementById("circle4").classList.add("circle");
  document.getElementById("project-item4").style.color = "white";
  document.getElementById("circle").classList.remove("circle");
  document.getElementById("project-item1").style.color = "gray";
  document.getElementById("circle2").classList.remove("circle");
  document.getElementById("project-item2").style.color = "gray";
  document.getElementById("circle3").classList.remove("circle");
  document.getElementById("project-item3").style.color = "gray";
  document.getElementById("circle5").classList.remove("circle");
  document.getElementById("project-item5").style.color = "gray";
  document.getElementById("circle6").classList.remove("circle");
  document.getElementById("project-item6").style.color = "gray";
  document.getElementById("circle7").classList.remove("circle");
  document.getElementById("project-item7").style.color = "gray";

  document.getElementById("entertainment").classList.remove("hide");
  document.getElementById("all-projects").classList.add("hide");
  document.getElementById("news").classList.add("hide");
  document.getElementById("election").classList.add("hide");
  document.getElementById("non-profit").classList.add("hide");
  document.getElementById("branding").classList.add("hide");
  document.getElementById("sports").classList.add("hide");
}

function fillCircle5() {
  document.getElementById("circle5").classList.add("circle");
  document.getElementById("project-item5").style.color = "white";
  document.getElementById("circle").classList.remove("circle");
  document.getElementById("project-item1").style.color = "gray";
  document.getElementById("circle2").classList.remove("circle");
  document.getElementById("project-item2").style.color = "gray";
  document.getElementById("circle3").classList.remove("circle");
  document.getElementById("project-item3").style.color = "gray";
  document.getElementById("circle4").classList.remove("circle");
  document.getElementById("project-item4").style.color = "gray";
  document.getElementById("circle6").classList.remove("circle");
  document.getElementById("project-item6").style.color = "gray";
  document.getElementById("circle7").classList.remove("circle");
  document.getElementById("project-item7").style.color = "gray";

  document.getElementById("non-profit").classList.remove("hide");
  document.getElementById("all-projects").classList.add("hide");
  document.getElementById("news").classList.add("hide");
  document.getElementById("election").classList.add("hide");
  document.getElementById("entertainment").classList.add("hide");
  document.getElementById("branding").classList.add("hide");
  document.getElementById("sports").classList.add("hide");
}

function fillCircle6() {
  document.getElementById("circle6").classList.add("circle");
  document.getElementById("project-item6").style.color = "white";
  document.getElementById("circle").classList.remove("circle");
  document.getElementById("project-item1").style.color = "gray";
  document.getElementById("circle2").classList.remove("circle");
  document.getElementById("project-item2").style.color = "gray";
  document.getElementById("circle3").classList.remove("circle");
  document.getElementById("project-item3").style.color = "gray";
  document.getElementById("circle4").classList.remove("circle");
  document.getElementById("project-item4").style.color = "gray";
  document.getElementById("circle5").classList.remove("circle");
  document.getElementById("project-item5").style.color = "gray";
  document.getElementById("circle7").classList.remove("circle");
  document.getElementById("project-item7").style.color = "gray";

  document.getElementById("branding").classList.remove("hide");
  document.getElementById("all-projects").classList.add("hide");
  document.getElementById("news").classList.add("hide");
  document.getElementById("election").classList.add("hide");
  document.getElementById("entertainment").classList.add("hide");
  document.getElementById("non-profit").classList.add("hide");
  document.getElementById("sports").classList.add("hide");
}

function fillCircle7() {
  document.getElementById("circle7").classList.add("circle");
  document.getElementById("project-item7").style.color = "white";
  document.getElementById("circle").classList.remove("circle");
  document.getElementById("project-item1").style.color = "gray";
  document.getElementById("circle2").classList.remove("circle");
  document.getElementById("project-item2").style.color = "gray";
  document.getElementById("circle3").classList.remove("circle");
  document.getElementById("project-item3").style.color = "gray";
  document.getElementById("circle4").classList.remove("circle");
  document.getElementById("project-item4").style.color = "gray";
  document.getElementById("circle5").classList.remove("circle");
  document.getElementById("project-item5").style.color = "gray";
  document.getElementById("circle6").classList.remove("circle");
  document.getElementById("project-item6").style.color = "gray";

  document.getElementById("sports").classList.remove("hide");
  document.getElementById("all-projects").classList.add("hide");
  document.getElementById("news").classList.add("hide");
  document.getElementById("election").classList.add("hide");
  document.getElementById("entertainment").classList.add("hide");
  document.getElementById("non-profit").classList.add("hide");
  document.getElementById("branding").classList.add("hide");
}