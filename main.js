var idioma = 'esp';
var headerText = [];
var clsNameHeaderTextItems = 'nvt';
var inicioText = [];
var clsNameInicioTextItems = 'int';
var armadoTexto = [{}];
var proyectosText = [];
var clsNameProyectosTextItems = 'ptt';
var formText = [];
var clsNameContactoTextItems = 'cti';



function idiomaSelect(){

	if(idioma === 'esp'){
		headerText = ['Inicio', 'Objetivo', 'Proyectos', 'Contacto'];
		inicioText = ['Hola.', 'Yo soy', 'Martin'];
		proyectosText = ['Proyectos', 'Lenguajes', 'Tecnologías'];
		formText = ['Nombre', 'E-mail', 'Teléfono', 'Asunto', 'Mensaje', 'Enviar'];

		armadoTexto = [{
			texto: 'Trabajo como ↓',
			elemento: 'p1',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'Desarrollador web frontend ←',
			elemento: 'p2',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'Y actualmente estoy en busqueda ←',
			elemento: 'p3',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'De mi próximo reto profesional↑',
			elemento: 'p4',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'Espero que este pequeño proyecto →',
			elemento: 'p5',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'Sea suficiente para despertar tu interés ←',
			elemento: 'p6',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		];
	}else{
		headerText = ['Home', 'Objective', 'Projects', 'Contact'];
		inicioText = ['Hi.', 'I am', 'Martin'];
		proyectosText = ['Projects', 'Program Languages', 'Software'];
		formText = ['Name', 'E-mail', 'Phone', 'Affair', 'Message', 'Submit'];

		armadoTexto = [{
			texto: 'I work as ↓',
			elemento: 'p1',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'Front-end web development ←',
			elemento: 'p2',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'And I\'m currently looking ←',
			elemento: 'p3',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'My next professional challenge↑',
			elemento: 'p4',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'I hope this little project →',
			elemento: 'p5',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		{
			texto: 'Will be enough to pique your interest. ←',
			elemento: 'p6',
			visivilidad: 'visible',
			posicion: 'translate(0px, 0px)',
		},
		];
	}


	inyectarTexto(headerText, clsNameHeaderTextItems);
	inyectarTexto(inicioText, clsNameInicioTextItems);
	inyectarTexto(proyectosText, clsNameProyectosTextItems);
	inyectarTexto(formText, clsNameContactoTextItems);
}

idiomaSelect();

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
});

//------------------------------------------------------------------------------------------------------

const initBtn = document.querySelector('.initBtn');
const flecha = document.querySelector('.flechaImg');
const objtBtn = document.querySelector('.objtBtn');
const cntBtn = document.querySelector('.cntBtn');
const flechaImg2 = document.querySelector('.flechaImg2');
const habBtn = document.querySelector('.habBtn');
const flechaImg1Btn = document.querySelector ('.flechaImg1');
const espIcn = document.querySelector('.esp');
const engIcn = document.querySelector('.eng');

const srtTransform = 'transform 2s'

function mvFondo(str){

	let fondo = document.getElementById('fondo');

	fondo.style.transform = (str);
	fondo.style.transition = (srtTransform);
}

function mvObjetivo(str){

	let objetivo = document.getElementById('objetivo');

	objetivo.style.transform = (str);
	objetivo.style.transition = (srtTransform);
}

function mvInicio(str){

	let inicio = document.getElementById('inicio');
	let flecha = document.getElementById('flecha');

	inicio.style.transform = (str);
	flecha.style.transform = (str);
	inicio.style.transition = (srtTransform);
	flecha.style.transition = (srtTransform);

}

function mvHabilidades(str){

	let habilidades = document.getElementById('habilidades');

	habilidades.style.transform = (str);
	habilidades.style.transition = (srtTransform)
}

function mvContacto(str){

	let contacto = document.getElementById('contacto');

	contacto.style.transform = (str);
	contacto.style.transition = (srtTransform)

}

function volverAlInicio(){
	mvInicio('translateX(0%)');
	mvFondo('translateX(0%)')
	mvObjetivo('translateX(200%)');
	mvHabilidades('translate(200%, 200%)');
	mvContacto('translateY(200%)');
};

function irObjetivos(){
	mvInicio('translateX(-200%)');
	mvFondo('translateX(-25%)');
	mvObjetivo("translateX(0%)");
	mvHabilidades('translate(0%, 200%)');
	mvContacto('translate(-200%, 200%)');
	armadoObjetivo(armadoTexto);
	anm2 = true;

	setInterval(function(){
		armadoObjetivo(armadoTexto);
	}, 3000);
};


