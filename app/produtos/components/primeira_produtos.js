import Blocos from "./blocos";

function PrimeiraPagProduto() {
    return ( 
        <div>
            <h1>Produtos</h1>
            <hr/>
            <p>Precisa de mais blocos para sua construção?</p>
            <p>Confira agora os diversos blocos que temos!</p>
            <hr/>

            <div className="flex justify-around">
                <Blocos nomeproduto="Bloco A"/>
                <Blocos nomeproduto="Bloco B"/>
                <Blocos nomeproduto="Bloco C"/>
            </div>
            
        </div>
     );
}

export default PrimeiraPagProduto;