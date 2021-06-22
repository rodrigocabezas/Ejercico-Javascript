/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

alert("BIENVENIDO a FEEDBACK 3.5!!! El juego donde usted podra poner a pruebaa sus conocimientos\n\
,Ingrese su Nombre acompañado de su Cedula y siga las instrucciones,SUERTE!!!");
var documentos=[];
function agreguedocumento(){
    if(verificarDatos()==false){
         return false;
     }
    var nombre=$("#txtnombre").val();
    var ci=parseInt($("#txtci").val());
   
   var nivel=$("#txtnivel").val();
   var nuevodocumento={"nombre":nombre,"CI":ci,"nivel":nivel,"puntaje":0};
   documentos[documentos.length]=nuevodocumento;
   alert('Oprima el botón "COMENZAR" para listar sus preguntas');
   }
   

function listarUsuario()
{
    var tabla="<table border='3' width='600'style='background-color: activecaption' >";
    tabla +="<tr><th>Nombre</th><th>CI</th><th>Nivel</th><th>Porcentaje de Respuestas Correctas</th></tr>";
    for(var indice=0;indice<documentos.length;indice++)
    {
        var unusu=documentos[indice];
        var fila ="<tr><td>"+unusu.nombre+"</td><td>"+unusu.CI+"</td><td>"+unusu.nivel+"</td><td>"+unusu.puntaje+'%'+"</td></tr>";
        tabla+=fila;
    }
tabla +="</table>";
$("#resultado").html(tabla);
}
function limpiarCajas()
{
    $("#txtnombre").val("");
    $("#txtci").val("");
    $("#txtnombre").focus();
 }
function inicializarEventos()
{
    $("#btningresar").click(agreguedocumento);
    $("#btnListar").click(nivel);
    $("#btnlistar").click(listarUsuario);
    $("#btncorrecto").click(correctas);
   }
