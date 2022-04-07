const desplegarMM = document.querySelector('.btnMenu');

function mostrarMenu(){
	
	let menu = document.getElementsByClassName('navListItem');
	var strMost;
	var confirm = menu[0].outerHTML.search('display: block');
	var opc;

	switch(confirm){
		case -1:
			strMost = "block";
			opc = '1';
			break;
		default:
			strMost = "none";
			opc = '0';
	}


	for(let i = 0; i < menu.length; i++){
		menu[i].style.display = (strMost);
		menu[i].style.animation = ('parpadeo .5s linear');
	}
}

desplegarMM.addEventListener("click", e => {
	mostrarMenu();
})

//------------------------------------------------------------------------------------------------------

const initBtn = document.querySelector('.initBtn');

function volverAlInicio(){
	mvInicio('translateX(0%)');
	mvFondo('translateX(0%)')
	mvObjetivo('translateX(200%)');
	mvHabilidades('translate(200%, 200%)');
}

initBtn.addEventListener("click", e => {
	volverAlInicio();
})

const flecha = document.querySelector('.flechaImg');
const objtBtn = document.querySelector('.objtBtn');

function irObjetivos(){
	mvInicio('translateX(-200%)');
	mvFondo('translateX(-25%)');
	mvObjetivo("translateX(0%)");
	mvHabilidades('translate(0%, 200%)');
}

flecha.addEventListener("click", e => {
	irObjetivos();
})

objtBtn.addEventListener("click", e => {
	irObjetivos();
})

const habBtn = document.querySelector('.habBtn');
const flechaImg1Btn = document.querySelector ('.flechaImg1');

function irHabilidades(){
		mvObjetivo('translateY(-200%)');
		mvInicio('translateX(-200%)');
		mvFondo('translate(-25%,-25%)');
		mvHabilidades('translate(0%, 0%)');
}

habBtn.addEventListener("click", e => {
	irHabilidades();
})

flechaImg1Btn.addEventListener("click", e => {
	irHabilidades();
})

//-------------------------------------------------------------------------------------------------------

function mvFondo(str){

	let fondo = document.getElementsByClassName('fondo');

	fondo[0].style.transform = (str);
	fondo[0].style.transition = ("transform 2s");
}

function mvObjetivo(str){

	let objetivo = document.getElementById('objetivo');

	objetivo.style.transform = (str);
	objetivo.style.transition = ("transform 2s");

}

function mvInicio(str){

	let inicio = document.getElementById('inicio');
	let flecha = document.getElementsByClassName('flecha');

	inicio.style.transform = (str);
	flecha[0].style.transform = (str);
	inicio.style.transition = ("transform 2s");
	flecha[0].style.transition = ("transform 2s");

}

function mvHabilidades(str){

	let habilidades = document.getElementById('habilidades');

	habilidades.style.transform = (str);
	habilidades.style.transition = ("transform 2s")
}



function escribir(str, cls){

	let el = document.getElementsByClassName(cls);
	let intervalo = 150;

	let arrStr = str.split('');
	let i = 0;
	let injStr = setInterval(function(){


		el[0].innerHTML += arrStr[i];
		i++;

		if(i === arrStr.length){
			clearInterval(injStr);
		}

		intervalo = Math.random() * (170 - 120) + 120;

	}, intervalo);
}


































//---------------------------------------------------------------------------------------------------------

const trBtn = document.querySelector('.mFlecha');
var contadorTr = 0;

function armadoObjetivo(){

	let arrPp = document.getElementsByClassName('papper');
	let flecha = document.getElementsByClassName('mFlecha');
	let flecha2 = document.getElementsByClassName('flechaImg1');


	switch(contadorTr){
		case 0:
			escribir('Trabajo como ↓' , 'p1');


			contadorTr++;
			flecha[0].style.transform = ('rotate(-360deg)');
			flecha[0].style.transition = ('transform 2s');
			break;
		case 1:
			arrPp[5].style.transform = ("translate(0px, 0px)");
			arrPp[5].style.transition = ("transform 2s")
			arrPp[4].style.transform = ("translate(300px, 0px)");
			arrPp[4].style.transition = ("transform 2s")
			arrPp[3].style.transform = ("translate(600px, 0px)");
			arrPp[3].style.transition = ("transform 2s")
			arrPp[0].style.transform = ("translate(600px, 300px)");
			arrPp[0].style.transition = ("transform 2s")
			contadorTr++;
				
			escribir('Desarrollador web frontend ←' , 'p2');
			flecha[0].style.transform = ('rotate(-720deg)');
			break;
		case 2:
			arrPp[4].style.transform = ("translate(0px, 0px)");
			arrPp[4].style.transition = ("transform 2s")
			arrPp[3].style.transform = ("translate(300px, 0px)");
			arrPp[3].style.transition = ("transform 2s")
			arrPp[0].style.transform = ("translate(300px, 300px)");
			arrPp[0].style.transition = ("transform 2s")
			contadorTr++;

			escribir('Y actualmente estoy en busqueda, de mi proximo reto profesional ←' , 'p3');
			flecha[0].style.transform = ('rotate(-1080deg)');
			break;
		case 3:
			arrPp[3].style.transform = ("translate(0px, 0px)");
			arrPp[3].style.transition = ("transform 2s")
			arrPp[0].style.transform = ("translate(0px, 300px)");
			arrPp[0].style.transition = ("transform 2s")
			contadorTr++;

			
			escribir('Espero que este pequeño proyecto sea suficiente ↑' , 'p4');
			flecha[0].style.transform = ('rotate(-1440deg)');
			break;
		case 4:
			arrPp[0].style.transform = ("translate(0px, 0px)");
			arrPp[0].style.transition = ("transform 2s");
			contadorTr++;

			flecha[0].style.transition = ('opacity .2s')
			flecha[0].style.opacity = ('.0')
			flecha[0].style.cursor = ('default')


			flecha2[0].style.display = ('block');
			flecha2[0].style.transform = ('translateY(0%) rotate(90deg)');
			flecha2[0].style.transition = ('transform 2s');
			flecha2[0].style.animation = ('iluminar2 1s ease-in-out 2s infinite alternate');
			
			escribir('→ Para despertar tu interes ←' , 'p5');
			break;
		default:			
			break;
			

	}
}

trBtn.addEventListener("click", e => {
	armadoObjetivo();
})