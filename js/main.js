$(document).ready(function() {

	$("#signOut").click(function(){

	   $('#indexDiv').fadeOut( function(){
	        window.location.href = "../views/index.html";
		});

	});

});