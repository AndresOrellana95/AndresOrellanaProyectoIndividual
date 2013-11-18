var images = new Array();
images[0] = "images/legendofzelda2.jpg";
images[1] = "images/devilmaycry.jpg";
images[2] = "images/silenthill.jpg";
images[3] = "images/deadspace.jpg";

function gup(name){
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp ( regexS );
	var tmpURL = window.location.href;
	var results = regex.exec( tmpURL );
	if( results == null )
	{
		return "";
	}
	else
	{
		return results[1];
	}
}

function user()
{
	var nombreu = "";
	do
	{
		nombreu = prompt("Ingrese un nombre para identificarse:","");
	 	
	}while(nombreu == "" || nombreu == null);

	var ulu = document.getElementById("usuario");
	var textou = document.createTextNode("Bienvenido/a " + nombreu);
	var liu = document.createElement("li");
	liu.appendChild(textou);
	ulu.appendChild(liu);
	informacion();
}

function informacion()
{	

	var cadena = [{"Titulo": "The Legend Of Zelda","Primer": "The Legend of Zelda (ゼルダ の 伝説, Zeruda no Densetsu? en japonés) es un videojuego de fantasía y \
	de acción-aventura. El juego ha sido desarrollado y publicado por Nintendo. Fué creado por el famoso diseñador de videojuegos, Shigeru Miyamoto. \
	El modo de juego consiste en una mezcla de acción, aventura, puzzles, rol y ocasionalmente plataformas, sigilo y carreras. El juego se centra en un \
	protagonista: Link, el único jugable en toda la saga. A menudo, a Link se le da la tarea de rescatar a la Princesa Zelda de las garras de Ganondorf \
	(principal antagonista de la saga), en Hyrule (principal lugar en que desarrolla la saga). Sin embargo, han aparecido otros antagonistas, como Vaati \
	o El Heraldo de la Muerte. La historia implica a una reliquia sagrada conocida como Trifuerza, un conjunto de tres triángulos de oro, con las más \
	importantes omnipotencias.","Segundo":"La saga de Zelda ha desarrollado una historia profunda y un amplio universo sobre muchos de sus lanzamientos. \
	Gran parte de la historia sobre la creación de Hyrule se revela en los juegos de A Link to the Past, Ocarina of Time, The Wind Waker, Twilight Princess \
	 y Skyward Sword.","Tercero":"El universo de ficción creado en los juegos de Zelda suceden en distintos escenario para cada aventura, pero conectados \
	 de una forma u otra. Muchos juegos tienen lugar en países con sus propias historias. Termina, por ejemplo, es una dimensión alternativa que no tiene \
	 conocimiento de la existencia de Hyrule.","Entrega1":"The Legend Of Zelda","Entrega2":"A Link to The Past","Entrega3":"Ocarina Of Time","Entrega4":"Majora's \
	 Mask","Entrega5":"Wind Waker","Entrega6":"Minish Cap","Entrega7":"Twilight Princess","Entrega8":"Skyward Sword"},
	{"Titulo": "Devil May Cry", "Primer": "Con todo su poder reunido, Mundus organizó a las huestes del infierno como un gran ejército y se preparó para \
	su ansiada meta final, la invasión del mundo de los humanos. Pero dentro de sus mismísimas huestes surgió Sparda, 'El Legendario Caballero Oscuro', un \
	poderoso demonio, el cual sintió compasión por los frágiles humanos y decidió rebelarse contra Mundus y su ejército. Fue así que se enfrentó a su \
	propia raza liderando una rebelión junto con otros demonios que se le unieron a su causa. Tras varias batallas, la victoria se decantó del lado de \
	Sparda y sus aliados, quienes lograron encerrar a Mundus en una cripta durante dos milenios. No sólo eso, ya que al terminar esta guerra, Sparda huye \
	hacia al mundo de los humanos y se da cuenta de que algunos humanos habían sido poseídos por espíritus demoniacos o malignos y que estos edificaron una \
	torre llamada Temen-ni-gru, que servía como puente entre los dos mundos.","Segundo":"Sparda, al reflexionar, se da cuenta de que esta torre puede \
	ser utilizada para cerrar el portal al mundo de los demonios, y así, utilizando su sangre y la de una doncella pura en lo profundo de la torre, Sparda \
	hace el ritual para cerrar y filtrar las fuerzas del mal del mundo humano. Desafortunadamente, este ritual tuvo consecuencias, ya que los grandes \
	poderes de Sparda así como su apariencia imponente de demonio quedaron encerrados en el mundo demoníaco, para la doncella, la consecuencia fue su \
	muerte.","Tercero":"Dos mil años después Sparda se casó con una mujer llamada Eva, con quien tuvo a sus dos hijos: Dante y Vergil, gemelos. Eva \
	regaló dos amuletos a sus dos hijos gemelos, los cuales fueron el resultado del ritual que se hizo para cerrar el portal y los cuales son las llaves \
	para abrir el portal de nuevo. Dante, aprovechando las habilidades demoníacas que heredó, intentó vivir una vida como cazarrecompensas de fenómenos \
	paranormales, pretendiendo ignorar su pasado demoníaco, mientras que Vergil se empecinó en aumentar sus conocimientos sobre el mundo infernal, su \
	padre y el infinito poder que los demonios pueden llegar a poseer. Esta diferencia entre ambos generó una rivalidad entre hermanos que los llevaba a \
	combatir incluso hasta la muerte.","Entrega1":"Devil May Cry","Entrega2":"Devil May Cry 2","Entrega3":"Devil May Cry 3: Dante's Awakening","Entrega4":"Devil \
	May Cry 4","Entrega5":"DMC"},
	{"Titulo": "Silent Hill", "Primer": "Silent Hill muestra a Harry Mason y a su hija, Cheryl, conduciendo hacia el pueblo turístico de Silent Hill para \
	unas vacaciones. Cheryl sueña constantemente con Silent Hill y siente que debe ir allí, por lo cual su padre la lleva al pueblo. Harry vuelca su coche \
	tratando de evitar a una figura fantasmal en el camino. Cuando vuelve en sí tras el choque, encuentra que Cheryl ha desaparecido y sale en su búsqueda \
	por las calles de Silent Hill, las cuales están desiertas, cubiertas de niebla y nevando fuera de temporada. Siguiendo a una imagen que parece ser su \
	hija, Harry termina en un callejón que al sonido de una sirena se transforma en una versión infernal del mundo real, cubierto de sangre y óxido. Harry \
	es atacado por extraños monstruos al final del callejón, pero despierta nuevamente en un café rodeado de niebla. Ahí habla con una policía, Cybil \
	Bennet, cuya motocicleta Harry vio a un lado del camino antes de chocar. Cybil le da una pistola y lo deja para buscar ayuda. Harry encuentra una \
	radio rota en el café, la cual empieza a emitir estática cuando está a punto de irse. Una ventana cercana se rompe y un monstruo volador entra y trata \
	de atacar a Harry. Harry derrota al monstruo y contempla su cadáver, dándose cuenta de lo serio de su situación. Harry decide ir al callejón que \
	visitó en su sueño, donde encuentra un libro de dibujos que lo lleva a la escuela local. Ahí encuentra acertijos, monstruos, y experimenta la \
	transformación de la escuela al «otherworld» (Otro Mundo), el mundo de sangre y óxido. Al final de este cambio Harry se topa con una marca circular \
	que cubre el jardín. Aunque no encuentra a su hija en la escuela, puede ver a una niña que se desvanece frente a sus ojos cuando vuelve al mundo normal.",
	"Segundo":"Tras eso, escucha la campana de la iglesia, y va a buscar la fuente del sonido. En la iglesia halla a una mujer llamada Dahlia Gillespie, \
	la cual le da un objeto extraño, el Flauros, y le da advertencias crípticas sobre lo que pasará en el futuro, diciéndole que visite el Hospital \
	Alchemilla. Allí el protagonista encuentra al Dr. Michael Kaufmann, quien está tan molesto con lo que le sucede como Harry. Más tarde el hospital \
	también cambia al Otro Mundo y ahí aparece Lisa Garland, una enfermera asustada a quien Harry no tiene oportunidad de hacerle preguntas ya que es \
	transportado al mundo normal, donde Dahlia vuelve a aparecer y le dice que la marca circular que ha visto se llama «Marca de Samael» y se está \
	esparciendo por todo Silent Hill; este símbolo no debe ser completado, pues si eso sucede la oscuridad cubrirá el pueblo entero.","Tercero":"",
	"Entrega1":"Silent Hill","Entrega2":"Silent Hill 2","Entrega3":"Silent Hill 3","Entrega4":"Silent Hill 4: The Rooom"},{"Titulo":"Dead Space","Primer":"La historia se \
	desarrolla en el interior de la extractora espacial USG Ishimura. La tripulación han sido masacrada por necromorfos, monstruos creados por un \
	virus alienígena. El protagonista, Isaac Clark, tiene que enfrentarse a los necromorfos en solitario. La acción se desarrolla como un shoorter \
	en tercera persona con un control con claras influencias de Resident Evil 4. La ambientación recuerda intensamente la película Alien.",
	"Segundo":"El objetivo de la mayoría de las misiones es recorrer las cubiertas del Ishimura para recoger elementos y llevarlos a ciertos puntos \
	según las indicaciones que otros personajes secundarios dan a Clark a través de su enlace de radio. Durante estos recorridos los enemigos nos \
	atacan de formas inesperadas y en grupos cada vez más numerosos. El combate con los enemigos se realiza con una técnica llamada desmembramiento \
	estratégico: los enemigos deben ser descuartizados para conseguir eliminarlos. Se hace necesaria una gran precisión ya que hay que arrancar las \
	extremidades al enemigo. Por ejemplo, los enemigos sin piernas seguirán arrastrándose hacia nosotros más lentamente usando los brazos.",
	"Tercero":"Algunos escenarios se encuentran en gravedad cero o es posible activar esta característica a través de interruptores. En estos \
	escenarios es posible saltar libremente a casi todas las superficies (suelo, paredes o techo) así como caminar lentamente sobre ellas (usando \
	botas magnéticas).","Entrega1":"Dead Space","Entrega2":"Dead Space 2","Entrega3":"Dead Space 3"}];
	var saga = gup('saga');
	crearPrincipal(cadena, parseInt(saga));
}

