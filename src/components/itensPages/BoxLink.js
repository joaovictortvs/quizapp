import { Link } from 'react-router-dom'

import '../../output.css'

function BoxLink({pagina, name=null, dificuldade}){

    return(
        <div className='w-5/10 flex justify-center items-center'>
            <Link to={`/${pagina}`} className='flex flex-col items-center border border-blue-700 w-1/2 p-4 bg-gray-600 hover:border-red-700 hover:bg-gray-700 rounded-xl duration-300 my-4'>
                {name !== null ? (
                    <>
                        <p>{name}</p>
                        <p>Teste seus conhecimentos em {name}</p>
                    </>    
                ) : (
                    <p>{dificuldade}</p>
                )}
            </Link>
        </div>
    )

}

export default BoxLink