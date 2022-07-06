let background = document.querySelector('#background');

function addMoon(x, y, elWidth, elHeight, randomDelay){
	let imageEl = document.createElement('div');
  imageEl.className = 'image';
  let svgEl = document.createElementNS("http://www.w3.org/2000/svg",'svg');
  svgEl.setAttribute('width', 24);
  svgEl.setAttribute('height', 24);
  svgEl.setAttribute('fill', 'none');
  svgEl.setAttribute('stroke', 'currentColor');
  svgEl.setAttribute('stroke-width', 2);
  svgEl.setAttribute('stroke-linecap', 'round');
  svgEl.setAttribute('stroke-linejoin', 'round');
  svgEl.setAttribute('viewBox', '0 0 24 24');
  let pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathEl.setAttribute('d','M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
  svgEl.appendChild(pathEl);
  imageEl.appendChild(svgEl);
  imageEl.style.top = (y*elHeight)+'px';
  imageEl.style.left = (x*elWidth)+'px';
  background.appendChild(imageEl);
  svgEl.style.animationDelay = randomDelay+"s";
}

function addStar(x, y, elWidth, elHeight, randomDelay){
	let imageEl = document.createElement('div');
  imageEl.className = 'image';
  let svgEl = document.createElementNS("http://www.w3.org/2000/svg",'svg');
  svgEl.setAttribute('width', 24);
  svgEl.setAttribute('height', 24);
  svgEl.setAttribute('fill', 'none');
  svgEl.setAttribute('stroke', 'currentColor');
  svgEl.setAttribute('stroke-width', 2);
  svgEl.setAttribute('stroke-linecap', 'round');
  svgEl.setAttribute('stroke-linejoin', 'round');
  svgEl.setAttribute('viewBox', '0 0 24 24');
  let pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  pathEl.setAttribute('points','12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2');
  svgEl.appendChild(pathEl);
  imageEl.appendChild(svgEl);
  imageEl.style.top = (y*elHeight)+'px';
  imageEl.style.left = (x*elWidth)+'px';
  background.appendChild(imageEl);
  svgEl.style.animationDelay = randomDelay+"s";
}

function addPlus(x, y, elWidth, elHeight, randomDelay){
	let imageEl = document.createElement('div');
  imageEl.className = 'image';
  let svgEl = document.createElementNS("http://www.w3.org/2000/svg",'svg');
  svgEl.setAttribute('width', 24);
  svgEl.setAttribute('height', 24);
  svgEl.setAttribute('fill', 'none');
  svgEl.setAttribute('stroke', 'currentColor');
  svgEl.setAttribute('stroke-width', 2);
  svgEl.setAttribute('stroke-linecap', 'round');
  svgEl.setAttribute('stroke-linejoin', 'round');
  svgEl.setAttribute('viewBox', '0 0 24 24');
  let circleEl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circleEl.setAttribute('cx', 12);
  circleEl.setAttribute('cy', 12);
  circleEl.setAttribute('r', 10);
  let line1El = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line1El.setAttribute('x1', 12);
  line1El.setAttribute('y1', 8);
  line1El.setAttribute('x2', 12);
  line1El.setAttribute('y2', 16);
  let line2El = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line2El.setAttribute('x1', 8);
  line2El.setAttribute('y1', 12);
  line2El.setAttribute('x2', 16);
  line2El.setAttribute('y2', 12);
  svgEl.appendChild(circleEl);
  svgEl.appendChild(line1El);
  svgEl.appendChild(line2El);
  imageEl.appendChild(svgEl);
  imageEl.style.top = (y*elHeight)+'px';
  imageEl.style.left = (x*elWidth)+'px';
  background.appendChild(imageEl);
  svgEl.style.animationDelay = randomDelay+"s";
}

function addArrow(x, y, elWidth, elHeight, randomDelay){
	let imageEl = document.createElement('div');
  imageEl.className = 'image';
  let svgEl = document.createElementNS("http://www.w3.org/2000/svg",'svg');
  svgEl.setAttribute('width', 24);
  svgEl.setAttribute('height', 24);
  svgEl.setAttribute('fill', 'none');
  svgEl.setAttribute('stroke', 'currentColor');
  svgEl.setAttribute('stroke-width', 2);
  svgEl.setAttribute('stroke-linecap', 'round');
  svgEl.setAttribute('stroke-linejoin', 'round');
  svgEl.setAttribute('viewBox', '0 0 24 24');
  let pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathEl.setAttribute('d','M9 18l6-6-6-6');
  svgEl.appendChild(pathEl);
  imageEl.appendChild(svgEl);
  imageEl.style.top = (y*elHeight)+'px';
  imageEl.style.left = (x*elWidth)+'px';
  background.appendChild(imageEl);
  svgEl.style.animationDelay = randomDelay+"s";
}

function generateBg(){
	background.innerHTML = '';
	let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let elWidth = (24+100);
  let elHeight = (24+100);
  let colCount = screenWidth/elWidth;
  let rowCount = screenHeight/elHeight;
	for(let y=0; y<rowCount; y++){
  	for(let x=0; x<colCount; x++){
    	let randomType = Math.floor(Math.random()*4)+1;
      let randomDelay = Math.random()*5;
      switch(randomType){
      	case 1:
        	addArrow(x, y, elWidth, elHeight, randomDelay);
          break;
        case 2:
        	addPlus(x, y, elWidth, elHeight, randomDelay);
          break;
        case 3:
        	addStar(x, y, elWidth, elHeight, randomDelay);
          break;
        case 4:
        	addMoon(x, y, elWidth, elHeight, randomDelay);
          break;
      }
    }
  }
}

window.addEventListener('resize',()=>{
	generateBg();
});
generateBg();
