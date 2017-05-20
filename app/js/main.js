$( document ).ready(function() {


	$(document).on("click", ".searchEvent", function(){

		

		if($('.searchHidden').css('display') == 'flex'){
			$('.searchHidden').css('display','none');
		}
		else{
			$('.searchHidden').css('display','flex');
		}

		$('.searchEvent').toggleClass('activeSearch');


	});

	$(document).on("click", ".menuEvent", function(){

		

		if($('.menuHidden').css('display') == 'block'){
			$('.menuHidden').css('display','none');
		}
		else{
			$('.menuHidden').css('display','block');
		}

		$(this).toggleClass('activeMenu');
		$(this).toggleClass('fa-times');
		$(this).toggleClass('fa-bars');
		$(this).next().toggleClass('activeMenu');


	});








});