import '../../output.css'

import BoxLink from '../itensPages/BoxLink'

function Home(){
 //https://quizapi.io/api/v1/questions?category=Networking&limit=10 exemplo de requisiçao
    function requestApi(){
        fetch('https://quizapi.io/api/v1/results', {
            method: 'GET',
            headers: {
                'X-Api-Key': "9irGLKfYx2BJQbpKf4dBDCw4k7LKRG6CexZY4zTD"
            }
        })

        .then(resp => resp.json())
        .then(data=> console.log(data))
    }

    return(
        <div className='w-full h-full flex flex-col justify-start items-center'>
            <p>Home</p>
            <BoxLink pagina='#' name="Next.Js"/>
        </div>
        
    )

}

export default Home