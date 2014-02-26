function welcomeScreen() {

	this.image = "../assets/images/SS-Australia-011.jpg";

	this.render = function(){

		mainDiv = $('<div id="mainDiv">');
		mainDiv.appendTo(document.body);

		mainDiv.append($('<img id="imgFondo">'));
			$('#imgFondo').width($(window).width());
			$('#imgFondo').height($(window).height());
			$('#imgFondo').attr("src", this.image);		
		
		modalDiv = $('<div id="modalDiv" class="modal-content">');
		modalDiv.appendTo(mainDiv);

		div = $('<div class="bs-example bs-example-tabs">');
		div.appendTo(modalDiv);

		ul = $('<ul id="myTab" class="nav nav-tabs">');
		ul.append($('<li class="welcomeText active"><a href="#signin" data-toggle="tab">Ingresar</a></li>'));
		ul.append($('<li class="welcomeText"><a href="#signup" data-toggle="tab">Registrarse</a></li>'));

		div.append(ul);

		div = $('<div class="modal-body">');
		div.appendTo(modalDiv);

		divMyTabContent =  $('<div id="myTabContent" class="tab-content">');

		div.append(divMyTabContent);

		divSignIn = $('<div id="signin" class="tab-pane fade active in">');
		divSignIn.appendTo(divMyTabContent);

		div = $('<div class="control-group">');
		div.appendTo(divSignIn);
		div.append($('<label class="welcomeText control-label">Cedula:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input id="userLogIn" type="text" class="welcomeText form-control" placeholder="12345678" class="input-medium">'));

		divSignIn.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignIn);
		div.append($('<label class="welcomeText control-label">Password:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input required="" id="passwordSignIn" class="welcomeText form-control" type="password" placeholder="********" class="input-medium">'));

		divSignIn.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignIn);

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);

		center = $('<center>');
		center.appendTo(divClassControl);
		center.append($('<button id="confirmsignin" class="welcomeText buttonWelcomePage">Ingresar</button>'));

		divSignUp = $('<div id="signup" class="tab-pane fade">');
		divSignUp.appendTo(divMyTabContent);

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);
		div.append($('<label class="welcomeText control-label">Cedula:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input id="userSignUp" class="welcomeText form-control" type="text" placeholder="12345678" class="input-medium">'));

		divSignUp.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);
		div.append($('<label class="welcomeText control-label" for="Email">Mail:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input id="email" class="welcomeText form-control" type="text" placeholder="mail@mail.com" class="input-large">'));
		
		divSignUp.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);
		div.append($('<label class="welcomeText control-label">Password:</label>'));

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);
		divClassControl.append($('<input id="passwordSignUp" class="welcomeText form-control" type="password" placeholder="********" class="input-medium">'));

		divSignUp.append('<br>');

		div = $('<div class="control-group">');
		div.appendTo(divSignUp);

		divClassControl = $('<div class="controls">');
		divClassControl.appendTo(div);

		center = $('<center>');
		center.appendTo(divClassControl);
		center.append($('<button id="confirmsignup" class="welcomeText buttonWelcomePage">Registrarse</button>'));

		this.actions();

	}

	this.actions = function(){
		
		var self = this;

		$('#imgFondo').load(function(){
			$("#mainDiv").fadeIn('slow',function(){
				setTimeout(function(){
					$("#modalDiv").fadeIn(600);
				},400);
			});
		});

		$("#confirmsignin").click(function(){
			if (self.checkFields("logIn")){
			   	$("#modalDiv").fadeOut(600);
				setTimeout(function(){
				   $('#mainDiv').fadeOut( function(){
				   		$('#mainDiv').remove();
				   			var screenMain = new mainScreen();
				   			screenMain.render(false);
					});
				},500);
			}
			else{
				alert('WrongFields');
			}
		});

		$("#confirmsignup").click(function(){
			if (self.checkFields("logIn")){
			   	$("#modalDiv").fadeOut(600);
				setTimeout(function(){
				   $('#mainDiv').fadeOut( function(){
				   		$('#mainDiv').remove();
				   			var screenMain = new mainScreen();
				   			screenMain.render(true);
					});
				},500);
			}
			else{
				alert('WrongFields');
			}
		});

	}

	this.checkFields = function(type){
		return true;
	}

}


