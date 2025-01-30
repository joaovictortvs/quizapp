import '../../output.css'

import BoxLink from '../itensPages/BoxLink'

function NextJs(){

    return(
        <div className='flex flex-col w-full items-center'>
            <p className='mt-6'>Teste seu conhecimento em:</p>
            <p className='text-xl m-4 px-4 py-2 bg-black'>NextJs</p>
            <BoxLink pagina='facil' dificuldade='Fácil'/>
            <BoxLink pagina='medio' dificuldade='Médio'/>
            <BoxLink pagina='dificil' dificuldade='Difícil'/>
        </div>    
    )

}

export default NextJs