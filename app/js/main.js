$(document).ready(function () {
	
	//wow js
	new WOW().init();

	//Модальное окно
	var modal = $('.modal-window'),
			over  = $('.modal-overlay'),
			offerBtn = $('.offer-btn_download'),
			featuresBtn = $('.offer-btn_features'),
			closeBtn = $('.modal-btn_close');
	
	offerBtn.on('click', function(){
		over.toggleClass('modal-overlay_act');
		modal.toggleClass('modal-window_act');
	});

	featuresBtn.on('click', function(){
		over.toggleClass('modal-overlay_act');
		modal.toggleClass('modal-window_act');
	});

	closeBtn.on('click', function(){
		over.removeClass('modal-overlay_act');
		modal.removeClass('modal-window_act');
	});

	//Плавный скролл

	var linkFeatures = $('a[href]');

	linkFeatures.on('click', function(event){
		event.preventDefault();
		var target = $(this).attr('href');
		console.log(target);
		var top = $(target).offset().top;
		console.log(top);
		$('html,body').animate({scrollTop: top}, 800);
	});

	//Слайдер
	$('.widgets-slider').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{

      breakpoint: 992,
      settings: {
				slidesToShow: 1,
				centerMode: false,
      }

    }]
	});

	//Бургер

	var burgerBtn = $('.header-burger'),
			headerNav = $('.header-burger__nav');

	burgerBtn.on('click', function(){
		$(this).toggleClass('header-burger_act');
		headerNav.toggleClass('header-burger__nav_act');
	});

	$('.burger-link').on('click', function(){
		headerNav.removeClass('header-burger__nav_act');
		burgerBtn.removeClass('header-burger_act');
	});

	//Появление кнопки для возврата наверх
	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
				$('.footer-home_link').css({display : "block"});
		} else {
				$('.footer-home_link').css({display : "none"});
			}
	});

});
