import '../../output.css'

function Container(props){

    return(
        <div className='bg-gray-900 min-h-7/10 w-full text-white border-t-2 border-gray-800 overflow-x-auto '>
            {props.children}
        </div>    
    )

}

export default Container