$(document).ready(inicializarEventos);

    var preguntasyrespuestas=[];   
    preguntasyrespuestas[0] = [];
    preguntasyrespuestas[0][0]="¿Quien descubrio America?";
    preguntasyrespuestas[0][1]="Adolf Hitler";
    preguntasyrespuestas[0][2]="Alvar Nuñez Cabeza de Vaca";
    preguntasyrespuestas[0][3]="Ninguno de los anteriores";
    preguntasyrespuestas[0][4]=3;
    preguntasyrespuestas[1] = [];
    preguntasyrespuestas[1][0]="¿Cual es el mejor jugador del mundo?";
    preguntasyrespuestas[1][1]="Neymar";
    preguntasyrespuestas[1][2]="Cristiano Ronaldo";
    preguntasyrespuestas[1][3]="Messi";
    preguntasyrespuestas[1][4]=3;
    preguntasyrespuestas[2] = [];
    preguntasyrespuestas[2][0]="¿Cual de estos jugadores no es Argentino?";
    preguntasyrespuestas[2][1]="L.Messi";
    preguntasyrespuestas[2][2]="S.Aguero";
    preguntasyrespuestas[2][3]="C.Ronaldo";
    preguntasyrespuestas[2][4]=3;
    preguntasyrespuestas[3]=[];
    preguntasyrespuestas[3][0]="¿Cual es el nombre de Gates?";
    preguntasyrespuestas[3][1]="Bill";
    preguntasyrespuestas[3][2]="Hernan";
    preguntasyrespuestas[3][3]="Fernando";
    preguntasyrespuestas[3][4]=1;
    preguntasyrespuestas[4]=[];
    preguntasyrespuestas[4][0]="¿En que año nacio Artigas";
    preguntasyrespuestas[4][1]="1791";
    preguntasyrespuestas[4][2]="1896";
    preguntasyrespuestas[4][3]="1764";
    preguntasyrespuestas[4][4]=3;
    preguntasyrespuestas[5]=[];
    preguntasyrespuestas[5][0]="¿Cual es el cuadro con mas hinchas?";
    preguntasyrespuestas[5][1]="Milan";
    preguntasyrespuestas[5][2]="Real Madrid";
    preguntasyrespuestas[5][3]="Barcelona";
    preguntasyrespuestas[5][4]=3;
    preguntasyrespuestas[6]=[];
    preguntasyrespuestas[6][0]="¿Quién pintó el “Gernika”?";
    preguntasyrespuestas[6][1]="Salvador Dalí";
    preguntasyrespuestas[6][2]="Francisco de Goya";
    preguntasyrespuestas[6][3]="Pablo Picasso";
    preguntasyrespuestas[6][4]=3;
    preguntasyrespuestas[7]=[];
    preguntasyrespuestas[7][0]="¿A qué movimiento pertenecía Salvador Dalí?";
    preguntasyrespuestas[7][1]="Surrealismo";
    preguntasyrespuestas[7][2]="Futurismo";
    preguntasyrespuestas[7][3]="Cubismo";
    preguntasyrespuestas[7][4]=1;
    preguntasyrespuestas[8]=[];
    preguntasyrespuestas[8][0]="¿Quién escribió 'Don Quijote de la Mancha'?";
    preguntasyrespuestas[8][1]="Lope de Vega";
    preguntasyrespuestas[8][2]="Miguel de Cervantes";
    preguntasyrespuestas[8][3]="Francisco de Quevedo";
    preguntasyrespuestas[8][4]=2;
    preguntasyrespuestas[9]=[];
    preguntasyrespuestas[9][0]=" ¿A qué género musical latinoamericano perteneció el cantante Carlos Gardel?";
    preguntasyrespuestas[9][1]="Tango";
    preguntasyrespuestas[9][2]="Salsa";
    preguntasyrespuestas[9][3]="Bossa Nova";
    preguntasyrespuestas[9][4]=1;
    preguntasyrespuestas[10]=[];
    preguntasyrespuestas[10][0]="¿Qué actor español ganó el Óscar al mejor actor de reparto por el film 'No country for old men'?";
    preguntasyrespuestas[10][1]="Antonio Banderas";
    preguntasyrespuestas[10][2]="Javier Bardem";
    preguntasyrespuestas[10][3]="Benicio del Toro";
    preguntasyrespuestas[10][4]=2;
    preguntasyrespuestas[11]=[];
    preguntasyrespuestas[11][0]="¿En qué equipo de la NBA juega el pívot español Pau Gasol?";
    preguntasyrespuestas[11][1]="Menphis Grizzalees";
    preguntasyrespuestas[11][2]="San Antonio Spurs";
    preguntasyrespuestas[11][3]="Los Angeles Lakers";
    preguntasyrespuestas[11][4]=3;
    preguntasyrespuestas[12]=[];
    preguntasyrespuestas[12][0]="¿Cuántos Grand Slam ha ganado el tenista español Rafa Nadal? ";
    preguntasyrespuestas[12][1]="9";
    preguntasyrespuestas[12][2]="10";
    preguntasyrespuestas[12][3]="11";
    preguntasyrespuestas[12][4]=2;
    preguntasyrespuestas[13]=[];
    preguntasyrespuestas[13][0]="¿Qué legendario jugador de fútbol marcó un gol con 'la mano de Dios'?  ";
    preguntasyrespuestas[13][1]="Pelé";
    preguntasyrespuestas[13][2]="Johan Cruyff";
    preguntasyrespuestas[13][3]="Maradona";
    preguntasyrespuestas[13][4]=3;
    preguntasyrespuestas[14]=[];
    preguntasyrespuestas[14][0]="¿Qué ciclista español ganó cinco Tours de Francia de manera consecutiva?";
    preguntasyrespuestas[14][1]="Luis Ocaña";
    preguntasyrespuestas[14][2]="Pedro Delgado";
    preguntasyrespuestas[14][3]="Miguel Indurain";
    preguntasyrespuestas[14][4]=3;
    preguntasyrespuestas[15]=[];
    preguntasyrespuestas[15][0]="¿A qué reinos pertenecían los Reyes Católicos,Isabel y Fernando,antes de comenzar la unificación de lo que hoy se conoce como España?";
    preguntasyrespuestas[15][1]="Castilla y Aragón";
    preguntasyrespuestas[15][2]="Aragón y Navarra";
    preguntasyrespuestas[15][3]="Navarra y Granada";
    preguntasyrespuestas[15][4]=3;
    preguntasyrespuestas[16]=[];
    preguntasyrespuestas[16][0]="¿Cual es el actual presidente de Uruguay?";
    preguntasyrespuestas[16][1]="Tabaré viudez";
    preguntasyrespuestas[16][2]="Oscar wshinton tabarez";
    preguntasyrespuestas[16][3]="Tabaré Vazquez";
    preguntasyrespuestas[16][4]=3; 
    preguntasyrespuestas[17]=[];
    preguntasyrespuestas[17][0]="¿Cual es mas corrupto/a mas famoso?";
    preguntasyrespuestas[17][1]="Bin Laden";
    preguntasyrespuestas[17][2]="La FIFA";
    preguntasyrespuestas[17][3]="Paco Casal";
    preguntasyrespuestas[17][4]=2; 
    preguntasyrespuestas[18]=[];
    preguntasyrespuestas[18][0]="¿Cual es la cancion de Plan B?";
    preguntasyrespuestas[18][1]="Vivir la vida";
    preguntasyrespuestas[18][2]="Candy";
    preguntasyrespuestas[18][3]="Tirate un paso";
    preguntasyrespuestas[18][4]=2; 
    preguntasyrespuestas[19]=[];
    preguntasyrespuestas[19][0]="¿Cual es el mejor boxeador en este momento?";
    preguntasyrespuestas[19][1]="Myweather";
    preguntasyrespuestas[19][2]="Matias Arce";
    preguntasyrespuestas[19][3]="Caranchito";
    preguntasyrespuestas[19][4]=1; 
    preguntasyrespuestas[20]=[];
    preguntasyrespuestas[20][0]="¿Con que bebida se suele acompañar el fernet?";
    preguntasyrespuestas[20][1]="Agua";
    preguntasyrespuestas[20][2]="Fanta";
    preguntasyrespuestas[20][3]="Coca-Cola";
    preguntasyrespuestas[20][4]=3; 
    preguntasyrespuestas[21]=[];
    preguntasyrespuestas[21][0]="¿Quien tiene la camiseta numero 9 en Uruguay?";
    preguntasyrespuestas[21][1]="Muslera";
    preguntasyrespuestas[21][2]="Pacheco";
    preguntasyrespuestas[21][3]="Rolan";
    preguntasyrespuestas[21][4]=3; 
    preguntasyrespuestas[22]=[];
    preguntasyrespuestas[22][0]="¿Cual fue el primer novio de mirtha Legrand?";
    preguntasyrespuestas[22][1]="Cristobal Colon";
    preguntasyrespuestas[22][2]="Platon";
    preguntasyrespuestas[22][3]="Ninguno de los anteriores";
    preguntasyrespuestas[22][4]=3; 
    preguntasyrespuestas[23]=[];
    preguntasyrespuestas[23][0]="¿Quien es Winnie pooh?";
    preguntasyrespuestas[23][1]="Un perro";
    preguntasyrespuestas[23][2]="Un oso";
    preguntasyrespuestas[23][3]="un Alien";
    preguntasyrespuestas[23][4]=2;
    preguntasyrespuestas[24]=[];
    preguntasyrespuestas[24][0]="¿Cual es la capital de Uruguay?";
    preguntasyrespuestas[24][1]="Salto";
    preguntasyrespuestas[24][2]="Tacuarembo";
    preguntasyrespuestas[24][3]="Montevideo";
    preguntasyrespuestas[24][4]=3;
    
   function nivel(){
       alert("USTED TIENE 15 MINUTOS PARA CONTESTAR");
       if($("#txtnivel").val()=="Basico"){
        obtenerPreguntasFaciles();
        }
     else if($("#txtnivel").val()=="Dificil"){
         obtenerPreguntasDificiles();
       }
     else
         obtenerPreguntasIntermedia();
    limpiarCajas();
     }
 function obtenerPreguntasFaciles(){ 
     preguntashechas=[];
     if(verificarDatos()==false){
         return false;
     }
   
   $("#divdespliegue").empty();     
   for (var i=0;i<5;i++){
    do{
        var indicepreguntaAleatoria = obtenerIndiceAleatorio(25);
        }
     while(norepetirPreguntas(indicepreguntaAleatoria)==true)
    preguntashechas[preguntashechas.length] = indicepreguntaAleatoria;
    var pregunta = preguntasyrespuestas[indicepreguntaAleatoria];
    var textoPregunta = pregunta[0];
    $("#divdespliegue").append("<label  id='lbl"+indicepreguntaAleatoria+"'>" + textoPregunta + "</label>");
    var lista = "<ul>";    
    for (var resp=1;resp<=3;resp++){
        
        lista+= "<li><input type='radio' name='"+indicepreguntaAleatoria+"'value='"+resp+"'><label>"+pregunta[resp]+"</label></li>";

    }
    $("#divdespliegue").append(lista + "</ul>");
 }
 $(document).ready(carga);
 }
 function obtenerPreguntasIntermedia(){ 
     preguntashechas=[];
     if(verificarDatos()==false){
         return false;
     }
       $("#divdespliegue").empty();     
   for (var i=0;i<10;i++){
    do{
        var indicepreguntaAleatoria = obtenerIndiceAleatorio(16);
        }
     while(norepetirPreguntas(indicepreguntaAleatoria)==true)
    preguntashechas[preguntashechas.length] = indicepreguntaAleatoria;
    var pregunta = preguntasyrespuestas[indicepreguntaAleatoria];
    var textoPregunta = pregunta[0];
    $("#divdespliegue").append("<label id='lbl"+indicepreguntaAleatoria+"'>" + textoPregunta + "</label>");
    var lista = "<ul>";    
    for (var resp=1;resp<=3;resp++){
        
        lista+= "<li><input type='radio' name='"+indicepreguntaAleatoria+"'value='"+resp+"'><label>"+pregunta[resp]+"</label></li>";

    }
    $("#divdespliegue").append(lista + "</ul>");
 }
 $(document).ready(carga);
 }
 function obtenerPreguntasDificiles(){//Funcion para obter
    if(verificarDatos()==false){
         return false;
         }
              $("#divdespliegue").empty();     
              for (var i=0;i<15;i++){
                 do{
                    var indicepreguntaAleatoria = obtenerIndiceAleatorio(16);
                     }
                 while(norepetirPreguntas(indicepreguntaAleatoria)==true)
                   preguntashechas[preguntashechas.length] = indicepreguntaAleatoria;
                   var pregunta = preguntasyrespuestas[indicepreguntaAleatoria];
                   var textoPregunta = pregunta[0];
                   $("#divdespliegue").append("<label id='lbl"+indicepreguntaAleatoria+"'>" + textoPregunta + "</label>");
                   var lista = "<ul>";    
                   for (var resp=1;resp<=3;resp++){

                        lista+= "<li><input type='radio' name='"+indicepreguntaAleatoria+"'value='"+resp+"'><label>"+pregunta[resp]+"</label></li>";

                    }
                    $("#divdespliegue").append(lista + "</ul>");
                   }
                  $(document).ready(carga);
                 }
 function norepetirPreguntas(indicePregunta) {
         for (var indice = 0; indice<preguntashechas.length; indice++)
           {
            if (preguntashechas[indice]==indicePregunta)
              { 
            return true;
               }
   }
    return false;
}
 function obtenerIndiceAleatorio(maximo){ //Obtener pregunta aleatoriamente y sus respuestas
      return Math.floor(Math.random()*maximo);//insterta en el documento las respuetas con el radio
  }
  
  var cronometro;
    function detenerse(){//Funcion quue detiene el cronometro
      clearInterval(cronometro);     
    }
    function carga(){//Funcion para comenzar el cronometro
        contador_s =0;
        contador_m =0;
        s = document.getElementById("segundos");
        m = document.getElementById("minutos");
        cronometro = setInterval(
            function(){
                if(contador_s==60){
                 contador_s=0;
                 contador_m++;
                 m.innerHTML = contador_m;
                 if(contador_m==60){
                   contador_m=0;
                 }
                 if(contador_m==15){
                   alert("Lo siento se le acabo el TIEMPO");
                   $(document).ready(detenerse);
                   $("#divdespliegue").empty();
               }
           }
                s.innerHTML = contador_s;
                contador_s++;
               }
            ,1000);
      }
      function correctas(){//funcion que nos corrije las preguntas
      var contador=0;
      for(var i=0;i<preguntashechas.length;i++){
        var numeroPregunta = preguntashechas[i];
        var seleccionada =$("input:radio[name='"+numeroPregunta+"']:checked").val();
        var correcta = preguntasyrespuestas[numeroPregunta][4];
        if(seleccionada==correcta){
           contador++;
           $("#lbl"+numeroPregunta).attr("style","background:green");
          }
            else{     
           $("#lbl"+numeroPregunta).attr("style","background:red");
           }
            }
            documentos[documentos.length-1].puntaje=(contador*100)/preguntashechas.length;
             $(document).ready(detenerse);
             }
function verificarDatos(){//funcion para verificar que se ingrese los datos correctamente
  if($("#txtnombre").val()==""){
      alert("ERROR!!Falta ingresar Nombre");
      return false;
     }
    if($("#txtci").val()==""){
      alert("ERROR!!Falta ingresar su celuda");
      return false;
      }
       if($("#txtnivel").val()=="vacio"){
          alert("ERROR!!Falta Elejir el Nivel deseado");
          return false;
            }
            var caractteres=$("#txtnombre").val()+$("#txtci").val();
             if(caractteres.indexOf('@')!=-1 || caractteres.indexOf('#')!=-1 || caractteres.indexOf('$')!=-1 || caractteres.indexOf('%')!=-1 || caractteres.indexOf('&')!=-1){
             alert('ERROR!! El Nombre no debe contener caracteres como("@,#,$,%,&")');
             return false;
                  }
               return true;        
               }
              