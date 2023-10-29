export function getDiaMeses(totalMeses = 2) {
    const diaActual = new Date();
    const meses = [];

    for (let i = 0; i < totalMeses; i++) {
        const anyoActual = diaActual.getFullYear();
        const mesActual = diaActual.getMonth();
        const diasEnMes = new Date(anyoActual, mesActual + 1, 0).getDate();
        const diasRestantes = diasEnMes - diaActual.getDate() +1;

        meses.push({
            anyoActual,
            nombreMes: diaActual.toLocaleString('default', { month: 'long' }),
            totalDias: diasEnMes,
            diaMes: mesActual,
            diasRestantes,
            diaActual
        });

        // Avanza al siguiente mes
        diaActual.setMonth(mesActual + 1);
        diaActual.setDate(1);

    }
    return meses;
}

export const fechaAnyoMesDia =(fecha)=>{
    return fecha.toISOString().split('T')[0];
}
export const obtenerFechaSeleccionada = (diaSeleccionado, mesSeleccionado, anyoSeleccionado) => {
    const fechaEscogida = new Date();
    fechaEscogida.setDate(diaSeleccionado);
    fechaEscogida.setMonth(mesSeleccionado);
    fechaEscogida.setFullYear(anyoSeleccionado)
    return fechaEscogida;
};