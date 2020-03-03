jQuery(document).ready(function () {
    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true

        },
        auto: true,
        items:
        {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        }

    })
});

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

// Get the header
var header = document.getElementById("header");

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("header").style.fontSize = "0px";
        document.getElementById("headerlogo").style.width = "100px";
        document.getElementById("navbar").style.backgroundImage = "transparent";
    }
    
    else {
        document.getElementById("header").style.fontSize = "90px";
        document.getElementById("headerlogo").style.width = "0px";
        document.getElementById("navbar").style.backgroundColor = "transparent";

    }
}
  

//Get the button:
mybutton = document.getElementById("myBtn");

 

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
