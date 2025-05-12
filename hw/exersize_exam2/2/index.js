const DOM = {
    content: null
}

function drawPokemon(object, type){
    const div = document.createElement('div')
    div.classList.add('card', `${type}`)
    const h4 = document.createElement('h4')
    h4.innerText = object.name
    const p = document.createElement('p')
    p.innerText = type
    const img = document.createElement('img')
    img.src = `${object.sprites.front_default}` || `${object.sprites.back_default}`
    div.append(h4, p, img)
    return div
}

async function getApi(arr, type) {
    const div = document.createElement('div')
    div.classList.add('tableType')
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.pokemon.url){
            const data = await fetch(element.pokemon.url)
            const result = await data.json()
            console.log(result) 
            const card = drawPokemon(result, type) 
            div.append(card) 
        }

    }
    DOM.content.append(div)

}


async function init(){
    DOM.content = document.getElementById('content')

    const data = await fetch("https://pokeapi.co/api/v2/type/")
    const result = (await data.json()).results
    console.log(result)
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        const h2 = document.createElement('h2')
        h2.classList.add(`${element.name}`)
        h2.innerText = element.name
        DOM.content.append(h2)
        console.log(element.name)
        const dataPro = await fetch(element.url)
        const resultPro = (await dataPro.json()).pokemon
        console.log(resultPro)
        const pokemons = await getApi(resultPro, element.name)
        console.log(pokemons)
    }
}

init()


