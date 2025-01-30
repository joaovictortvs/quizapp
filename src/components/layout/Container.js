import '../../output.css'

function Container(props){

    return(
        <div className='bg-gray-900 h-auto w-full text-white border-t-2 border-gray-800 overflow-x-auto '>
            {props.children}
        </div>    
    )

}

export default Container
