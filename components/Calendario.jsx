import { obtenerFechaSeleccionada, fechaAnyoMesDia } from "@/utils/funciones";
import { getSalidasDia } from "@/utils/apis";

export const Calendario = ({ mes }) => {
    const { anyoActual, nombreMes, totalDias, diaMes, diasRestantes, diaActual } = mes;
    const diasConsumidos = totalDias - diasRestantes;
    const diasMes = Array.from({ length: totalDias }, (_, index) => index + 1);

    const comprobarSalidas = async (dia) => {
        const fechaSeleccionada = obtenerFechaSeleccionada(dia, diaMes, anyoActual);
        const fechaFormateada = fechaAnyoMesDia(fechaSeleccionada);

        const resultado = await getSalidasDia(fechaFormateada);
        //const diaSeleccionado = document.querySelector(".dia");
        return resultado.length;
    };

    return (
        <div className={"text-center max-w-xs"}>
            <h3 className={"text-2xl my-2"}>{nombreMes}</h3>
            <ol className="grid grid-cols-7 list-none p-0">
                <li className={"font-bold bg-gray-300 text-center"}>Lun</li>
                <li className={"font-bold bg-gray-300 text-center"}>Mar</li>
                <li className={"font-bold bg-gray-300 text-center"}>Mié</li>
                <li className={"font-bold bg-gray-300 text-center"}>Jue</li>
                <li className={"font-bold bg-gray-300 text-center"}>Vie</li>
                <li className={"font-bold bg-gray-300 text-center"}>Sáb</li>
                <li className={"font-bold bg-gray-300 text-center"}>Dom</li>
                {diasMes.map(async (dia) => {
                    const clasesDia = [];
                    const haySalidas = await comprobarSalidas(dia);

                    clasesDia.push(haySalidas > 0 ? "text-green-700" : "text-red-700")

                    if (dia - 1 < diasConsumidos) {
                        clasesDia.push('text-neutral-400 hover:cursor-default text-sm');
                        clasesDia.splice("text-red-700 text-green-700");
                    }
                    return (
                        <li
                            key={Date.now() * dia}
                            className={`dia p-2 text-center text-right hover:cursor-pointer ${
                                clasesDia.join(' ')
                            }`}
                        >
                            {dia}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
