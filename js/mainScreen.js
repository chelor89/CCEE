mainScreen = function(welcomeScreen){

	this.welcomeScreen = welcomeScreen;
	this.hasPassword = false;

	this.render = function(){

		var mainDiv = $('<div id="mainDivMainPage">');
		mainDiv.appendTo(document.body);

		var header = $('<header></header>')
			header.appendTo(mainDiv);

		var nav = $('<nav></nav>');
		nav.appendTo(header);

		var mainUl = $('<ul></ul>');
			mainUl.appendTo(nav);

		mainUl.append('<li><a href="#" class="selected" id="start_nav">INICIO</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="numbers_nav">MIS NUMEROS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="booking_nav">RESERVAS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="sales_nav">VENTAS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="statistics_nav">ESTADISTICAS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="notifications_nav">NOTIFICACIONES</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="signOut" onclick="itemClicked()">SALIR</a></li>');

		nav.append('<a href="#" class="hire_me">Agustin</a>');

		var containerDiv = $('<div id="container">');
			containerDiv.appendTo(mainDiv);

		var section = $('<section id="section">');
			section.appendTo(containerDiv);

		var wrapper = $('<div class="wrapper">');
			wrapper.appendTo('section');

		var rightDiv = $('<div class="right">');
			rightDiv.appendTo(wrapper);

		rightDiv.append('<div class="hello">Hola!</div>');
		rightDiv.append('<br>');
		rightDiv.append('<p>Deja de vender rifas y ponete a laburar.</p>');

		var leftDiv = $('<div class="left">');
			leftDiv.appendTo(wrapper);

		leftDiv.append('<img id="imgHome" src="../assets/images/64.png"/>');

	};

	itemClicked = function(){

		var self = this;
	   $('#mainDivMainPage').fadeOut(function(){
	   		$('#mainDivMainPage').remove();
			self.welcomeScreen.render();
		});

	};

}
