import { useLocation, useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import Loading from '../../img/loading.svg'

import '../../output.css'
import Titulo from "../quizComponents/Titulo"
import Perguntas from "../quizComponents/Perguntas"

function Medio(){

    const [removeLoading, setRemoveLoading] = useState(false)
    const [questShow, setQuestShow] = useState(false)
    const [erroQuestShow, setErroQuestShow] = useState(false)
    const [terminoQuiz, setTerminoQuiz] = useState(false)
    const [respostasCertas, setRespostasCertas] = useState(0)

    const [titulo, setTitulo] = useState()
    const [quests, setQuests] = useState()
    const [indiceAtual, setIndiceAtual] = useState(0)
    const [perguntaContagem, setPerguntaContagem] = useState(1)
    const [questsAtual, setQuestsAtual] = useState()
    const [valorRespostasAtual, setValorRespostasAtual] = useState()

    const { id } = useParams()
    const location = useLocation()    
    const level = location.state?.level

    function createQuestion(questions){
        setRemoveLoading(true)
        setQuestShow(true)

        setTitulo(questions[indiceAtual].question)
        setQuestsAtual(questions[indiceAtual].answers)
        setValorRespostasAtual(questions[indiceAtual].correct_answers)
        setIndiceAtual(prevIndice=> prevIndice + 1)
    }

    function nextQuestion(respFalseTrue){
        if(perguntaContagem <= 10){
            setPerguntaContagem(numPerg => numPerg + 1)
        }

        if(respFalseTrue === 'true'){
            setRespostasCertas(quantidade => quantidade + 1)
        }

        if(indiceAtual < quests.length){
            createQuestion(quests)
        } else{
            setTerminoQuiz(true)
            setQuestShow(false)
            setIndiceAtual(0)
            setPerguntaContagem(1)
        }
    }

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

    }, [])


    return(
        <div className="flex w-full h-full justify-center">
            {!removeLoading && (
                <div>
                    <img src={Loading} className="w-12 pt-4" alt="loading"/>
                </div>
            )}
            {questShow !== false &&  (
                <div className="flex flex-col w-5/10 text-black items-center ">
                    <p className="text-2xl text-gray-100">Question <span>{perguntaContagem}</span> of 10</p>
                    <Titulo titulo={titulo}/>
                    <Perguntas perguntas={questsAtual} clickQuest={nextQuestion} correctAnswers={valorRespostasAtual}/>
                </div>
            )}  
            {terminoQuiz && (
                        <div className="flex flex-col w-full h-full items-center">
                            <p className="text-pink-50 font-bold my-2 text-3xl text-center">Quiz finished!</p>
                            <div className="flex flex-col justify-around items-center h-3/10 mb-4">
                                <p className="text-4xl font-semibold">Result :</p>
                                <span className="text-5xl font-bold text-green-600">{respostasCertas}/10</span>
                            </div>    
                            <Link to='/' className="py-4 px-6 bg-cyan-950 rounded-md hover:bg-cyan-800 duration-200">Back</Link>
                        </div>    
                    )}
            {erroQuestShow && (
                <p className="self-center text-2xl text-red-900 bg-gray-500 p-4 font-mono">Error, try again later!</p>
            )}
        </div>
    )

}

export default Medio