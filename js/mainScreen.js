mainScreen = function(){

	this.hasPassword = false;

	this.render = function(){

		mainDiv = $('<div id="mainDivMainPage">');
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
		mainUl.append('<li><button class="buttonHeader" id="3">RESERVAS</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="4">VENTAS</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="5">SORTEOS</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="6">ESTADISTICAS</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="7">NOTIFICACIONES</button></li>');
		mainUl.append('<li class="separator">/</li>');
		mainUl.append('<li><button class="buttonHeader" id="8">SALIR</button></li>');

		nav.append('<a href="#" class="proButton">Agustin</a>');

		containerDiv = $('<div id="container">');
		$('#mainDivMainPage').append(containerDiv);

		section = $('<section id="section">');
		section.appendTo(containerDiv);

		wrapper = $('<div class="wrapper">');
		wrapper.appendTo('section');

		this.actions();

		this.renderHome();

	};

	this.renderHome = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','right');

		optionsDiv.append('<div class="hello">Hola!</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Deja de vender rifas y ponete a laburar.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','left');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/64.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	};	

	this.renderNumbers = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','left');
		optionsDiv.css('margin-left','150px');

		optionsDiv.append('<div class="hello">Mis numeros</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Aca van las opciones.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','right');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/24.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	}

	this.renderBookings = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','right');
		optionsDiv.css('margin-right','150px');

		optionsDiv.append('<div class="hello">Reservas</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Aca van las opciones.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','left');
		imageDiv.css('margin-left','100px');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/29.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	}

	this.renderSales = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','left');
		optionsDiv.css('margin-left','150px');

		optionsDiv.append('<div class="hello">Ventas</div>');
		optionsDiv.append('<br>');
		optionsDiv.append('<p>Aca van las opciones.</p>');

		imageDiv = $('<div id="imageDiv" class="bigDiv">');
		imageDiv.appendTo(wrapper);
		imageDiv.css('float','right');
		imageDiv.css('margin-right','100px');

		img = $('<img id="imgHome">');
		img.appendTo(imageDiv);
		img.attr("src", "../assets/images/8.png");	

		imageDiv.fadeIn('slow',function(){
			$('#header').fadeIn('slow',function(){
				optionsDiv.fadeIn('slow');
			});		
		});

	}

	this.renderDraws = function(){

		wrapper = $('.wrapper');

		optionsDiv = $('<div id="optionsDiv" class="smallDiv">');
		optionsDiv.appendTo(wrapper);
		optionsDiv.css('float','right');
		optionsDiv.css('margin-right','150px');

		optionsDiv.append('<div class="hello">Sorteos</div>');
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

		optionsDiv.append('<div class="hello">Estadisticas</div>');
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

		optionsDiv.append('<div class="hello">Notificaciones</div>');
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

	this.actions = function(){

		var self = this;

		$('.buttonHeader').click(function(event) {

			optionsDiv = $('#optionsDiv');
			imageDiv = $('#imageDiv');
			mainDiv = $('#mainDivMainPage');

			$('.selected').removeClass('selected');
			$('#'+event.currentTarget.id).addClass('selected');

			/*buttons = $('.buttonHeader');
			$.makeArray(buttons).forEach(function(button) {
			    if (button.id != event.currentTarget.id)
			    	$(button).fadeOut(400);
			});

			separators = $('.separator');
			$.makeArray(separators).forEach(function(separator) {
			    if (separator.id != event.currentTarget.id)
			    	$(separator).fadeOut(400);
			});*/

			optionsDiv.fadeOut('slow',function(){

				optionsDiv.remove();
				imageDiv.fadeOut('slow',function(){
					imageDiv.remove();
					switch (parseInt(event.currentTarget.id)){
						case 1:
							self.renderHome();
							break;
						case 2:
							self.renderNumbers();
							break;
						case 3:
							self.renderBookings();
							break;
						case 4:
							self.renderSales();
							break;
						case 5:
							self.renderDraws();
							break;	
						case 6:
							self.renderStatistics();
							break;
						case 7:
							self.renderNotifications();
							break;
						case 8:
						   	mainDiv.fadeOut('slow',function(){
						   		mainDiv.remove();
						   		var screenWelcome = new welcomeScreen();
				   				screenWelcome.render();
							});
							break;															
					}

					/*buttons = $('.buttonHeader');
					$.makeArray(buttons).forEach(function(button) {
					    if (button.id != event.currentTarget.id)
					    	$(button).fadeIn(400);
					});
			
					separators = $('.separator');
					$.makeArray(separators).forEach(function(separator) {
					    if (separator.id != event.currentTarget.id)
					    	$(separator).fadeIn(400);
					});*/

				});	
			});			
		});
	}
}
