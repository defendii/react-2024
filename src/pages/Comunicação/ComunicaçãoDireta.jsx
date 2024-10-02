import { Pagina } from "../../components/Pagina"
import { PaiDireta } from "../../components/comunicação/direta/PaiDireta"

export function ComunicaçãoDireta(){

    return(
        <Pagina 
        titulo="Comunicação Direta" 
        subtitulo="Exemplo de comunicação DIRETA entre componentes"
        >
            <PaiDireta></PaiDireta>
        
        </Pagina>
    )
}