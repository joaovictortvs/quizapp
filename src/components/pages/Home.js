import '../../output.css'

import BoxLink from '../itensPages/BoxLink'

function Home(){
 //https://quizapi.io/api/v1/questions?category=Networking&limit=10 exemplo de requisiçao
    function requestApi(){
        fetch('https://quizapi.io/api/v1/categories', {
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
            <p className='self-start text-xl m-4' onClick={requestApi}>Home</p>
            <BoxLink pagina='react' name="React"/>
            <BoxLink pagina='nodejs' name="Node Js"/>
            <BoxLink pagina='nextjs' name="Next Js"/>
            <BoxLink pagina='vuejs' name="Vue Js"/>
            <BoxLink pagina='django' name="Django"/>
            <BoxLink pagina='linux' name="Linux"/>
            <BoxLink pagina='bash' name="Bash"/>
            <BoxLink pagina='sql' name="SQL"/>
            <BoxLink pagina='devops' name="DevOps"/>
            <BoxLink pagina='wordpress' name="WordPress"/>
        </div>
        
    )

}

export default Home