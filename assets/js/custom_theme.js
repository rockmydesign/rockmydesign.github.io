
// For Megamenu Structure Design

// Add class to mega_menu parent
$('.mega_menu .dropdown-menu').parent().addClass('mega_menu_link');

// Set Mega Menu Position Dynamically
$('.mega_menu .mega_menu_link').hover(
    function () { // Mouse Enter

        var menupos = $(this).offset();
        var menu = $(this).find("div.dropdown-menu");
        
        if (!menu.hasClass("mega_menu_open")) {
            // Check if the menu overflows the container
            if ((menupos.left + menu.outerWidth()) > $(".container").width()) {
                var getpos = $(".container").width() - (menupos.left + menu.outerWidth());

                var newpos = menupos.left + getpos;

            } else {
                var newpos = "unset";
            }
            menu.css({ left: newpos });
            menu.addClass('mega_menu_open');
        }

        // Calculate and set top position
        var offsetTop = $(this).position().top;
        var toppos = offsetTop + 48;
        menu.css({ top: toppos });
    },
    
);

 // Set Classic Menu Position Dynamically
 $(document).ready(function () {
    // jQuery.noConflict();
    $('.classic_menu .dropdown-submenu').hover(
      function () {
        
        var menu = $(this).find(".dropdown-menu");
        var menupos = menu.offset();
    
        if ((menupos.left + menu.width() + $(this).width() ) > $(".container").width()) {
            var newpos = - menu.width();    
        } else {
            var newpos = 100+'%';
        }
        menu.css({ left:newpos });

    });

    // For Submenu Collapse in Mobile View Only
    if (window.matchMedia('(max-width: 1200px)').matches){
        
        $('.classic_menu .dropdown-toggle').on("click", function(e){
            console.log("click done")
            $(this).next('ul').toggleClass('OpenSubmenu');
            // $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
        
    }
    

});



$(window).resize(function() {
    resizechange();
});
 
resizechange();

function resizechange() {
    if (window.matchMedia('(min-width: 1200px)').matches){
        $(".navbar_menu .menu_link > a").attr('data-toggle',"");
    }
    else
    {
        $(".navbar_menu .menu_link > a").attr('data-toggle',"dropdown");
    }

    
    // For Submenu Collapse in Mobile View Only
    if (window.matchMedia('(max-width: 991px)').matches){
        
        $('.submenu_toggle').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
        
    }
    else if (window.matchMedia('(min-width: 992px)').matches){
        
        $('.submenu_toggle').on("click", function(e){
            // $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
        
    }

}


// For Grid View to List View
$(document).ready(function(){
    $(".toggle_view_icon").click(function(){
      $(".filter_row").toggleClass("list_view");
      $(this).find('i').toggleClass('fa-solid fa-list fa-solid fa-grip')
    });
});

// For Sidebar Links Accordion
$(document).ready(function(){
    $(".sidebar_menu .dropdown-toggle").click(function(){
      $(this).parent().toggleClass('c-open');
      // $(this).parent().find(".c-dropdown-menu").slideToggle();
      
    });
});


// For Slider
document.addEventListener('DOMContentLoaded', function () {

  var swiper = new Swiper(".bannerSwiper", {
      speed:1500,
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  // For Thumbnail Slider
  var swiper1 = new Swiper(".thumSwiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1400: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
        },
        200: {
          slidesPerView: 1,
        },
        
      },
    });

  //   For Gallry(product detail) Slider
  $('.gallerySwiper .swiper-slide-active img').elevateZoom({
      zoomType: "inner",
      lensShape : "round",
      lensSize    : 200,
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 500
  });
  var swiper3 = new Swiper(".galleryThumbSwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper4 = new Swiper(".gallerySwiper", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper3,
      },
    });
    
});

  $(document).ready(function () {
    $('.if_check_done').change(function () {
      if ($(this).is(':checked')) {
        $(this).parent().next().addClass('open'); // Add classes
        // $('.register_form').addClass('open'); // Add classes
      } else {
        $(this).parent().next().removeClass('open'); // Remove classes
      }
    });
  });


// For Price Range Slider
// document.addEventListener('DOMContentLoaded', () => {
//     const COLOR_TRACK = "#E5E5E5";
//     const COLOR_RANGE = "#206a70";

//     // Get the sliders and tooltips
//     const fromSlider = document.querySelector('#fromSlider');
//     const toSlider = document.querySelector('#toSlider');
//     const fromTooltip = document.querySelector('#fromSliderTooltip');
//     const toTooltip = document.querySelector('#toSliderTooltip');
//     const scale = document.getElementById('scale');

//     // Get min and max values from the fromSlider element
//     const MIN = parseInt(fromSlider.getAttribute('min')); // scale will start from min value (first range slider)
//     const MAX = parseInt(fromSlider.getAttribute('max')); // scale will end at max value (first range slider)
//     const STEPS = parseInt(scale.dataset.steps); // update the data-steps attribute value to change the scale points

//     function controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
//         const [from, to] = getParsed(fromSlider, toSlider);
//         fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//         if (from > to) {
//             fromSlider.value = to;
//         }
//         setTooltip(fromSlider, fromTooltip);
//     }

//     function controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
//         const [from, to] = getParsed(fromSlider, toSlider);
//         fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//         setToggleAccessible(toSlider);
//         if (from <= to) {
//             toSlider.value = to;
//         } else {
//             toSlider.value = from;
//         }
//         setTooltip(toSlider, toTooltip);
//     }

//     function getParsed(currentFrom, currentTo) {
//         const from = parseInt(currentFrom.value, 10);
//         const to = parseInt(currentTo.value, 10);
//         return [from, to];
//     }

//     function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
//         const rangeDistance = to.max - to.min;
//         const fromPosition = from.value - to.min;
//         const toPosition = to.value - to.min;
//         controlSlider.style.background = `linear-gradient(
//           to right,
//           ${sliderColor} 0%,
//           ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
//           ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
//           ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
//           ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
//           ${sliderColor} 100%)`;
//     }

//     function setToggleAccessible(currentTarget) {
//         const toSlider = document.querySelector('#toSlider');
//         if (Number(currentTarget.value) <= 0) {
//             toSlider.style.zIndex = 2;
//         } else {
//             toSlider.style.zIndex = 0;
//         }
//     }

//     function setTooltip(slider, tooltip) {
//         const value = slider.value;
//         tooltip.textContent = `$${value}`;
//         const thumbPosition = (value - slider.min) / (slider.max - slider.min);
//         const percent = thumbPosition * 100;
//         const markerWidth = 20; // Width of the marker in pixels
//         const offset = (((percent - 50) / 50) * markerWidth) / 2;
//         tooltip.style.left = `calc(${percent}% - ${offset}px)`;
//     }

//     function createScale(min, max, step) {
      
//         const range = max - min;
//         const steps = range / step;
//         for (let i = 0; i <= steps; i++) {
//             const value = min + (i * step);
//             const percent = (value - min) / range * 100;
//             const marker = document.createElement('div');
//             marker.style.left = `${percent}%`;
//             marker.textContent = `$${value}`;
//             scale.appendChild(marker);
//         }
//     }

//     // events
//     fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip);
//     toSlider.oninput = () => controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip);

//     // Initial load
//     fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
//     setToggleAccessible(toSlider);
//     setTooltip(fromSlider, fromTooltip);
//     setTooltip(toSlider, toTooltip);
//     createScale(MIN, MAX, STEPS);
//   });


