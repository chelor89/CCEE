mainScreen = function(){


	this.numbers = [];

	this.render = function(nuevoUsuario){


		for (var i = 0; i < 7; i++){
			this.numbers.push(i+11111);
		}

		
		mainDiv = $('<div id="mainDivMainPage">');
		mainDiv.height($(window).height());
		mainDiv.appendTo(document.body);

		header = $('<header id="header">')
		header.appendTo(mainDiv);

		nav = $('<nav></nav>');
		nav.appendTo(header);

		mainUl = $('<ul></ul>');
		mainUl.appendTo(nav);

		mainUl.append('<li><button class="buttonHeader selected" id="1">INICIO</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="2">MIS NUMEROS</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="3">SORTEOS</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="4">ESTADISTICAS</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="5">NOTIFICACIONES</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="6">SALIR</button></li>');

		nav.append('<button id="userButton">Agustin</button>');

		containerDiv = $('<div id="container">');
		$('#mainDivMainPage').append(containerDiv);

		section = $('<section id="section">');
		section.height($(window).height()-header.height());
		section.appendTo(containerDiv);

		wrapper = $('<div class="wrapper">');
		wrapper.appendTo('section');

		this.actions();

		this.renderHome(nuevoUsuario);

	};

	this.renderHome = function(nuevoUsuario){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','right');
		optionsDiv.css('margin-right','50px');

		if (nuevoUsuario){
			optionsDiv.append('<div class="mainText">Bienvenido!</div>');
			optionsDiv.append('<br>');
			optionsDiv.append('<p>Para comenzar registra tus numeros entrando a <i>Mis Numeros</i>.</p>');
		}
		else{
			optionsDiv.append('<div class="mainText">Hola!</div>');
			optionsDiv.append('<br>');
			optionsDiv.append('<p>Deja de vender rifas y ponete a laburar.</p>');
		}

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','left');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/64.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				//$('#userButton').fadeIn('slow',function(){
					optionsDiv.fadeIn('slow');
				//});
			});		
		});

	};	

	this.renderNumbers = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','left');
		optionsDiv.css('height','540px');
		optionsDiv.css('margin-left','20px');
		optionsDiv.css('z-index','1');

		buttonLibres = $('<button class="optionButton" id="nLibres">');
		buttonLibres.text("Libres");
		buttonLibres.appendTo(optionsDiv);

		buttonVendidos = $('<button class="optionButton" id="nVendidos">');
		buttonVendidos.text("Vendidos");
		buttonVendidos.appendTo(optionsDiv);

		buttonReservados = $('<button class="optionButton" id="nReservados">');
		buttonReservados.text("Reservados");
		buttonReservados.appendTo(optionsDiv);

		listDiv = $('<div id="listDiv">');
		listDiv.appendTo(optionsDiv);
		listDiv.css('height','450px');
		listDiv.css('margin-top','30px');
		listDiv.css('margin-left','-15px');
		//listDiv.css('display','none');

		ulNumbers = $('<ul id="ulNumbers">');
		ulNumbers.appendTo(listDiv);
