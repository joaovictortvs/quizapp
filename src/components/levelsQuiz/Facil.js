import { useLocation, useParams } from "react-router-dom"
import {useState} from 'react'

import '../../output.css'

function Facil(){

    const { id } = useParams()
    const location = useLocation()    
    
    const level = location.state?.level

    function createQuestion(questions){
       // criar questões
    }

    function requestApi(){
        fetch(`https://quizapi.io/api/v1/questions?category=${id}&difficulty=${level}&limit=10`, {
            method: 'GET',
            headers: {
                'X-Api-Key': "9irGLKfYx2BJQbpKf4dBDCw4k7LKRG6CexZY4zTD"
            }
        })

        .then(resp => resp.json())
        .then(data=> createQuestion(data))
    }

    return(
        <p onClick={requestApi}>Fácil</p>
    )
    
}

export default Facil