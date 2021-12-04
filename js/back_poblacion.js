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

    var pInicial=poblacion.value;
    var totalF=(natalidadFem.value/100)-(mortalidadFem.value/100)+(inmigracionFem.value/100)-(emigracionFem.value/100);
    var totalM=(natalidadMasc.value/100)-(mortalidadMasc.value/100)+(inmigracionMasc.value/100)-(emigracionMasc.value/100);
    var calculo= 1 + (totalF+totalM);
    alert(calculo);

    var totalTasaF= Math.pow(calculo,cantidadA.value);
    var valorPoblacion=pInicial * totalTasaF;
    etiquetafinal.value=Math.round(valorPoblacion);
    

    for (var i = 0; i <= cantidadA.value; i++) {
      var hilera = document.createElement("tr");
      for (var j = 0; j < 13; j++) {
          var celda = document.createElement("td");

          tasaNF=parseInt(pInicial*(natalidadFem.value/100));
          tasaNM=parseInt(pInicial*(natalidadMasc.value/100));
          tasaMF=parseInt(pInicial*(mortalidadFem.value/100));
          tasaMM=parseInt(pInicial*(mortalidadMasc.value/100));
          tasaIF=parseInt(pInicial*(inmigracionFem.value/100));
          tasaIM=parseInt(pInicial*(inmigracionMasc.value/100));
          tasaEF=parseInt(pInicial*(emigracionFem.value/100));
          tasaEM=parseInt(pInicial*(emigracionMasc.value/100));

          var poblacionFem=tasaNF-tasaMF+tasaIF-tasaEF;
          var poblacionMasc=tasaNM-tasaMM+tasaIM-tasaEM;
          var poblacionTotalFinal=poblacionFem+poblacionMasc;
          var arrporcentajes=[i,pInicial,tasaNF,tasaNM,tasaMF,tasaMM,tasaIF,tasaIM,tasaEF,
                                tasaEM, poblacionFem,poblacionMasc,poblacionTotalFinal];

          var textoCelda = document.createTextNode(arrporcentajes[j]);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);

      }

        tabla.appendChild(hilera);
        sumatoria1= parseInt(pInicial);
        sumatoria2= parseInt(poblacionTotalFinal);
        pInicial=sumatoria1+sumatoria2;
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
    for (var x=columnas-1; x>2; x--) {
       tabla.deleteRow(x);
    }
}
