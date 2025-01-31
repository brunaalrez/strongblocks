
function Blocos(arrt) {
    return ( 
        <div className="text-center border-solid text-black bg-blue-500 p-5 border-yellow-50 shadow-2xl ">
            <p>Qual tipo de bloco você precisa?</p>
            <img src="https://placehold.co/200"/>
            <p>{arrt.nomeproduto}</p>
            <button href="adiquirir_produto" className="bg-white text-color-black">Adiquirir</button>
        </div>
     );
}

export default Blocos;