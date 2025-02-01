import Blocos from "./blocos";

function PrimeiraPagProduto() {
    return ( 
        <div className="text-gray-800 bg-gray-300">
            <h1 className="text-center mt-8">Produtos</h1>
            <hr/>
            <p className="text-center">Precisa de mais blocos para sua construção?</p>
            <p className="text-center">Confira agora os diversos blocos que temos!</p>
            

            <div className="justify-flex px-30">
                <Blocos nomeproduto="Bloco A"/>
                <Blocos nomeproduto="Bloco B"/>
                <Blocos nomeproduto="Bloco C"/>
            </div>
            
        </div>
     );
}

export default PrimeiraPagProduto;