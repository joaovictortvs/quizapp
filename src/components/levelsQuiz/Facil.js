function Facil(){

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
        <p>Fácil</p>
    )
    
}

export default Facil