mainScreen = function(welcomeScreen){

	this.welcomeScreen = welcomeScreen;
	this.hasPassword = false;

	this.render = function(){

		var mainDiv = $('<div id="mainDivMainPage">');
		mainDiv.appendTo(document.body);

		var header = $('<header></header>')
			header.appendTo(mainDiv);

		var divNav = $('<div class="inner_header">');
			divNav.appendTo(header);

		divNav.append('<h1><div class="logo" onclick="itemClicked();"></div></h1>');

		var nav = $('<nav></nav>');
		divNav.append(nav);

		var mainUl = $('<ul></ul>');
			mainUl.appendTo(nav);

		mainUl.append('<li><a href="#" class="selected" id="start_nav">Inicio</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="numbers_nav">Mis numeros</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="booking_nav">Reservas</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="sales_nav">Ventas</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="statistics_nav">Estadisticas</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="notifications_nav">Notificaciones</a></li>');
		mainUl.append('<li class="separator">/</li>');

		li = $('<li class="dropdown"></li>');

		li.appendTo(mainUl);

		li.append('<a href="#" class="dropdown-toggle" data-toggle="dropdown">Agustin </a>');

		secondUl = $('<ul class="dropdown-menu">');
		secondUl.appendTo(li);

		secondUl.append('<li><a href="#">Mis datos</a></li>');
		secondUl.append('<li><a href="#">Mi Grupo de Viaje (?)</a></li>');
		secondUl.append('<li 	class="divider"></li>');
		secondUl.append('<li><a href="#" onclick="itemClicked();">Cerrar Sesion</a></li>');

		var containerDiv = $('<div id="container">');
			containerDiv.appendTo(mainDiv);

		var section = $('<section id="section">');
			section.appendTo(containerDiv);

		var wrapper = $('<div class="wrapper">');
			wrapper.appendTo('section');

		var rightDiv = $('<div class="right">');
			rightDiv.appendTo(wrapper);

		rightDiv.append('<div class="hello">Hola!</div>');
		rightDiv.append('<p>My name is <span>Tomek Nowak</span> and I am <span>UI/UX designer</span> from Poland. I create high converting websites.</p>');

		var leftDiv = $('<div class="left">');
			leftDiv.appendTo(wrapper);

		leftDiv.append('<img src="../assets/images/64.png" style = "margin-top: 0"/>');

	};

	itemClicked = function(){

		var self = this;
	   $('#mainDivMainPage').fadeOut(function(){
	   		$('#mainDivMainPage').remove();
			self.welcomeScreen.render();
		});

	};

}