function irHabilidades(){
		mvInicio('translateX(-200%)');
		mvObjetivo('translateY(-200%)');
		mvHabilidades('translate(0%, 0%)');
		mvContacto('translateX(-200%)');

		mvFondo('translate(-25%,-25%)');
		
};


function irContacto(){
	mvInicio('translateY(-200%)');
	mvObjetivo('translate(200%, -200%)');
	mvHabilidades('translate(200%, 0%)')
	mvContacto('translate(0%)');
	

	mvFondo('translateY(-25%)');
};


initBtn.addEventListener("click", e => {
	volverAlInicio();
});

flecha.addEventListener("click", e => {
	irObjetivos();
});

objtBtn.addEventListener("click", e => {
	irObjetivos();
});


flechaImg2.addEventListener("click", e=>{
	irContacto();
});

cntBtn.addEventListener("click", e=>{
	irContacto();
});

habBtn.addEventListener("click", e => {
	irHabilidades();
});

flechaImg1Btn.addEventListener("click", e => {
	irHabilidades();
});

espIcn.addEventListener("click", e => {
	idioma = 'esp';
	idiomaSelect();
});

engIcn.addEventListener("click", e => {
	idioma = 'eng';
	idiomaSelect();
});


//-------------------------------------------------------------------------------------------------------



//---------------------------------------------------------------------------------------------------------


function inyectarTexto(str, cls){
	let el = document.getElementsByClassName(cls)

	for(let i = 0; i < str.length; i++){
		el[i].innerHTML = str[i];
	}
}


var contadorTr = 0;
var controlAnm = true;

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
}


function armadoObjetivo(armado){

	let arrPp = document.getElementsByClassName('papper');
	let flecha2 = document.getElementById('flechaImg1');

	
		switch(contadorTr){
			case 0:		
				arrPp[contadorTr].style.visibility = (armado[contadorTr].visivilidad);
				arrPp[contadorTr].style.transform = (armado[contadorTr].posicion)
				arrPp[contadorTr].style.transition = (srtTransform);
				escribir(armado[contadorTr].texto, armado[contadorTr].elemento);

				flecha2.style.display = ('block');
				flecha2.style.transition = ('transform 5s');
				flecha2.style.transform = ('translateY(0%) rotate(90deg)');
				flecha2.style.animation = ('iluminar2 1s ease-in-out 6s infinite alternate');

				contadorTr++;
				return false;
				break;
			case 1:
				arrPp[contadorTr].style.visibility = (armado[contadorTr].visivilidad);
				arrPp[contadorTr].style.transform = (armado[contadorTr].posicion)
				arrPp[contadorTr].style.transition = (srtTransform);
				escribir(armado[contadorTr].texto, armado[contadorTr].elemento);

				contadorTr++;
				return false;
				break;
			case 2:
				arrPp[contadorTr].style.visibility = (armado[contadorTr].visivilidad);
				arrPp[contadorTr].style.transform = (armado[contadorTr].posicion)
				arrPp[contadorTr].style.transition = (srtTransform);
				escribir(armado[contadorTr].texto, armado[contadorTr].elemento);

				contadorTr++;
				return false;
				break;
			case 3:
				arrPp[contadorTr].style.visibility = (armado[contadorTr].visivilidad);
				arrPp[contadorTr].style.transform = (armado[contadorTr].posicion)
				arrPp[contadorTr].style.transition = (srtTransform);
				escribir(armado[contadorTr].texto, armado[contadorTr].elemento);

				contadorTr++;
				break;
			case 4:
				arrPp[contadorTr].style.visibility = (armado[contadorTr].visivilidad);
				arrPp[contadorTr].style.transform = (armado[contadorTr].posicion)
				arrPp[contadorTr].style.transition = (srtTransform);
				escribir(armado[contadorTr].texto, armado[contadorTr].elemento);

				contadorTr++;
				return false;
				break;
			case 5:
				arrPp[contadorTr].style.visibility = (armado[contadorTr].visivilidad);
				arrPp[contadorTr].style.transform = (armado[contadorTr].posicion)
				arrPp[contadorTr].style.transition = (srtTransform);
				escribir(armado[contadorTr].texto, armado[contadorTr].elemento);

				contadorTr++;
				return false;
			default:
				return true;			
				break;
	}	
};





