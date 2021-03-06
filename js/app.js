// acces token : 82996312dc
//tournament id: 19389
//namespace
var APP = APP || {};

// self-invoking anonymous function
// Een functie die word aangeroepen zonder gebonden te zijn aan een identifier, een naam
(function() {

	'ude strict';

	//data objecten
	// Alle verschillende pagina's die je nodig hebt.
	APP.schedule = [
    { date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
    { date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
    { date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
    { date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
    { date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
    { date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
    { date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
    { date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
    { date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
    { date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
    ];

	APP.ranking = [
    { team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
    { team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
    { team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
    { team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
    { team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
    ];

	APP.game = [
    { score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
    ];


	//controller Init
	// hier word de router functie geinitialiseerd.
	// In deze functie word verwezen naar de app.page object
	//controller Init
	APP.controller = {
		init: function (){
			// initialize router
			APP.router.init();
		}
	};

	//Router
	APP.router = {
		init: function () {
	  		routie({
			    '/schedule': function() {
			    	APP.page.schedule();
				},
			    '/ranking': function() {
			    	APP.page.ranking();
			    },

			    '/game': function() {
			    	APP.page.game();
			    },

			    '/movies': function() {
			    	APP.page.movies();
			    }
			    '*': function() {
			    	APP.page.render('schedule');
			    }
			});
		},

	// 	//hier wordt bekeken welke pagina er geladen moet worden, d
		change: function () {
	        	var route = window.location.hash.slice(2),
                	sections = qwery('section'),
                 	section = qwery('[data-route=' + route + ']')[0];

        		//Show active section, hide all other
        		if (section) {
             			for (var i=0; i < sections.length; i++){
             			sections[i].classList.remove('active');
             		}
             		section.classList.add('active');
                }

             // Default route
             	if (!route) {
             		sections[0].classList.add('active');
             	}

		}
	};
// //get
// promise.get('http://dennistel.nl/movies').then(function(error, text, xhr) {
//     if (error) {
//         alert('Error ' + xhr.status);
//         return;
//     }
//     alert('The page contains ' + text.length + ' character(s).');
//     console.log(text);

    
 // });


	//section

APP.page = {
	schedule: function(){
	Transparency.render(document.getElementById('schedule'), APP.schedule);
	},
	
	game: function () {
	Transparency.render(document.getElementById('game'), APP.game);
	console.log("render page 2");
	},

	ranking: function () {
	Transparency.render(document.getElementById('ranking'), APP.ranking);
	console.log("render page 3");
	},

	movies: function () {
	promise.get('http://dennistel.nl/movies').then(function(error, response, xhr) {
		if (error) {
			alert('Error ' + xhr.status);
			return;
		}
		//alert('The page contains ' + response.length + ' character(s).');			
		//console.log('response', response);


		var getData = JSON.parse(response)
				
		//var postData = JSON.stringify(getData);

		Transparency.render(document.getElementById('moviesData'), getData);
			});
		}
	}
	
	//Misschien een aparte functie maken om je data op te halen. DRY werken ;)
	APP.dataOphaler = function(pagina, url) {
		//Je Promise call
	}
	
	//En maak dan ook gelijk een aparte data verzender
	APP.dataVerzender = function() {
		//Haal bevoorbeeld de gameId van de game die je wilt aanpassen uit de header url. 
	}

	//hiermee wordt de applicatie gestart.
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});
	
})();
