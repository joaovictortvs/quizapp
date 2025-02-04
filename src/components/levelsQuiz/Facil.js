import { useLocation, useParams } from "react-router-dom"
import {useEffect, useState} from 'react'

import Loading from '../../img/loading.svg'

import '../../output.css'
import Titulo from "../quizComponents/Titulo"
import Perguntas from "../quizComponents/Perguntas"

function Facil(){

    const [removeLoading, setRemoveLoading] = useState(false)
    const [questShow, setQuestShow] = useState(false)
    const [erroQuestShow, setErroQuestShow] = useState(false)
    const [terminoQuiz, setTerminoQuiz] = useState(false)

    const [titulo, setTitulo] = useState()
    const [quests, setQuests] = useState([])
    const [indiceAtual, setIndiceAtual] = useState(0)
    const [questsAtual, setQuestsAtual] = useState()

    const { id } = useParams()
    const location = useLocation()    
    const level = location.state?.level

    function createQuestion(questions){
        setRemoveLoading(true)
        setQuestShow(true)
        setQuests(questions)
        
        setIndiceAtual((prevIndice)=>{
            if(prevIndice < questions.length - 1){
                return prevIndice + 1
            } else{
                setTerminoQuiz(true)
                return prevIndice
            }
        })

    }

    useEffect(()=>{
        if(quests.length > 0 && indiceAtual < quests.length){
            setTitulo(quests[indiceAtual].question)
            setQuestsAtual(quests[indiceAtual].answers)
        }
    }, [indiceAtual, quests])

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-Api-Key': "9irGLKfYx2BJQbpKf4dBDCw4k7LKRG6CexZY4zTD",
                'Content-Type': "application/json"
            }
        }

        async function requestApi(){
            try{
                  const response = await fetch(`https://quizapi.io/api/v1/questions?category=${id}&difficulty=${level}&limit=10`, options)

                const data = await response.json()
                
                setQuests(data)
                createQuestion(data)
            } catch(err){
                console.log(err)
                setErroQuestShow(true)
            }
          
        }
        requestApi()

    }, [id, level])

    return(
        <div className="flex w-full h-full justify-center">
            {!removeLoading && (
                <div>
                    <img src={Loading} className="w-12 pt-4" alt="loading"/>
                </div>
            )}
            {questShow !== false &&  (
                <div className="flex flex-col w-5/10 text-black items-center flex-wrap">
                    <p className="text-2xl text-gray-100">Pergunta {indiceAtual} de 10</p>
                    {terminoQuiz && (<p className="text-green-500 my-2">Quiz terminado!</p>)}
                    <Titulo titulo={titulo}/>
                    <Perguntas perguntas={questsAtual} />
                </div>
            )}  
            {erroQuestShow && (
                <p className="self-center text-2xl text-red-900 bg-gray-500 p-4 font-mono">Erro, tente novamente mais tarde!</p>
            )}
        </div>
        
    )
    
}

export default Facil