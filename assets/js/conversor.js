//Profesor Evaluador: por mas que intente no logre dibujar los graficos. Dejo el codigo comentado para que lo pueda ver y me indique en que me equivoque. Gracias.

const pesosCLP = document.querySelector("input");
const selectMoneda = document.getElementById("select");
const btnBuscar = document.getElementById("buscar");
const resultado = document.getElementById("result");
//let migrafico = null;
const apiURL = "https://mindicador.cl/api";

const getConversor = async () => {
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;
}

const renderConversor = (conversion) => {
    let moneda = selectMoneda.value
    let indicador = conversion[moneda].valor
    resultado.innerHTML = `${indicador * pesosCLP.value}`;
}

//const configGrafica = (ultimosDatos) => {
    //const fechas = ultimosDatos.slice(0, 10).map(item => item.fecha);
    //const valores = ultimosDatos.slice(0, 10).map(item => item.valor);

    //const config = {
        //type: "line",
        //data: {
            //labels: fechas,
            //datasets: [
                //{
                    //label: selectMoneda.value.toUpperCase(),
                    //backgroundColor: "white",
                    //data: valores
                //}
            //]
        //}
    //};
    //return config;
//}

//const renderGrafica = (config) => {
    //const myChart = document.getElementById("myChart");
    //if (migrafico !== null) {
        //migrafico.destroy();
    //}
    //migrafico = new Chart(myChart, config);
//}

const main = async () => {
    try {
        const conversion = await getConversor();
        renderConversor(conversion);
        //const monedaSeleccionada = conversion[selectMoneda.value];
        //const ultimosDatos = monedaSeleccionada.serie;
        //const config = configGrafica(ultimosDatos);
        //renderGrafica(config);
    } catch (error) {
        alert(error.message)
    }
}

main();

btnBuscar.addEventListener("click", main);

pesosCLP.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        main();
    }
});

selectMoneda.addEventListener("change", main);