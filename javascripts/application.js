$(document).ready(function(){
	
  $('.s-page-intro-wrapper .s-nav-label').click(function(){
		hide_nav();
		show_nav( this );
		show_page( this );
		return false;
	}).hover(function(){ hover_nav($(this)) },function(){ blur_nav($(this)) });
	
  $('.s-nav-topmenu, .s-footer-link, .s-nav-link').click(function(){
		show_page( this );
		return false;
	});
	
  $('.s-project').hover(function(){
		$('.s-project-description, .s-project-overlay', $(this)).slideDown(200);
		$(this).addClass('s-project-hover');
	},function(){
		$('.s-project-description, .s-project-overlay', $(this)).slideUp(150);
		$(this).removeClass('s-project-hover');
	});

});

function hover_nav( link ){
	li = $(link).parent('li');
	if( !li.hasClass('s-nav-hover') ) $(link).stop().animate({paddingLeft: '10px'},100);
}

function blur_nav( link ){
	li = $(link).parent('li');
	if( !li.hasClass('s-nav-hover') ) $(link).stop().animate({paddingLeft: '0px'},100);
}

function show_nav( link ){
	$(link).animate({paddingLeft: '50px'},300, function(){ $(link).parent('li').addClass('s-nav-hover'); });
}

function hide_nav( link ){
	$('.s-nav li.s-nav-hover a').animate({
		paddingLeft: '0px'
	},100);
	li = $('.s-nav ul li');
	li.removeClass('s-nav-hover');
}

function show_page( link ){
	anchor = $('a[name="'+$(link).attr('href').substring(1)+'"]')
	$('html, body').stop().animate({scrollTop: anchor.offset().top-100}, 400);
}