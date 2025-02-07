import { Link, Navigate } from 'react-router-dom'

import '../../output.css'

import { useNavigate } from 'react-router-dom'

function BoxLink({ name=null, dificuldade, id, pagina, page}){

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/quiz/${id}/${pagina}`, {state: {level: pagina}})
    }

    return(
        <div className='w-5/10 flex justify-center items-center'>
            {name !== null ? (
                <Link to={page !== true ? `/quiz/${id}` : `/quiz/${id}/${pagina}`} className='flex flex-col items-center border border-blue-700 w-1/2 p-4 bg-gray-600 hover:border-red-700 hover:bg-gray-700 rounded-xl duration-300 my-4'>
                    <p className='text-cyan-200'>{name}</p>
                    <p>Test your {name} skills</p>
                </Link>    
            ) : (
                <p onClick={handleClick} className='flex justify-center border border-blue-700 w-1/2 p-4 bg-gray-600 hover:border-red-700 my-4 rounded-xl cursor-pointer'>{dificuldade}</p>
            )}
        </div>
    )

}

export default BoxLink