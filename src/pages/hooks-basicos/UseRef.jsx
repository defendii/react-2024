import { useState } from "react";
import { Pagina } from "../../components/Pagina";
import { useRef } from "react";

export function UseRef(){
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementaEstado(){
        setEstado(estado + 1)
    }

    function incrementaReferencia(){
        referencia.current += 1
    }

    return(
        <Pagina titulo="useRef" subtitulo="Hooks Básicos"> 
            <div className="flex flex-col">
                {`Ref: ${referencia.current} | State: ${estado}`}
                <div>
                    <button className="bg-red-400 p-3" onClick={incrementaReferencia}>Ref +</button>
                    <button className="bg-purple-400 p-3" onClick={incrementaEstado}>Estado +</button>
                </div>
               
            </div>
        </Pagina>
    )
}