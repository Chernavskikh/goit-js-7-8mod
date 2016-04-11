$(document).ready(function(){
	$('.tabs_menu a').click(function(e) {//устанавливаем обработчик событий при клике на ссылку
		e.preventDefault();//отменяем стандартное поведение ссылок
		$('.tabs_menu .active').removeClass('active');
		$(this).addClass('active');//добавляем класс ссылке по которой кликнули
		var tab = $(this).attr('href');
		$('.tab').not(tab).css({'display':'none'});//все эл-ты кроме того который сод-т атрибут равный href скрыть
		$(tab).fadeIn(800);
	});

/////////////////2 задание

var login = $('.login');
var password = $('.password');
var passwordConfirm = $('.password-conf');

login.hover(function(){
	$('.tooltip_1').fadeIn("slow");
}, function() {$('.tooltip_1').fadeOut("slow");});

password.hover(function(){
	$('.tooltip_2').fadeIn("slow");
}, function() {$('.tooltip_2').fadeOut("slow");});

passwordConfirm.hover(function(){
	$('.tooltip_3').fadeIn("slow");
}, function() {$('.tooltip_3').fadeOut("slow");});

});

