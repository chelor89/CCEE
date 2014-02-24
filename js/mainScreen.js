mainScreen = function(welcomeScreen){

	this.instance = null;
	this.welcomeScreen = welcomeScreen;
	this.hasPassword = false;

	this.render = function(){

		var mainDiv = $('<div id="mainDivMainPage">');
			mainDiv.appendTo(document.body);

		var header = $('<header id="header">')
			header.appendTo(mainDiv);

		var nav = $('<nav></nav>');
			nav.appendTo(header);

		var mainUl = $('<ul></ul>');
			mainUl.appendTo(nav);

		mainUl.append('<li><a href="#" class="selected" id="start_nav" onclick="itemClicked(1)">INICIO</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="numbers_nav" onclick="itemClicked(2)">MIS NUMEROS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="booking_nav" onclick="itemClicked(3)">RESERVAS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="sales_nav" onclick="itemClicked(4)">VENTAS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="statistics_nav" onclick="itemClicked(5)">ESTADISTICAS</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="notifications_nav" onclick="itemClicked(6)">NOTIFICACIONES</a></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><a href="#" id="signOut" onclick="itemClicked(7)">SALIR</a></li>');

		nav.append('<a href="#" class="proButton">Agustin</a>');

		this.renderHome();

	};


	this.renderHome = function(){

		var containerDiv = $('<div id="container">');
		$('#mainDivMainPage').append(containerDiv);

		var section = $('<section id="section">');
			section.appendTo(containerDiv);

		var wrapper = $('<div class="wrapper">');
			wrapper.appendTo('section');

		var rightDiv = $('<div id="rightDiv" class="right">');
			rightDiv.appendTo(wrapper);

		rightDiv.append('<div class="hello">Hola!</div>');
		rightDiv.append('<br>');
		rightDiv.append('<p>Deja de vender rifas y ponete a laburar.</p>');

		var leftDiv = $('<div id="leftDiv" class="left">');
			leftDiv.appendTo(wrapper);

		leftDiv.append('<img id="imgHome" src="../assets/images/64.png"/>');

		leftDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				rightDiv.fadeIn('slow');
			});		
		});

	};

	itemClicked = function(id){

		var self = this;

		switch (parseInt(id)){
			case 1:
				//renderHome();
				break;
			case 2:
				//primero tiene q salir el menos ancho que es el que no tiene el dibujo
				$('#rightDiv').fadeOut('slow',function(){
					$('#leftDiv').fadeOut('slow',function(){
						$('#container').remove();
					});	
				});
				
				//renderNumbers();
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;	
			case 6:
				break;
			case 7:
				var self = this;
			   	$('#mainDivMainPage').fadeOut('slow',function(){
			   		$('#mainDivMainPage').remove();
					self.welcomeScreen.render();
				});
				break;															
		}

	};

}
