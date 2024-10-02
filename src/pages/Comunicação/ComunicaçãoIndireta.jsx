import { Pagina } from "../../components/Pagina"
import { PaiIndireta } from "../../components/comunicação/indireta/PaiIndireta"

export function ComunicaçãoIndireta(){

    return(
        <Pagina 
        titulo="Comunicação Indireta" 
        subtitulo="Exemplo de comunicação INDIRETA entre componentes"
        >
            <PaiIndireta></PaiIndireta>
        
        </Pagina>
    )
}