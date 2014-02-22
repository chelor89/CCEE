    

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

	$("#signInButtonId").click(function(){
		window.location.href = "../views/main.html";
	});

	$("#imgFondo").width($(window).width());
	$("#imgFondo").height($(window).height());
	
});