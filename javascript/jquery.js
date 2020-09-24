$(function (){

//MENU
	$(".botao_mobile").click(function(){
          $(".menu").slideToggle();
        });
        $(".btn-close").click(function(){
          $(".menu").slideToggle();
        });

        $(document).ready(function(){
        	$('.logo').hide( 0 ).fadeIn( 400 );
        	$('.new').hide(0).delay(200).fadeIn(200);
        	$('.text').hide(0).delay(280).fadeIn(300);
        });



//ABOUT
	debounce = function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};


	(function(){
		var $target = $('.anime'),
				animationClass = 'anime-start',
				offset = $(window).height() * 3/4;

		function animeScroll() {
			var documentTop = $(document).scrollTop();

			$target.each(function(){
				var itemTop = $(this).offset().top;
				if (documentTop > itemTop - offset) {
					$(this).addClass(animationClass);
				} else {
					$(this).removeClass('anime-start');
				}
			});
		}

		animeScroll();

		$(document).scroll(debounce(function(){
			animeScroll();
		}, 50));

		stop();
	})();


	//Menu Fixo
			$(function(){   
				var nav = $('.social');   
				$(window).scroll(function () { 
					if ($(this).scrollTop() > 100) { 
						nav.addClass("menu-fixo");
					} else { 
						nav.removeClass("menu-fixo"); 
					} 
				});  
			});



//
});