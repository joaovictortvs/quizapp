import '../../output.css'

function Container(props){

    return(
        <div className='bg-gray-900 min-h-7/10 h-auto w-full text-white border-t-2 border-gray-800'>
            {props.children}
        </div>    
    )

}

export default Container
