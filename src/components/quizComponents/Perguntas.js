import '../../output.css'

import {useState, useEffect} from 'react'

function Perguntas({perguntas, correctAnswers, clickQuest}){

    const [quests, setQuests] = useState([])
    const [valorResposta, setValorResposta] = useState([])

    useEffect(()=>{
        
        setQuests(perguntas)
        setValorResposta(correctAnswers)

    }, [perguntas])

    function clickResposta(key){
        clickQuest(key)
    }

    return(
        <div className="flex flex-col justify-evenly items-center space-y-2 flex-auto">
            <p className="border p-2 border-white max-w-9/10 cursor-pointer text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10 rounded-lg" onClick={(evt)=>{ clickResposta(evt.target.id)}} id={valorResposta.answer_a_correct}>
            <span className='text-cyan-950'>A.</span>    {quests.answer_a}
            </p>
            <p className="border p-2 border-white max-w-9/10 cursor-pointer  text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10 rounded-lg" onClick={(evt)=>{ clickResposta(evt.target.id)}} id={valorResposta.answer_b_correct}>
            <span className='text-cyan-950'>B.</span>   {quests.answer_b}
            </p>
            <p className=" border p-2 border-white max-w-9/10 cursor-pointer  text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10 rounded-lg" onClick={(evt)=>{ clickResposta(evt.target.id)}} id={valorResposta.answer_c_correct}><span className='text-cyan-950'>C.</span>    {quests.answer_c}
            </p>
            <p className=" border p-2 border-white max-w-9/10 cursor-pointer  text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10 rounded-lg" onClick={(evt)=>{ clickResposta(evt.target.id)}} id={valorResposta.answer_d_correct}><span className='text-cyan-950'>D.</span>     {quests.answer_d}
            </p>
         
        </div>   
    )

}

export default Perguntas