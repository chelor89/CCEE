    

/*
$(document).ready(function() {
  $.ajax({
      url: "http://rest-service.guides.spring.io/greeting"
  }).then(function(data) {
     $('#greeting-id').val(data.id);
     $('#greeting-content').val("data.content");
  });
});*/

$(document).ready(function() {

	$("#signin").click(function(){

	   	$("#modalDiv").fadeOut(600);

		setTimeout(function(){
		   $('#mainDiv').fadeOut( function(){
		        window.location.href = "../views/main.html";
			});
		},500);

	});

	$("#imgFondo").width($(window).width());

	$("#imgFondo").height($(window).height());

	$("#imgFondo").attr("src", "../assets/images/4.jpg");

	$("#mainDiv").fadeIn('slow',function(){
		setTimeout(function(){
			$("#modalDiv").fadeIn(600);
		},400);
	});


	
});

    
  