function crearPrincipal(cadena, i)
{
	//Titulo e imagen
	var h2 = document.getElementById("h2");
	var text = document.createTextNode(cadena[i].Titulo);
	var a = document.createElement("a");
	a.setAttribute("href","#");
	a.appendChild(text);
	h2.appendChild(a);
	h2.appendChild(document.createElement("hr"));
	var img = document.createElement("img");
	img.setAttribute("src",images[i]);
	h2.appendChild(img);
	h2.appendChild(document.createElement("hr"));
	h2.appendChild(document.createElement("hr"));

	//Informacion de la saga
	var contenido = document.getElementById("content1");
	var p = document.createElement("p");
	p.setAttribute("class","texto");
	var texto = document.createTextNode(cadena[i].Primer);
	p.appendChild(texto);
	contenido.appendChild(p);
	contenido.appendChild(document.createElement("br"));
	var texto1 = document.createTextNode(cadena[i].Segundo);
	var p1 = document.createElement("p");
	p1.setAttribute("class","texto");
	p1.appendChild(texto1);
	contenido.appendChild(p1);

	contenido.appendChild(document.createElement("br"));
	var texto2 = document.createTextNode(cadena[i].Tercero);
	var p2 = document.createElement("p");
	p2.setAttribute("class","texto");
	p2.appendChild(texto2);
	contenido.appendChild(p2);

	//Sagas disponibles
	var div = document.getElementById("nombre");
	var txt = document.createTextNode(cadena[i].Titulo + " - Entregas");
	div.appendChild(txt);
	//Listas
	if(cadena[i].Entrega1 != undefined)
	{
		var ul = document.getElementById("sagas");
		var li = document.createElement("li");
		var texto = document.createTextNode(cadena[i].Entrega1);
		var a = document.createElement("a");
		a.setAttribute("href","entrega.html?saga="+i+"&entrega=0");
		a.appendChild(texto);
		li.appendChild(a);
		ul.appendChild(li);
	}
	//
	if(cadena[i].Entrega2 != undefined)
	{
		var li1 = document.createElement("li");
		var texto1 = document.createTextNode(cadena[i].Entrega2);
		var a1 = document.createElement("a");
		a1.setAttribute("href","entrega.html?saga="+i+"&entrega=1");
		a1.appendChild(texto1);
		li1.appendChild(a1);
		ul.appendChild(li1);
	}
	//
	if(cadena[i].Entrega3 != undefined)
	{
		var li2 = document.createElement("li");
		var texto2 = document.createTextNode(cadena[i].Entrega3);
		var a2 = document.createElement("a");
		a2.setAttribute("href","entrega.html?saga="+i+"&entrega=2");
		a2.appendChild(texto2);
		li2.appendChild(a2);
		ul.appendChild(li2);
	}
	//
	if(cadena[i].Entrega4 != undefined)
	{
		var li3 = document.createElement("li");
		var texto3 = document.createTextNode(cadena[i].Entrega4);
		var a3 = document.createElement("a");
		a3.setAttribute("href","entrega.html?saga="+i+"&entrega=3");
		a3.appendChild(texto3);
		li3.appendChild(a3);
		ul.appendChild(li3);
	}
	//
	if(cadena[i].Entrega5 != undefined)
	{
		var li4 = document.createElement("li");
		var texto4 = document.createTextNode(cadena[i].Entrega5);
		var a4 = document.createElement("a");
		a4.setAttribute("href","entrega.html?saga="+i+"&entrega=4");
		a4.appendChild(texto4);
		li4.appendChild(a4);
		ul.appendChild(li4);	
	}
	//
	if(cadena[i].Entrega6 != undefined)
	{
		var li5 = document.createElement("li");
		var texto5 = document.createTextNode(cadena[i].Entrega6);
		var a5 = document.createElement("a");
		a5.setAttribute("href","entrega.html?saga="+i+"&entrega=5");
		a5.appendChild(texto5);
		li5.appendChild(a5);
		ul.appendChild(li5);
	}
	//
	if(cadena[i].Entrega7 != undefined)
	{
		var li6 = document.createElement("li");
		var texto6 = document.createTextNode(cadena[i].Entrega7);
		var a6 = document.createElement("a");
		a6.setAttribute("href","entrega.html?saga="+i+"&entrega=6");
		a6.appendChild(texto6);
		li6.appendChild(a6);
		ul.appendChild(li6);
	}
	//
	if(cadena[i].Entrega8 != undefined)
	{
		var li7 = document.createElement("li");
		var texto7 = document.createTextNode(cadena[i].Entrega8);
		var a7 = document.createElement("a");
		a7.setAttribute("href","entrega.html?saga="+i+"&entrega=7");
		a7.appendChild(texto7);
		li7.appendChild(a7);
		ul.appendChild(li7);
	}
	//
	if(cadena[i].Entrega9 != undefined)
	{
		var li8 = document.createElement("li");
		var texto8 = document.createTextNode(cadena[i].Entrega9);
		var a8 = document.createElement("a");
		a8.setAttribute("href","entrega.html?saga="+i+"&entrega=8");
		a8.appendChild(texto8);
		li8.appendChild(a8);
		ul.appendChild(li8);
	}
}
