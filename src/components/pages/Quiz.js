import '../../output.css'

import { useParams } from 'react-router-dom'

import BoxLink from '../itensPages/BoxLink'

function Quiz(){

    const { id } = useParams()

    return(
        <div className='flex flex-col w-full items-center'>
            <p className='mt-6 text-2xl'>Teste seu conhecimento em:</p>
            <p className='text-xl m-4 px-4 py-2 bg-black'>{id}</p>
            <BoxLink pagina='easy' dificuldade='Fácil' id={id} page={true}/>
            <BoxLink pagina='medium' dificuldade='Médio' id={id} page={true}/>
            <BoxLink pagina='hard' dificuldade='Difícil' id={null} page={true}/>
        </div>    
    )

}

export default Quiz