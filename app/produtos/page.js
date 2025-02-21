'use client'
import { useState } from "react";
import Blocos from "./components/blocos";

function Produtos(arrt) {
    const [blocos, alteraBloco] = useState([{
        id:0,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "A"
    },{
        id:1,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "B"
    },{
        id:2,
        imagem:"https://th.bing.com/th/id/OIP._pnugJyzaPk5tB80UY6WfgHaGF?rs=1&pid=ImgDetMain",
        nome: "C"
    }])
    
    return ( 
        <div>
            <div className="text-gray-800 bg-gray-300">
            <h1 className="text-center mt-8">Produtos</h1>
            <hr/>
            <p className="text-center">Precisa de mais blocos para sua construção?</p>
            <p className="text-center">Confira agora os diversos blocos que temos!</p>
            

            <div className="justify-flex px-30 text-center">
            <p>Qual tipo de bloco você precisa?</p>
                <ul>
                    {
                        blocos.map((i)=>
                        <Blocos produto={i}/>
                    )
                    }
                </ul>
                
                
            </div>
            
            </div>
        </div>
     );
}

export default Produtos;