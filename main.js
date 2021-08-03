

const button = document.querySelector('button')

const getAlderaan = _ => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then (res => {
            aldArr = res.data.results[0]
            console.log(res.data)
            console.log(res.data.name)
            //console.log(aldArr.residents)
            //console.log(aldArr.residents[0])
            residentsArr = aldArr.residents
        
        residentsArr.forEach(el => {
        // axios.get(residentsArr[el])
        axios.get(el)
            .then (res => {
                console.log(res.data.name)
                let resH2 = document.createElement('h2')
                resH2.textContent = res.data.name
                document.body.append(resH2)
            })
            .catch (function(err) {
                console.log(err)
            })
        })
    })
        .catch (function(err) {
            console.log(err)
        })
    }



button.addEventListener('click', getAlderaan)




// const button = document.querySelector('button')

// const getAlderaan = _ => {
//     axios.get('https://swapi.dev/api/planets/?search=Alderaan')
//         .then (function(res) {
//             aldArr = res.data.results[0]
//             // console.log(aldArr.residents)
//             // console.log(aldArr.residents[0])
//             residentsArr = aldArr.residents
        
//         residentsArr.forEach(el => {
//         // axios.get(residentsArr[el])
//         axios.get(el)
//             .then (function(res) {
//                 console.log(res.data.name)
//                 let resH2 = document.createElement('h2')
//                 resH2.textContent = res.data.name
//                 document.body.append(resH2)
//             })
//             .catch (function(err) {
//                 console.log(err)
//             })
//         })
//     })
//         .catch (function(err) {
//             console.log(err)
//         })
//     }


// button.addEventListener('click', getAlderaan)