import '../../output.css'

import {useState, useEffect} from 'react'

function Perguntas({perguntas, clickQuest}){

    const [quests, setQuests] = useState([])

    useEffect(()=>{
        
        setQuests(perguntas)

    }, [perguntas])

    return(
        <div className="flex flex-col justify-evenly items-center space-y-2 flex-auto">
            <p className="border p-2 border-white max-w-9/10 cursor-pointer text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10" onClick={clickQuest}>
            <span className='text-cyan-950'>A.</span>    {quests.answer_a}
            </p>
            <p className="border p-2 border-white max-w-9/10 cursor-pointer  text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10" onClick={clickQuest}>
            <span className='text-cyan-950'>B.</span>   {quests.answer_b}
            </p>
            <p className=" border p-2 border-white max-w-9/10 cursor-pointer  text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10" onClick={clickQuest}><span className='text-cyan-950'>C.</span>    {quests.answer_c}
            </p>
            <p className=" border p-2 border-white max-w-9/10 cursor-pointer  text-blue-800 bg-gray-400 hover:bg-gray-500 w-9/10" onClick={clickQuest}><span className='text-cyan-950'>D.</span>     {quests.answer_d}
            </p>
         
        </div>   
    )

}

export default Perguntas