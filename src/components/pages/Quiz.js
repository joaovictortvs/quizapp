import '../../output.css'

import { useParams } from 'react-router-dom'

import BoxLink from '../itensPages/BoxLink'

function Quiz(){

    const { id } = useParams()

    return(
        <div className='flex flex-col w-full items-center'>
            <p className='mt-6 text-2xl'>Test your knowledge in:</p>
            <p className='text-xl m-4 px-4 py-2 bg-black'>{id}</p>
            <BoxLink pagina='easy' dificuldade='Easy' id={id} page={true}/>
            <BoxLink pagina='medium' dificuldade='Medium' id={id} page={true}/>
            <BoxLink pagina='hard' dificuldade='Hard' id={null} page={true}/>
        </div>    
    )

}

export default Quiz