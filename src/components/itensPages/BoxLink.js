import { Link } from 'react-router-dom'

import '../../output.css'

function BoxLink({pagina, name}){

    return(
        <div className='w-4/10 flex justify-center items-center'>
            <Link to={`/${pagina}`} className='flex flex-col items-center border border-white w-1/2 p-4'>
                {name}
                <p>Teste seus conhecimentos em {name}</p>
            </Link>
        </div>
    )

}

export default BoxLink