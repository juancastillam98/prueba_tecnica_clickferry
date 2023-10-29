export async function getSalidasDia(fecha){
    const respuesta = await fetch(`https://tadpole.clickferry.app/departures?route=ALGECEUT&time=${fecha}`)
    const resultado = await respuesta.json();
    //console.log(resultado)
    return resultado;
}