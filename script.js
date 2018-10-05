// /* If you're feeling fancy you can add interactivity 
//     to your site with Javascript */

// // prints "hi" in the browser's dev tools console
// console.log('hi');



// width:${circleDiameter*2}vw; 
// 						height:${circleDiameter*2}vw;


		

// 		var timer = 0, //this incrementally increases with each loop 
// 				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
// 				circleDiameter = 0,
// 				direction = false,
// 				totalLength = 100;


// 		for (var i = 0; i < totalLength; i++) {
			

// 			setTimeout(function(){ // include the settimeout function

// 				//creating element
// 				var container = document.createElement("div");
// 				container.className = "container";

// 					if(counter % 5 == 0){
// 						if (direction) {
// 							// if direction is true, change it to false
// 							direction = false;
// 						}else{
// 							// if direction is false, change it to true
// 							direction = true;
// 							circleDiameter = 1;
// 						}
// 					}

// 					//incrementing the diameter
// 					if(!direction){
// 						// if direction = false
// 						circleDiameter--;
// 					}else{
// 						// if direction = true
// 						circleDiameter++;
// 					}
// 					// percentage of progress through array
// 					var progress = counter/(totalLength - 1);
// 					// producing the individual red and blue values through incrementing to total value of subtraction/addition
// 					var red = Math.ceil(255 - (progress*255));
// 					var blue = Math.ceil(progress*255);

// 					// constructing the color style string
// 					var color = "rgb(" + red + ", 0, " + blue + ")";
// 					// percentage for opacity
// 					var percentage = circleDiameter / 5;

// 					//template literal with diameter injected as inline css
// 					container.innerHTML = `

// 						<div style="
// 						background-color:${color}; 
// 						opacity:${percentage}; 
// 						width:${circleDiameter*2}vw; 
// 						height:${circleDiameter*2}vw;" class="circle"></div>

// 					`

// 					var child = document.getElementsByClassName("container")[0]

// 					if(child){
// 						child.remove()
// 					}
					

// 					document.getElementById("wrapper").appendChild(container)

// 					counter++;

// 				}, timer)

// 				timer += 100; //update timer to make sure the next instance happens after this one	
// 			}

	



		
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(255 - (progress*0));
					// var blue = Math.ceil(progress*0);

					var color = "rgb(" + 140 + ", 26, " + 26 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartone"></div>

					`
					var child = document.getElementsByClassName("container")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper").appendChild(container)

					counter++;

				}, timer)

				timer += 100; //update timer to make sure the next instance happens after this one	
			}




// HEART 2
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container2";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 140 + ", 26, " + 26 + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartthree"></div>

					`
					var child = document.getElementsByClassName("container2")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper2").appendChild(container)

					counter++;

				}, timer)

				timer += 100; //update timer to make sure the next instance happens after this one	
			}

	


// HEART THREE/ CONTAINER 3/ WRAPPER THREE / top right
		var timer = 0, //this incrementally increases with each loop 
				counter = 0, // you will need a counter separate from `i` to increase for each setTimeout (separately from the for loop)
				circleDiameter = 0,
				direction = false,
				totalLength = 500;


		for (var i = 0; i < totalLength; i++) {

			setTimeout(function(){ 

				var container = document.createElement("div");
				container.className = "container3";

					if(counter % 5 == 0){
						if (direction) {
							direction = false;
						}else{
							direction = true;
							circleDiameter = 1;
						}
					}

					if(!direction){
						circleDiameter--;
					}else{
						circleDiameter++;
					}
					var progress = counter/(totalLength - 1);
					// var red = Math.ceil(0 - (progress*0));
					// var blue = Math.ceil(progress*0);

						var color = "rgb(" + 140 + ", 26, " + 26  + ")"; 
					// percentage for opacity
					var percentage = circleDiameter / 5;
		
					container.innerHTML = `

						<div style="
						background-color:${color}; 
						opacity:${percentage}; 
						width:${circleDiameter*2}vw; 
						height:${circleDiameter*2}vw;" class="heartthree"></div>

					`
					var child = document.getElementsByClassName("container3")[0]

					if(child){
						child.remove()
					}
					document.getElementById("wrapper3").appendChild(container)

					counter++;

				}, timer)

				timer += 150; //update timer to make sure the next instance happens after this one	
			}