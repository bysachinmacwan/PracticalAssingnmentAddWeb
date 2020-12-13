$('.slider-section .myslider').slick({

  slidesToScroll: 1,
  arrows: false,
  dots: true,
  vertical: true,
  verticalSwiping: true,
        autoplay:false,
    autoplaySpeed:3000
  });
    
  AOS.init({
    once: true,disable:'mobile'
 })

  		
		
$(window).on("load resize", function () {

	var viewportWidth = $(window).width();
	if (viewportWidth < 992) {
		$(".guiding-key-points").addClass("owl-carousel owl-theme");
		$('.guiding-key-points').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			dots: false,
			nav: true,
			margin: 20,
			responsiveClass: true,
			responsive: {
				768: {
					items: 2,
        },

        0: {
					items: 1,
        }
        
			}
		});
		$(".owl-prev").html('<span><i class="fas fa-angle-left"></i></span>');
		$(".owl-next").html('<span><i class="fas fa-angle-right"></i></span>');
	}
	else {
		$(".guiding-key-points").removeClass("owl-carousel owl-theme");
		$('.guiding-key-points').owlCarousel('destroy');
	}

});

$(".thinking-point, .environment-point").hover(
  function () {
    $(".education-point").addClass("collpased");
  },
  function () {
    $(".education-point").removeClass("collpased");
  }
);

$(".education-point").hover(
  function () {
    $(".environment-point").addClass("collpased");
  },
  function () {
    $(".environment-point").removeClass("collpased");
  }
);

$(".time-point, .trust-point").hover(
  function () {
    $(".communication-point").addClass("collpased");
  },
  function () {
    $(".communication-point").removeClass("collpased");
  }
);
$(" .communication-point").hover(
  function () {
    $(".trust-point").addClass("collpased");
  },
  function () {
    $(".trust-point").removeClass("collpased");
  }
);




enterView({
  selector: '.website-intro',
  enter: function(el) {
      el.classList.add('entered');
  }
})

var frameNumber = 0, // start video at frame 0
// lower numbers = faster playback
playbackConst = 1000, 
// get page height from video duration
setHeight = document.getElementById("video-wrapper"), 
// select video element         
vid = document.getElementById('video-holder'); 
// var vid = $('#video-holder')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
var frameNumber  = window.pageYOffset/playbackConst;
vid.currentTime  = frameNumber;
window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);