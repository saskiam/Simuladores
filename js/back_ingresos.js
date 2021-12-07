var ctx = document.getElementById('myChart').getContext('2d');


let matrizChart = [100, 10, 5, 2, 20, 30, 45]
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7'],
        datasets: [{
            label: 'Ingresos Generados',
            //backgroundColor: 'rgb(255, 99, 132)',
            borderColor: '#FF5722',
            data: matrizChart

        }]
    },

    // Configuration options go here
    options: {}
});

let arraystep2 = [null, null, null, null];
let arraystep3 = [null, null, null, null];
let matrizLimites1 = [];
let matrizLimites2 = [];


function guardarDatos() {

    let r1 = document.querySelector("#prob_cru1");
    let r2 = document.querySelector("#prob_cru2");
    let r3 = document.querySelector("#prob_cru3");
    let r4 = document.querySelector("#prob_cru4");
    let r5 = document.querySelector("#prob_pas1");
    let r6 = document.querySelector("#prob_pas2");
    let r7 = document.querySelector("#prob_pas3");
    let r8 = document.querySelector("#prob_pas4");
    let num_crucero = parseInt(document.querySelector("#num_crucero").value ? document.querySelector("#num_crucero").value : 0);
    let num_pasajero = parseInt(document.querySelector("#num_pasajero").value ? document.querySelector("#num_pasajero").value : 0);
    arraystep2[0] = parseInt(r1.value);
    arraystep2[1] = parseInt(r2.value);
    arraystep2[2] = parseInt(r3.value);
    arraystep2[3] = parseInt(r4.value);
    arraystep3[0] = parseInt(r5.value);
    arraystep3[1] = parseInt(r6.value);
    arraystep3[2] = parseInt(r7.value);
    arraystep3[3] = parseInt(r8.value);

    matrizLimites1 = calcularLimitesCrucero(arraystep2, num_crucero);
    matrizLimites2 = calcularLimitesPasajeros(arraystep3, num_pasajero);
    console.log(matrizLimites1, arraystep2);
    console.log(matrizLimites2);

}
function calcularDatosChart() {
    let total_promedio = document.querySelector("#total_promedio");
    let precio_pasaje = (document.querySelector("#precio_pasaje").value ? document.querySelector("#precio_pasaje").value : 0);
    let ingresos = [];
    console.log(matrizLimites1);
    console.log(matrizLimites2);
    let total = 0
    for (let i = 0; i < 7; i++) {
        const randomCrucero = Math.floor(Math.random() * matrizLimites1.length);
        const randomPasajero = Math.floor(Math.random() * matrizLimites2.length);
        console.log(randomCrucero, randomPasajero);
        console.log(matrizLimites1[randomCrucero].cruceros, (matrizLimites1[randomCrucero].ls / 100), matrizLimites2[randomPasajero].pasajeros, (matrizLimites2[randomPasajero].ls / 100), parseInt(precio_pasaje))
        ingresos.push((matrizLimites1[randomCrucero].cruceros * (matrizLimites1[randomCrucero].ls / 100)) * (matrizLimites2[randomPasajero].pasajeros * (matrizLimites2[randomPasajero].ls / 100)) * parseInt(precio_pasaje));
    }
    ingresos.forEach(e => {
        total += e
    })
    total = total / ingresos.length;
    total_promedio.value = total;
    console.log(ingresos);
    matrizChart = ingresos;
    chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7'],
            datasets: [{
                label: 'Ingresos Generados',
                //backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#FF5722',
                data: ingresos

            }]
        },

        // Configuration options go here
        options: {}
    });
}
const calcularRamdon = () => {
    let precio_pasaje = document.querySelector("#precio_pasaje");
    index = Math.floor(Math.random() * matrizLimites1.length);
    index2 = Math.floor(Math.random() * matrizLimites2.length);
    console.log([matrizLimites1[index] * matrizLimites2[index2]] * parseInt(precio_pasaje.value));
    return [matrizLimites1[index].ls * matrizLimites2[index2]].ls * parseInt(precio_pasaje.value);
}
function calcularLimitesCrucero(array, n) {
    let arregloT = [];
    let lm = 0;
    array.forEach((e, index) => {
        if (index == 0) {
            arregloT.push({
                id: index,
                lm: lm,
                ls: e,
                cruceros: index
            })
            lm = e
        } else {
            if (index * 2 <= n) {
                arregloT.push({
                    id: index,
                    lm: lm,
                    ls: lm + e,
                    cruceros: index * 2
                })
                lm = lm + e



            }
        }
    })
    return arregloT;

}
function calcularLimitesPasajeros(array, n) {
    let arregloT = [];
    let lm = 0;
    array.forEach((e, index) => {
        if (index == 0) {
            arregloT.push({
                id: index,
                lm: lm,
                ls: e,
                pasajeros: Math.floor(Math.random() * (index * 500 - 400)) + 400
            })
            lm = e
        } else {
            if (index * 500 <= n) {
                arregloT.push({
                    id: index,
                    lm: lm,
                    ls: lm + e,
                    pasajeros: Math.floor(Math.random() * (index * 500 - 400)) + 400
                })
                lm = lm + e


            }
        }
    })
    return arregloT;
}