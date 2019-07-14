(function (){


	var link = document.querySelectorAll('.cr-link');
	var mega = document.querySelectorAll('.cr-mega');


	if(window.innerWidth < 600){

		link.forEach( function(element, index) {
			if(element.querySelector('.cr-menu') || element.querySelector('.cr-mega')) {
			var img = document.createElement('IMG');
				img.setAttribute('src', 'img/plus.png');	
				img.setAttribute('class', 'cr-icon');	
				element.append(img);

				element.addEventListener('click', (e) => {
					
					e.target.nextElementSibling.classList.toggle('cr-active');
					var icon = e.target.closest('li').querySelector('.cr-icon');
					if(e.target.nextElementSibling.classList.contains('cr-active')){						
						icon.setAttribute('src', 'img/minus.png');
					} else {
						icon.setAttribute('src', 'img/plus.png');
					}

				})				

			}
		})
	}






	var btn = document.querySelector('.cr-m-menu');
	var nav = document.querySelector('.cr-nav-item');

	btn.addEventListener('click', (e) =>{
		e.preventDefault();
		nav.classList.toggle('cr-active');

	})







	link.forEach( function(element, index) {

		if(element.closest('.cr-right')){
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

		} else {
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
			})
		}
	});


})()
