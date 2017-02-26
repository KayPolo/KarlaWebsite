/*------------------------------------------------*/
//	Modified from: Single-Page Application (SPA) Class Exercise with Handlebars templating & jQuery only
// 	Previosly modified from http://tutorialzine.com/2015/02/single-page-app-without-a-framework/
/*------------------------------------------------*/

var app = app || {};

app.main = (function() {

	console.log('yay my code is working!');

	var pieces = [];

	function attachEvents() {
		// For 'Menu' button
		// $('#resumeIcon').click(function (e) {
		// 	e.preventDefault();
		// 	window.location.hash = '#resume';
		// 	var close = $('.close');
		// 	close.addClass('visible');
		// });			


		// For 'Close' button
		$('.close').click(function (e) {
			e.preventDefault();
			window.location.hash = '';
			// var page = $('.resume');
			// page.removeClass('visible');
			var page = $('.statement');
			page.removeClass('visible');
			var page = $('.contact');
			page.removeClass('visible');
			var page = $('.item1');
			page.removeClass('visible');
			var close = $('.close');
			close.removeClass('visible');

		});
		
			
			$('#statementIcon').click(function (e) {
			e.preventDefault();
			window.location.hash = '#statement';
			var close = $('.close');
			close.addClass('visible');
		});			


			$('#contactIcon').click(function (e) {
			e.preventDefault();
			window.location.hash = '#contact';
			var close = $('.close');
			close.addClass('visible');
		});

		$('#item1').click(function (e) {
			e.preventDefault();
			window.location.hash = '#aCubaninNY';
			var close = $('.close');
			close.addClass('visible');
		});			

	}

	// //*----------------------------------------
	// //	Load JSON
	// //----------------------------------------*
	// function loadData() {
	// 	$.getJSON( "artist.json", function( data ) {
	// 		console.log('json loaded!');
	// 		pieces = data;
	// 		generateAllStudentsHTML(pieces);
	// 		$(window).trigger('hashchange');
	// 	});
	// }




	function render(url) {
		var temp = url.split('/')[0];
		$('.siteContent .page').removeClass('visible');

		var	current = {
			// The "Homepage".
			'': function() {
				console.log("This should be the homepage");
				$('.siteContent .main').addClass('visible');
			},
			//Current pages.
			// '#resume': function() {
			// 	renderResumePage();
			// },

			'#statement': function() {
				renderStatementPage();
			},

			'#contact': function() {
				renderContactPage();
			},
			'#aCubaninNY': function() {
				renderItem1Page();
			},

		};

		if(current[temp]){
			current[temp]();
		}
	};


	// Render all pages
	// function renderResumePage(){
	// 	var page = $('.resume');
	// 	page.addClass('visible');

	// }

	function renderStatementPage(){
		var page = $('.statement');
		page.addClass('visible');
	}

	function renderContactPage(){
		var page = $('.contact');
		page.addClass('visible');
	}
	function renderItem1Page(){
		var page = $('.item1');
		page.addClass('visible');
	}




	var init = function(){
		console.log('Initializing app.');
		attachEvents();

		$(window).on('hashchange', function(){
			// On every hash change the render function is called with the new hash.
			// This is how the navigation of our app happens.
			render(decodeURI(window.location.hash));
		}).trigger('hashchange');
	};


	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);