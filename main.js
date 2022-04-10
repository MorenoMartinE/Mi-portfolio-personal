const desplegarMM = document.querySelector('.btnMenu');
let anm2 = false;

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

const pr01 = document.querySelector('.projectImg')

function prTgTranslate(){

	let tec = document.getElementsByClassName('lenguajes')
	let app = document.getElementsByClassName('tecnologias')

	tec[0].style.transform = ("translateX(0%)")
	tec[0].style.transition = ("transform 2s")
	app[0].style.transform = ("translateX(0%)")
	app[0].style.transition = ("transform 3s")
}

pr01.addEventListener("click", e => {
	prTgTranslate();
})


//------------------------------------------------------------------------------------------------------

const initBtn = document.querySelector('.initBtn');

function volverAlInicio(){
	mvInicio('translateX(0%)');
	mvFondo('translateX(0%)')
	mvObjetivo('translateX(200%)');
	mvHabilidades('translate(200%, 200%)');
	mvContacto('translateY(200%)');
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
	mvContacto('translate(-200%, 200%)');
	armadoObjetivo();
	anm2 = true;

	setInterval(function(){
			armadoObjetivo();
		}, 4000);
}

flecha.addEventListener("click", e => {
	irObjetivos();
})

objtBtn.addEventListener("click", e => {
	irObjetivos();
})

const habBtn = document.querySelector('.habBtn');
const flechaImg1Btn = document.querySelector ('.flechaImg1');
const flechaImg1Movil = document.querySelector('.flechaImg1Movil')

function irHabilidades(){
		mvInicio('translateX(-200%)');
		mvObjetivo('translateY(-200%)');
		mvHabilidades('translate(0%, 0%)');
		mvContacto('translateX(-200%)');

		mvFondo('translate(-25%,-25%)');
		
}

flechaImg1Movil.addEventListener("click", e =>{
	irHabilidades();
})

const cntBtn = document.querySelector('.cntBtn');
const flechaImg2 = document.querySelector('.flechaImg2');



function irContacto(){

	mvInicio('translateY(-200%)');
	mvObjetivo('translate(200%, -200%)');
	mvHabilidades('translate(200%, 0%)')
	mvContacto('translate(0%)');
	

	mvFondo('translateY(-25%)');
}

flechaImg2.addEventListener("click", e=>{
	irContacto();
})


cntBtn.addEventListener("click", e=>{
	irContacto();
})


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

function mvContacto(str){

	let contacto = document.getElementById('contacto');

	contacto.style.transform = (str);
	contacto.style.transition = ('transform 2s')

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

		intervalo = Math.random() * (170 - 150) + 150;

	}, intervalo);


	return 1;
}


























//---------------------------------------------------------------------------------------------------------


var contadorTr = 0;



function armadoObjetivo(){

	let arrPp = document.getElementsByClassName('papper');
	let flecha2 = document.getElementsByClassName('flechaImg1');



	

		switch(contadorTr){
			case 0:		

				escribir('Trabajo como ↓' , 'p1');
				contadorTr++;
				return false;
				break;
			case 1:

				arrPp[5].style.transform = ("translate(0px, 0px)");
				arrPp[5].style.transition = ("transform 2s")
				
				escribir('Desarrollador web frontend ←' , 'p2');
				contadorTr++;
				return false;
				break;
			case 2:
				arrPp[4].style.visibility = ('visible');
				arrPp[4].style.transform = ("translate(0px, 0px)");
				arrPp[4].style.transition = ("transform 2s")

				escribir('Y actualmente estoy en busqueda ←' , 'p3');
				contadorTr++;
				return false;
				break;
			case 3:
				arrPp[3].style.visibility = ('visible')
				arrPp[3].style.transform = ("translate(0px, 0px)");
				arrPp[3].style.transition = ("transform 2s")

				escribir('De mi próximo reto profesional↑' , 'p4');
				contadorTr++;
				break;
			case 4:
				arrPp[0].style.visibility = ('visible');
				arrPp[0].style.transform = ("rotateY(0deg)");
				arrPp[0].style.transition = ("transform 2s");
				
				flecha2[0].style.display = ('block');
				flecha2[0].style.transform = ('translateY(0%) rotate(90deg)');
				flecha2[0].style.transition = ('transform 2s');
				flecha2[0].style.animation = ('iluminar2 1s ease-in-out 2s infinite alternate');
				
				escribir('Espero que este pequeño proyecto →' , 'p5');
				contadorTr++;
				return false;
				break;
			case 5:
				arrPp[1].style.visibility = ('visible')
				arrPp[1].style.transform = ("translate(0px, 0px)");
				arrPp[1].style.transition = ("transform 2s")

				escribir('Sea suficiente para despertar tu interés ←' , 'p6');
				contadorTr++;
				return false;
			default:
				return true;			
				break;

	

		
	}
		
}





