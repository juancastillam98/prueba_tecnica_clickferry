import Image from 'next/image'
import {Calendario} from "@/components/Calendario";
import {fechaAnyoMesDia, getDiaMeses, obtenerFechaSeleccionada} from "@/utils/funciones";
import {getSalidasDia} from "@/utils/apis";

export default function Home() {
    const meses=getDiaMeses(2);
    //const [fechaFromateada, setFechaFromateada] = useState(null)




  return (

      <main>
          <h1 className={"text-4xl text-center my-7"}>Prueba técnica Juan Castilla</h1>
          <div className={"flex justify-center flex-wrap gap-x-14"}>
              {meses.map((mes, index) =>(
                  <Calendario
                      key={index}
                      mes={mes}
                      //obtenerFecha={obtenerFecha}
                  />
              ))}
          </div>
      </main>
  )
}
