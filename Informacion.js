

document.getElementById("nombre").innerHTML = "Sofia Fisher";

document.getElementById("edad").innerHTML = "30 años";

document.getElementById("email").innerHTML = "sofia.isher@example.com";

document.getElementById("telefono").innerHTML = "(800) 455-5813";

document.getElementById("direccion").innerHTML = "1734 Royal Ln";


/*Informacion Perfil Profecional*/

document.getElementById("perfil").innerHTML = "Apasionada de la Programación, busca empezar mi carrera aportando sólidos conocimientos académicos de programación (Java, Javascript, HTML5). Mi capacidad de generar ideas y mi facilidad para trabajar en equipo son mis principales herramientas para trabajar y crecer como desarrollador Junior Java.";


/*Informacion de la Experiencia*/
document.getElementById("primerLugar").innerHTML = "10/2018  Presente Analista  Programador, Servicios Técnicos IT, Bilbao";

document.getElementById("experiencia1").innerHTML = "*Toma de requerimientos con el cliente <br> *Análisis de requerimientos y diseño de aplicaciones <br>*Desarrollo de aplicaciones utilizando Javascript, PHP, MySQL <br>*Soporte técnico a clientes";

document.getElementById("segundoLugar").innerHTML = "12/2014 - 10/2018 Programador Full Stack, Finanbest, Madrid";

document.getElementById("experiencia2").innerHTML = "*Desarrollo Front End y Back End de aplicaciones con Typescript, Javascript, PHP, MySQL, HTML5 <br>*Realización de test de aplicaciones <br>*Solución de incidencias";

document.getElementById("tercerLugar").innerHTML = "07/2011 - 12/2014 Programadora web, Sistemas Informáticos SL, Madrid";

document.getElementById("experiencia3").innerHTML = "*Desarrollo de aplicaciones web para clientes de la empresa del sector financiero utilizando Javascript, PHP <br>*Mantenimiento de aplicaciones web <br>*Maquetación HTML5, CSS3, Bootstrap <br>*Manejo de datos XML, JSON";

/*Formacion*/
document.getElementById("formacion").innerHTML = "2007 – 2011 Ingeniería de Telecomunicaciones, Universidad de Navarra";

document.getElementById("educacion").innerHTML = "*Escuela Primera Completa en Salud del Sal<br>*Escuela Secundaria Completa en Tecnica Saltira";


/*Funciones*/

document.getElementById("mostrarMas").addEventListener("click", function()
{
        document.getElementById('educacion').style = "display: true";
        document.getElementById('mostrarMas').style.display = 'none';
        document.getElementById("mostrarMenos").style.display = 'inline';

});

document.getElementById("mostrarMenos").addEventListener("click", function()
{
        document.getElementById('educacion').style = "display: none";
        document.getElementById('mostrarMenos').style.display = 'none';
        document.getElementById("mostrarMas").style.display = 'inline';

});