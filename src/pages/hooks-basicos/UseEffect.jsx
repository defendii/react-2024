import { useEffect, useState } from "react";
import { Pagina } from "../../components/Pagina";

export function UseEffect(){
    const [url, setUrl] = useState("")

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resposta => resposta.json())
        .then(objeto => {
            console.log(objeto)
            setUrl(objeto.message)
        })
    }, [])

    return(
        <Pagina titulo="useEffect" subtitulo="Hooks Básicos"> 
            <img src={url} alt="" />
        </Pagina>
    )
}