//		ulNumbers.css('margin-left','-60px');

		li = $('<li class="liNumber" id="agregar">');
		li.appendTo(ulNumbers);
		nuevoNumero = $('<input id="nuevoNumero" type="text hidden" placeholder="Escribe un numero.." class="input-medium">');
		nuevoNumero.css('border','none');
		nuevoNumero.css('background','none');
		nuevoNumero.appendTo(li);

		divActions = $('<div class="divActions" id="divActionsInput">');
		divActions.appendTo(li);
		divActions.css('float','right');
		divActions.css('display','none');
		agregar = $('<button class="optionButtonNumber" id="agregar">');
		agregar.text("Agregar");
		agregar.appendTo(divActions);

		var selectedBefore = null;

		$('#agregar').click(function(event){

			divActions = $('#divActionsInput');
			if (selectedBefore){
				selectedBefore.fadeOut('fast',function(){
					divActions.fadeIn('slow');
					selectedBefore = divActions;
				});
			}
			else{
				divActions.fadeIn('slow');
				selectedBefore = divActions;
			}

		});

		nuevoNumero.keyup(function(){
			//buscar numero
			/*if (!existe)
				habilitar boton agregar
			else{
				desabilitar boton agregar
				listar coincidencias
			}
			*/
		});

		this.numbers.forEach(function(number){

			li = $('<li class="liNumber" id="numero'+number+'">');
			li.html(number);
			li.appendTo(ulNumbers);

			divActions = $('<div class="divActions" id="divActions'+number+'">');
			divActions.appendTo(li);
			divActions.css('float','right');
			divActions.css('display','none');

			vender = $('<button class="optionButtonNumber" id="vender'+number+'">');
			vender.text("Vender");
			vender.appendTo(divActions);

			reservar = $('<button class="optionButtonNumber" id="reservar'+number+'">');
			reservar.text("Reservar");
			reservar.appendTo(divActions);

			borrar = $('<button class="optionButtonNumber" id="borrar'+number+'">');
			borrar.text("Borrar");
			borrar.appendTo(divActions);

			$('#numero'+number).mouseover(function(event){

				divActions = $('#divActions'+number);
				if (selectedBefore){
					selectedBefore.fadeOut('fast',function(){
						divActions.fadeIn('slow');
						selectedBefore = divActions;
					});
				}
				else{
					divActions.fadeIn('slow');
					selectedBefore = divActions;
				}

			});

		});











		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','right');
		imageDiv.css('margin-right','-60px');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/24.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				$('.optionsDiv').fadeIn('slow',function(){
					listDiv.fadeIn('slow');					
				});
			});
		});

		$('.optionButton').click(function(event) {

			deselect = $('.optionButtonSelected');
			deselect.removeClass('optionButtonSelected');
			deselect.addClass('optionButton');

			selected = $('#'+event.currentTarget.id);
			selected.removeClass('optionButton');
			selected.addClass('optionButtonSelected');

		});

		select = $('#nLibres');
		select.removeClass('optionButton');
		select.addClass('optionButtonSelected');

	}

	this.renderDraws = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','right');
		optionsDiv.css('margin-right','150px');

		optionsDiv.append('<div class="mainText">Sorteos</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Aca van las opciones.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','left');
		imageDiv.css('margin-left','100px');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/15.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	}

	this.renderStatistics = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','left');
		optionsDiv.css('margin-left','100px');

		optionsDiv.append('<div class="mainText">Estadisticas</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Aca van las opciones.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','right');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/48.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	}

	this.renderNotifications = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','right');
		optionsDiv.css('margin-right','150px');

		optionsDiv.append('<div class="mainText">Notificaciones</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Aca van las opciones.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','left');
		imageDiv.css('margin-left','100px');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/9.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	}

	this.renderUser = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','left');
		optionsDiv.css('margin-left','100px');

		optionsDiv.append('<div class="mainText">Mis datos</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Aca van las opciones.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','right');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/48.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	}

	this.actions = function(){

		var self = this;

		$('#userButton').click(function(event) {

			optionsDiv = $('#optionsDiv');
			imageDiv = $('#imageDiv');
			mainDiv = $('#mainDivMainPage');

			$('.selected').removeClass('selected');

			optionsDiv.fadeOut('slow',function(){
				optionsDiv.remove();
				imageDiv.fadeOut('slow',function(){
					imageDiv.remove();
					self.renderUser();
				});	
			});	

		});

		$('.buttonHeader').click(function(event) {

			optionsDiv = $('#optionsDiv');
			imageDiv = $('#imageDiv');
			mainDiv = $('#mainDivMainPage');

			$('.selected').removeClass('selected');
			$('#'+event.currentTarget.id).addClass('selected');

			optionsDiv.fadeOut('slow',function(){
				optionsDiv.remove();
				imageDiv.fadeOut('slow',function(){
					imageDiv.remove();
					switch (parseInt(event.currentTarget.id)){
						case 1:
							self.renderHome(false);
							break;
						case 2:
							self.renderNumbers();
							break;
						case 3:
							self.renderDraws();
							break;	
						case 4:
							self.renderStatistics();
							break;
						case 5:
							self.renderNotifications();
							break;
						case 6:
						   	mainDiv.fadeOut('slow',function(){
						   		mainDiv.remove();
						   		var screenWelcome = new welcomeScreen();
				   				screenWelcome.render();
							});
							break;															
					}

				});	
			});			
		});
	}
}
