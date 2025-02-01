import '../../output.css'

import BoxLink from '../itensPages/BoxLink'

function Home(){

    return(
        <div className='w-full h-full flex flex-col justify-start items-center'>
            <p className='self-start text-xl m-4'>Home</p>
            <BoxLink name="React" id='React' page={false}/>
            <BoxLink name="Node Js" id='NodeJs' page={false}/>
            <BoxLink name="Next Js" id='Next.js' page={false}/>
            <BoxLink name="Vue Js" id='VueJS' page={false}/>
            <BoxLink name="Django" id='Django' page={false}/>
            <BoxLink name="Linux" id='Linux' page={false}/>
            <BoxLink name="Bash" id='Bash' page={false}/>
            <BoxLink name="SQL" id='SQL' page={false}/>
            <BoxLink name="DevOps" id='DevOps' page={false}/>
            <BoxLink name="WordPress" id='WordPress' page={false}/>
        </div>
        
    )

}

export default Home