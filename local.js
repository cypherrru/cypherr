$('document').ready(function () {
	// ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА 
	$('.banner__list').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
	});
	
	// ВЫЗОВ МОДАЛКИ НА ЗАПРОС
	$('.request-btn').on('click', function () {
		$('.request-popup').addClass('request-popup--active')
		$('body').addClass('no-overflow')
	})
	$('.request-popup__close').on('click', function () {
		$('.request-popup').removeClass('request-popup--active')
		$('body').removeClass('no-overflow')
	})
	

    // МАСКА ДЛЯ ВВОДА ТЕЛЕФОНА
	$("#phone-number").mask("+7 (999) 999-9999");
})
