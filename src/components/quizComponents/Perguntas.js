function Perguntas({perguntas}){

    return(
        <div className="flex flex-col justify-evenly w-9/10 space-y-2 flex-auto">
            <p className="ml-2 border p-2 border-black max-w-9/10 cursor-pointer">resposta a</p>
            <p className="ml-2 border p-2 border-black max-w-9/10 cursor-pointer">resposta b</p>
            <p className="ml-2 border p-2 border-black max-w-9/10 cursor-pointer">resposta c</p>
            <p className="ml-2 border p-2 border-black max-w-9/10 cursor-pointer">resposta d</p>
        </div>   
    )

}

export default Perguntas