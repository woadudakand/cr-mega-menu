(function (){

	// global variable
	var link = document.querySelectorAll('.cr-link');
	var mega = document.querySelectorAll('.cr-mega');
	// global variable

	// mobile menue start here
	if(window.innerWidth < 600){

		link.forEach( function(element, index) {
			if(element.querySelector('.cr-menu') || element.querySelector('.cr-mega')) {
			
			var img = document.createElement('IMG'); // img create for link icon

				img.setAttribute('src', 'img/down.svg'); // icon img	
				img.setAttribute('class', 'cr-icon');	//icon class
				element.append(img); // img append


				element.addEventListener('click', (e) => { // click on mobile link item
				
					// submenu and mega menu collapse start
					link.forEach((el2, ind) => {						
						el2.style.marginBottom = '0px';
						el2.querySelectorAll('.cr-mega').forEach((mega, ind2) => {
							mega.classList.remove('cr-active')
						})
						el2.querySelectorAll('.cr-menu').forEach((mega, ind2) => {
							mega.classList.remove('cr-active')
						})
						el2.querySelectorAll('.cr-icon').forEach((mega, ind2) => {
							mega.setAttribute('src', 'img/down.svg');
						})
					})
					// sub menu and mega menu collapse end

					// sub menu and mega menu add here
					let a = element.querySelector('a');
						a.nextElementSibling.classList.add('cr-active');					
					// sub menu and mega menu add here
				
					// get submenu and megamenu height
					var height = 0; 
					if(element.querySelector('.cr-menu')){
						height = element.querySelector('.cr-menu').offsetHeight;
					} else if (element.querySelector('.cr-mega')) {
						height = element.querySelector('.cr-mega').offsetHeight;
					} else {
						height = 0;
					}
					// get submenu and megamenu height

					element.style.marginBottom = height +'px'; // height use for this
					
					// icon change here on click
					var icon = e.target.closest('li').querySelector('.cr-icon');					
					if(element.querySelector('a').nextElementSibling.classList.contains('cr-active')){						
						icon.setAttribute('src', 'img/right.svg');
						icon.classList.add('minus');
					} else {
						icon.setAttribute('src', 'img/down.svg');
					}
					// icon change here on click
				});				

			}
		});
	}

	// main menu toggle
	var btn = document.querySelector('.cr-m-menu');
	var nav = document.querySelector('.cr-nav-item');
	btn.addEventListener('click', (e) =>{
		e.preventDefault();
		nav.classList.toggle('cr-active');

	});
	// main menu toggle

	// mobile menue end here

	// mega menu in desktop
	link.forEach( function(element, index) {

		if(element.closest('.cr-right')){ // mega menu size controle when menu stay right on the bar
			element.addEventListener('mouseenter', (e) => {
				var li = e.target;
				var marginSize = 0;
				
				marginSize = li.querySelector('.cr-mega');
				if (marginSize){				
					mega.forEach( function(element, index) {
						element.style.marginLeft = -marginSize.offsetWidth+'px';

						if(window.innerWidth < 1105) {
							element.style.marginLeft = - marginSize.offsetWidth + 100 +'px';
						}; 

						if (window.innerWidth < 1000) {
							element.style.marginLeft = '-250px';							
						}
						if (window.innerWidth < 600) {
							element.style.marginLeft = '0px';							
							element.style.left = '0px';							
						}
					});
				}
			})

		} else { // mega menu size controle when menu stay Left on the bar

			element.addEventListener('mouseenter', (e) => {
				var li = e.target;
				var marginSize = 0;
				
				marginSize = li.querySelector('.cr-mega');
				if (marginSize){
				
					mega.forEach( function(element, index) {
						element.style.marginLeft = -marginSize.offsetWidth/2+'px';

						if(window.innerWidth < 1105 && window.innerWidth > 1000) {
							element.style.marginLeft = -marginSize.offsetWidth/2 - 70 +'px';
						};

					});
				}
			});

		}
	});

})()
