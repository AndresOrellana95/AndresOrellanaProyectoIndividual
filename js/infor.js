var flag1 = false;
var flag2 = false;
var flag3 = false;
var obj = new Object();
obj.nombre = /^[a-zA-Z]/;
obj.correo = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

function verificarCorreo()
{
	var correo = document.getElementById("correo").value;
	if(obj.correo.test(correo))
	{
		flag2 = true;
	}
	else
	{
		alert("El correo no se ingreso correctamente");
		flag2 = false;
	}
}

function verificarComent()
{
	var coment = document.getElementById("coment").value;
	if(coment != "")
	{
		flag3 = true;
	}
	else
	{
		alert("El comentario no puede estar vacio");
		flag3 = false;
	}
}

function verificar()
{
	if(flag1 == true && flag2 == true && flag3 == true)
	{
		alert("Comentario guardado!");
		flag1 = false;
		flag2 = false;
		flag3 = false;
		document.getElementById("nombre").value = "";
		document.getElementById("correo").value = "";
		document.getElementById("coment").value = "";
	}
	else
	{
		alert("No ha llenado todos los campos");
	}
}

function verificarNombre()
{
	var nombre = document.getElementById("nombre").value;
	if(obj.nombre.test(nombre))
	{
		flag1 = true;
	}
	else
	{
		alert("El nombre solo puede contener letras");
		flag1 = false;
	}
}
