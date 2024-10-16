import React, { useState } from 'react';

export function Tradutor() {
    const [value, setValue] = useState('');

    function traduzir() {
    }

    function contarCaracteres(event) {
        const tamanho = event.target.value.length;
        console.log(tamanho);

    }



    return (
      <div className={` w-full h-full ml-5`}>
        <h1 className={`font-bold mt-5 text-4xl`}>Tradutor</h1>
  
        <div className={`flex w-full h-full mt-6`}>
          
            <div className={`flex flex-col w-full h-full`}>
                <p>Português</p>

                <div className={`bg-gray-200 border-gray-500 flex flex-col h-1/2 w-3/4 rounded-sm `}>
                    <textarea alue={value} 
                        onChange={(e) => { 
                            setValue(e.target.value);
                            contarCaracteres(e);
                        }}  
                        maxLength={250} className={`bg-transparent resize-none h-80`}></textarea>

                    <div className={`flex items-center mt-2 ml-3 space-x-64`}>
                        <span>{value.length}/250</span>
                        <button onClick={traduzir} className={`bg-pink-300 rounded-md w-4/12 h-8`}>Traduzir</button>
                    </div>
                    
                </div>

            </div>
          
            <div className={`flex flex-col w-full h-full`}>
                <p>Inglês</p>

                <div className={`bg-gray-200 border-gray-500 flex flex-col h-1/2 w-3/4 rounded-sm`}>

                </div>

            </div>
        
        </div>
      </div>
    )
  }