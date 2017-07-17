$( document ).ready(function() {
	$(document).on("click", "#association", function(){
		$('#dropDownAssociation').toggle();
		var chevron = $(this).find('i');
		chevron.toggleClass('fa-chevron-down');
		chevron.toggleClass('fa-chevron-up');
	});
	$(document).on("click", "#helpWebSite", function(){
		$('#dropDownHelp').toggle();
		var chevron = $(this).find('i');
		chevron.toggleClass('fa-chevron-down');
		chevron.toggleClass('fa-chevron-up');
	});
	$(document).on("click", ".colMenu", function(){
		$('#showMenu').toggle();
		var chevron = $(this).find('i');
		chevron.toggleClass('fa-bars');
		chevron.toggleClass('fa-times');	
	});
});