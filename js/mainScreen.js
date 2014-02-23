mainScreen = function(welcomeScreen){

	this.welcomeScreen = welcomeScreen;
	this.hasPassword = false;

	this.render = function(){

		var mainDiv = $('<div id="mainDivMainPage">');
		mainDiv.appendTo(document.body);

		var navBar = $('<nav class="navbar navbar-default" role="navigation">');
			navBar.appendTo(mainDiv);

		var containerDiv = $('<div class="container-fluid">');
			containerDiv.appendTo(navBar);

		var div = $('<div class="navbar-header">');
			div.appendTo(containerDiv);

		div.append('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"></button>');
		div.append('<a class="navbar-brand" href="#">Cada vez falta menos !</a>');

		div = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">');
		div.appendTo(containerDiv);

		var mainUl = $('<ul class="nav navbar-nav navbar-right">');
			mainUl.appendTo(div);

		mainUl.append('<li><a href="#">Mis numeros</a></li>');

		var li = $('<li class="dropdown">');
			li.appendTo(mainUl);

		li.append('<a href="#" class="dropdown-toggle" data-toggle="dropdown">Reservas </a>');

		var secondUl = $('<ul class="dropdown-menu">');
			secondUl.appendTo(li);

		secondUl.append('<li><a href="#" >Registrar reserva</a></li>');
		secondUl.append('<li><a href="#" >Cancelar reserva</a></li>');
		secondUl.append('<li 	class="divider"></li>');
		secondUl.append('<li><a href="#" >Consultas</a></li>');

		li = $('<li class="dropdown">');
		li.appendTo(mainUl);

		li.append('<a href="#" class="dropdown-toggle" data-toggle="dropdown">Ventas </a>');

		secondUl = $('<ul class="dropdown-menu">');
		secondUl.appendTo(li);

		secondUl.append('<li><a href="#" >Registrar venta</a></li>');
		secondUl.append('<li><a href="#" >Cancelar venta</a></li>');
		secondUl.append('<li 	class="divider"></li>');
		secondUl.append('<li><a href="#" >Consultas</a></li>');

		mainUl.append('<li><a href="#">Estadisticas</a></li>');
		mainUl.append('<li><a href="#">Notificaciones</a></li>');

		li = $('<li class="dropdown">');
		li.appendTo(mainUl);

		li.append('<a href="#" class="dropdown-toggle" data-toggle="dropdown">Agustin </a>');

		secondUl = $('<ul class="dropdown-menu">');
		secondUl.appendTo(li);

		secondUl.append('<li><a href="#">Mis datos</a></li>');
		secondUl.append('<li><a href="#">Mi Grupo de Viaje (?)</a></li>');
		secondUl.append('<li 	class="divider"></li>');
		secondUl.append('<li><a href="#" onclick="itemClicked();">Cerrar Sesion</a></li>');

	};

	itemClicked = function(){

		var self = this;
	   $('#mainDivMainPage').fadeOut(function(){
	   		$('#mainDivMainPage').remove();
			self.welcomeScreen.render();
		});

	};

}
