'use client'
import { useState } from "react";
import Blocos from "./components/blocos";

function Produtos() {
    const [blocos, alteraBloco] = useState([{
        id:0,
        nome: "Bloco A"
    },{
        id:1,
        nome: "Bloco B"
    },{
        id:2,
        nome: "Bloco C"
    }])
    
    return ( 
        <div>
            <div className="text-gray-800 bg-gray-300">
            <h1 className="text-center mt-8">Produtos</h1>
            <hr/>
            <p className="text-center">Precisa de mais blocos para sua construção?</p>
            <p className="text-center">Confira agora os diversos blocos que temos!</p>
            

            <div className="justify-flex px-30">
                <ul>
                    {
                        blocos.map((i)=>
                        <Blocos nome={i.nome}/>
                    )
                    }
                </ul>
                
                
            </div>
            
            </div>
        </div>
     );
}

export default Produtos;