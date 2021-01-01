$(function() { 		
	
	$(window).scroll(function(){

		// Scroll nav

		if ( $('.header-menu-wrapper').length ) {

			const scrollNav = $('.header-menu-wrapper');
			const scrollTop = $(this).scrollTop();
			const scrollNavHeight = scrollNav.height();
			
			if ( scrollTop > scrollNavHeight ) {
				scrollNav.addClass('scroll-nav');
			} else if (( scrollTop < scrollNavHeight )) {
				scrollNav.removeClass('scroll-nav');
			}

		};


	});


	// Scroll nav fix при обновлении страницы


	if ( $('.header-menu-wrapper').length ) {

		const scrollNav = $('.header-menu-wrapper');
		const scrollTop = $(this).scrollTop();
		const scrollNavHeight = scrollNav.height();
		
		if ( scrollTop > scrollNavHeight ) {
			scrollNav.addClass('scroll-nav');
		} else if (( scrollTop < scrollNavHeight )) {
			scrollNav.removeClass('scroll-nav');
		}

	};


	// header hamburger menu

	if ( $('.header-menu .menu-btn ').length ) {

		const $menuBtn = document.querySelector(".menu-btn");
		let isMenuOpen = false;
		const headerMenuWrapper = $('.header .header-menu-wrapper');
		const subMenu = $('.header .header-menu-wrapper .header-sub-menu');

		$menuBtn.addEventListener("click", () => {

			if (!isMenuOpen) {
				$menuBtn.classList.add("open");
				headerMenuWrapper.addClass("header-menu-wrapper-open");
				$('.header-menu-wrapper').removeClass('scroll-nav');

				subMenu.slideDown(300);
			} else {
				$menuBtn.classList.remove("open");
				headerMenuWrapper.removeClass("header-menu-wrapper-open");
				subMenu.slideUp(200);

				const scrollNav = $('.header-menu-wrapper');
				const scrollTop = $(window).scrollTop();
				const scrollNavHeight = scrollNav.height();
				
				if ( scrollTop > scrollNavHeight ) {
					scrollNav.addClass('scroll-nav');
				} else if (( scrollTop < scrollNavHeight )) {
					scrollNav.removeClass('scroll-nav');
				}

			}

			isMenuOpen = !isMenuOpen;

		});
	
	 };

	
	// header slider


	if ( $('.header .header-slider').length ) {

		const headeSlider = $('.header .header-slider');

		headeSlider.slick({
			dots: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 980,
					settings: {
					  dots: false
					}
				},
				{
					breakpoint: 767,
					settings: {
					  dots: true
					}
				}
			]
		});


		$(".header-slider-custom-dots .header-dots-item").click(function(e){

			
			$(".header-slider-custom-dots .header-dots-item").each(function() {

				$(this).removeClass("curren-custon-dot");

			});

			$(this).addClass("curren-custon-dot");

			e.preventDefault();
			let slideIndex = $(this).index();
			headeSlider.slick( 'slickGoTo', parseInt(slideIndex) );

		});

		// привязка custom-dots к изменению слайда

		headeSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){	

			$(".header-slider-custom-dots .header-dots-item").each(function() {

				if ( currentSlide == $(this).index() ) {
					$(this).addClass("curren-custon-dot");
				} else {
					$(this).removeClass("curren-custon-dot");
				}

			});		
			
		});
		

		// изменение высоты слайдера в зависимости от высоты текущего блока
	
		headeSlider.on('setPosition', function (event, slick) {	

			const currentSlideHeight = $('.header .header-slider .header-slider-item-wrapper.slick-current').innerHeight();
		
			$('.header .header-slider .slick-list.draggable').animate({ 'height': currentSlideHeight + 'px' }, 400);

		});;

		headeSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){	

			new WOW().init();

		});




	};



	// slider in advantages-section


	if ( $('.advantages .about-advantages').length ) {

		$('.advantages .about-advantages').slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: false,
			variableWidth: true
		  });

	};



	// slider in about-services-section


	if ( $('.about-services').length ) {

		$('.about-services').slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: false,
			variableWidth: true
		  });


	};




	// WOW animation

	if ( $('.wow').length ) {

		new WOW().init();

	};


	
	// tabs on page gallery

	if ( $('.tab_item').length ) {

		$(".tab_item").not(":first").fadeOut();
		$(".gallery-tabs-buttons .tab").click(function() {
			$(".gallery-tabs-buttons .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").fadeOut(200).eq($(this).index()).fadeIn()
		}).eq(0).addClass("active"); 

	};

	













});
