const poblacion=document.querySelector("#pi");
const cantidadA=document.querySelector("#ca");
const natalidadFem=document.querySelector("#nf");
const natalidadMasc=document.querySelector("#nm");
const mortalidadFem=document.querySelector("#mf");
const mortalidadMasc=document.querySelector("#mm");
const inmigracionFem=document.querySelector("#inf");
const inmigracionMasc=document.querySelector("#im");
const emigracionFem=document.querySelector("#ef");
const emigracionMasc=document.querySelector("#em");
const etiquetafinal=document.querySelector("#et");
const tabla=document.querySelector("#Tb");
const tablaColumnas=document.getElementsByTagName("td");


function calcular(){

    var totalF=(natalidadFem.value/100)-(mortalidadFem.value/100)+(inmigracionFem.value/100)-(emigracionFem.value/100);
    var totalM=(natalidadMasc.value/100)-(mortalidadMasc.value/100)+(inmigracionMasc.value/100)-(emigracionMasc.value/100);
    var calculo= 1 + (totalF+totalM);
    alert(calculo);

    var totalTasaF= Math.pow(calculo,cantidadA.value);
    var valorPoblacion=poblacion.value * totalTasaF;
    etiquetafinal.value=Math.round(valorPoblacion);


    for (var i = 0; i <= cantidadA.value; i++) {
      
      var hilera = document.createElement("tr");

      for (var j = 0; j < 13; j++) {


          var celda = document.createElement("td");

          tasaNF=parseInt(poblacion.value*(natalidadFem.value/100));
          tasaNM=parseInt(poblacion.value*(natalidadMasc.value/100));
          tasaMF=parseInt(poblacion.value*(mortalidadFem.value/100));
          tasaMM=parseInt(poblacion.value*(mortalidadMasc.value/100));
          tasaIF=parseInt(poblacion.value*(inmigracionFem.value/100));
          tasaIM=parseInt(poblacion.value*(inmigracionMasc.value/100));
          tasaEF=parseInt(poblacion.value*(emigracionFem.value/100));
          tasaEM=parseInt(poblacion.value*(emigracionMasc.value/100));

          var poblacionFem=tasaNF-tasaMF+tasaIF-tasaEF;
          var poblacionMasc=tasaNM-tasaMM+tasaIM-tasaEM;
          var poblacionTotalFinal=poblacionFem+poblacionMasc;
          var nuevo=poblacion.value;


          var arrporcentajes=[i,nuevo,tasaNF,tasaNM,tasaMF,tasaMM,tasaIF,tasaIM,tasaEF,tasaEM, poblacionFem,poblacionMasc,poblacionTotalFinal];
          var textoCelda = document.createTextNode(arrporcentajes[j]);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);


      }

  tabla.appendChild(hilera);
  aux1= parseInt(poblacion.value);
  aux2= parseInt(poblacionTotalFinal);
  poblacion.value=aux1+aux2;
  }


}


function limpiar(){
    poblacion.value="";
    cantidadA.value="";
    natalidadFem.value="";
    natalidadMasc.value="";
    mortalidadFem.value="";
    mortalidadMasc.value="";
    inmigracionFem.value="";
    inmigracionMasc.value="";
    emigracionMasc.value="";
    emigracionFem.value="";
    etiquetafinal.value="";
    
    var columnas = tabla.rows.length;
    for (var x=columnas-1; x>1; x--) {
       tabla.deleteRow(x);
    }
}

function modal(){
    var modal = document.getElementById("myModal");
    var botonSalir = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    
    botonSalir.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}