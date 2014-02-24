function welcomeScreen() {

	this.image = "pepe";
	this.mainScreen = null;

	this.render = function(){

		var mainDiv = $('<div id="mainDiv">');
		mainDiv.appendTo(document.body);

		mainDiv.append($('<img id="imgFondo">'));
			$('#imgFondo').width($(window).width());
			$('#imgFondo').height($(window).height());
			$('#imgFondo').attr("src", "../assets/images/SS-Australia-011.jpg");		
		
		var modalDiv = $('<div id="modalDiv" class="modal-content">');
			modalDiv.appendTo(mainDiv);

		modalDiv.append('<br>');

		var div = $('<div class="bs-example bs-example-tabs">');
			div.appendTo(modalDiv);

		var ul = $('<ul id="myTab" class="nav nav-tabs">');
			ul.append($('<li class="active"><a href="#signin" data-toggle="tab">Ingresar</a></li>'));
			ul.append($('<li class=""><a href="#signup" data-toggle="tab">Registrarse</a></li>'));

		div.append(ul);

		div = $('<div class="modal-body">');
		div.appendTo(modalDiv);

		var divMyTabContent =  $('<div id="myTabContent" class="tab-content">');

		div.append(divMyTabContent);

		var divSignIn = $('<div id="signin" class="tab-pane fade active in">');
			divSignIn.appendTo(divMyTabContent);

		div = $('<div class="control-group">');
		div.appendTo(divSignIn);
		div.append($('<label class="control-label" for="userid">Cedula:</label>'));

		var divClassControl = $('<div class="controls">');
			divClassControl.appendTo(div);
			divClassControl.append($('<input required="" id="userid" name="userid" type="text" class="form-control" placeholder="12345678" class="input-medium" required="">'));

		divSignIn.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignIn);
		div.append($('<label class="control-label" for="passwordinput">Password:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input required="" id="passwordinput" name="passwordinput" class="form-control" type="password" placeholder="********" class="input-medium">'));

		div = $('<div class="control-group">');
		div.appendTo(divSignIn);
		div.append($('<label class="control-label" for="signin"></label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		var center = $('<center>');
		center.appendTo(divClassControl);
		center.append($('<button id="signin" name="signin" class="btn btn-warning">Ingresar</button>'));

		var divSignUp = $('<div id="signup" class="tab-pane fade">');
			divSignUp.appendTo(divMyTabContent);

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);
		div.append($('<label class="control-label" for="userid">Cedula:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input id="userid" name="userid" class="form-control" type="text" placeholder="12345678" class="input-large" required="">'));

		divSignUp.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);
		div.append($('<label class="control-label" for="Email">Mail:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input id="Email" name="Email" class="form-control" type="text" placeholder="mail@mail.com" class="input-large" required="">'));
		
		divSignUp.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);
		div.append($('<label class="control-label" for="password">Password:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input id="password" name="Password" class="form-control" type="text" placeholder="********" class="input-large" required="">'));

		divSignUp.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);
		div.append($('<label class="control-label" for="confirmsignup"></label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		center = $('<center>');
		center.appendTo(divClassControl);
		center.append($('<button id="confirmsignup" name="confirmsignup" class="btn btn-warning">Registrarse</button>'));

		$("#mainDiv").fadeIn('slow',function(){
			setTimeout(function(){
				$("#modalDiv").fadeIn(600);
			},400);
		});

		var self = this;

		$("#signin").click(function(){
		   	$("#modalDiv").fadeOut(600);
			setTimeout(function(){
			   $('#mainDiv').fadeOut( function(){
			   		$('#mainDiv').remove();
			   		if (!self.mainScreen)
			   			self.mainScreen = new mainScreen();
			   		self.mainScreen.render();
				});
			},500);
		});

	}

}


