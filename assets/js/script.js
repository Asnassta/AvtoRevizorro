$(document).ready(function() {
	/*========Mobile-menu=========*/
  $(".header__burger").on("click", function(event) {
    event.preventDefault();
      $(".header__menu").addClass('show'); 
      $('body').addClass('hidden'); 
  });
  $(".header__close").on("click", function(event) {
    event.preventDefault();
      $(".header__menu").removeClass('show'); 
      $('body').removeClass('hidden'); 
  });
  /*========/mobile-menu=========*/

  /*==========Quote (animate)==========*/
  (function(elements) {
  var i = -1;
  if (!elements.length) {
    return false;
  }
  function step() {
    elements.eq(i).hide();
    if (++i >= elements.length) {
      i = 0;
    };
    elements.eq(i).fadeIn();
    setTimeout(step, 2500);
  }
  step();
}($('#general_process').children()));
  /*==========/quote (animate)==========*/

  /*========FAQ=========*/
  $(".faq_main .faq__question").on("click", function(event) {
    event.preventDefault();
      $(this).next().slideToggle(); 
      $(this).parent().parent().toggleClass('active');
      $(".faq_main .faq__question").not(this).next().slideUp();  
      $(".faq_main .faq__question").not(this).parent().parent().removeClass('active');  
  });

  $(".faq_qa .faq__question").on("click", function(event) {
    event.preventDefault();
      $(this).next().slideToggle(); 
      $(this).parent().parent().toggleClass('active');
      $(".faq_qa .faq__question").not(this).next().slideUp();  
      $(".faq_qa .faq__question").not(this).parent().parent().removeClass('active');  
  });
  /*========/FAQ=========*/

  /*========Cars=========*/
  $(".cars__btn").on("click", function(event) {
    event.preventDefault();
      $(this).parents(".cars__item").find(".cars__equipment").fadeToggle();
  });

  $(".cars__equipment .btn-plus").on("click", function(event) {
    event.preventDefault();
      $(this).parents(".cars__equipment").fadeToggle();
  });

  $(".cars__play").on("click", function(event) {
    event.preventDefault();
      $(this).next().fadeToggle();
  });
  /*========/cars=========*/

    /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 160
    }, 500);
  });
/*=========/smooth scroll=============*/

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");

        /*========Page-slider========*/
		  new Swiper('.page-slider-main', {
		    slidesPerView: 1,
		    loop: true,
		    navigation: {
		      nextEl: '.slider-arrow_next',
		      prevEl: '.slider-arrow_prev',
		    },
		    thumbs: {
		      swiper: {
		        el: '.page-slider-min',
		        loop: true,
		        slidesPerView: 8,
		        spaceBetween: 20,
		        breakpoints: {
		          320: {
		            spaceBetween: 4,
		          },
		          993: {
		            spaceBetween: 16,
		          },
		        },
		      },
		      autoScrollOffset: 1,
		    },
		  });
		/*=======/page-slider========*/
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

  /*======Select-styler=============*/
  $(function() {
    $('select').styler();
  });
  /*======/select-styler=============*/

  /*=================Sliders===================*/
	/*========Stat__slider========*/
  	new Swiper('.stat__slider', {
    slidesPerView: 3,
    spaceBetween: 22,
    loop: true,
    resizeReInit: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        547: {
          slidesPerView: 1,
        },
        765: {
          slidesPerView: 3,
        },
      }
  });
/*=======/stat__slider========*/

/*========Car__slider========*/
  	new Swiper('.cars__slider', {
    slidesPerView: 1,
    spaceBetween: 206,
    //loop: true,
    resizeReInit: true,
    navigation: {
    	prevEl: '.slider-arrow_prev',
	  	nextEl: '.slider-arrow_next',
	},
    breakpoints: {
    	320: {
          spaceBetween: 13,
        },
    	760: {
          spaceBetween: 50,
        },
        1200: {
          spaceBetween: 95,
        },
        1440: {
          spaceBetween: 115,
        },
        1920: {
          spaceBetween: 154,
        },
        2560: {
          spaceBetween: 206,
        },
      }
  });
/*=======/cars__slider========*/

/*========Steps__slider========*/
  	new Swiper('.steps__slider', {
    slidesPerView: 1.265,
    spaceBetween: 111,
    loop: true,
    resizeReInit: true,
    navigation: {
	  	nextEl: '.slider-arrow_next',
	},
    breakpoints: {
    	320: {
          spaceBetween: 13,
        },
    	760: {
          spaceBetween: 30,
        },
        1200: {
          spaceBetween: 51,
        },
        1440: {
          spaceBetween: 62,
        },
        1920: {
          spaceBetween: 83,
        },
        2560: {
          spaceBetween: 111,
        },
      }
  });
/*=======/steps__slider========*/

/*========Social__slider========*/
  	new Swiper('.social__slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    resizeReInit: true,
    updateOnWindowResize: true,
    navigation: {
	  	nextEl: '.slider-arrow_next',
	},
    breakpoints: {
    	320: {
          spaceBetween: 10,
        },
    	760: {
          spaceBetween: 10,
        },
        1200: {
          spaceBetween: 10,
        },
        1440: {
          spaceBetween: 12,
        },
        1920: {
          spaceBetween: 15,
        },
        2560: {
          spaceBetween: 20,
        },
      }
  });



 /*=================Sliders===================*/

});