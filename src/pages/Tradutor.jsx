import React, { useState } from 'react';

export function Tradutor() {

    const [texto, setTexto] = useState('');
    const [traducao, setTraducao] = useState('');
    const [contador, setContador] = useState(0);

    async function traduzir() {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=pt-br|en-us`)
        const data = await response.json()
        const translatedText = data.responseData.translatedText
        setTraducao(translatedText)
    } 

    function contarCaracteres(texto) {
        const tamanho = texto.length
        setContador(tamanho)
    }


    return (
        <div className={` w-full h-full ml-5`}>
            <h1 className={`font-bold mt-5 text-4xl`}>Tradutor</h1>

            <div className={`flex w-full h-full mt-6`}>
            
                <div className={`flex flex-col w-full h-full`}>
                    <p>Português</p>

                    <div className={`bg-gray-200 border-gray-500 flex flex-col h-1/2 w-3/4 rounded-sm `}>
                        <textarea value={texto} 
                            onChange={(e) => { 
                                setTexto(e.target.value)
                                contarCaracteres(e.target.value)
                            }}  
                            maxLength={250} className={`bg-transparent resize-none h-80`}>

                        </textarea>

                        <div className={`flex items-center mt-2 ml-3 space-x-64`}>
                            <span>{contador}/250</span>
                            <button onClick={traduzir} className={`bg-pink-300 rounded-md w-4/12 h-8`}>Traduzir</button>
                        </div>
                        
                    </div>

                </div>
        
                <div className={`flex flex-col w-full h-full`}>
                    <p>Inglês</p>

                    <div className={`bg-gray-200 border-gray-500 flex flex-col h-1/2 w-3/4 rounded-sm`}>
                        <textarea value={traducao} readOnly className={`bg-transparent resize-none h-80`}>
                        </textarea>

                    </div>

                </div>
        
            </div>
        </div>
    )
}