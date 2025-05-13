const DOM = {
    pokeList: document.getElementById('pokeList'),
    response: document.getElementById('response')
}

async function getData(url){
    console.log('clicked')
    const data = await fetch('')
}

function getListDom(arr){
    const ol = document.createElement('ol')
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const li = document.createElement('li')
        li.innerText = element.name;
        li.addEventListener('click', async function(){
            console.log('clicked')
            this.style.color = 'blue'
            const data = await fetch(element.url)
            const result = await data.json() 
            console.log(result.flavor_text_entries)   
            const texts = document.createElement('ul')
            result.flavor_text_entries.forEach(element => {
                const li = document.createElement('li')
                li.innerText = element.flavor_text
                texts.append(li)
                console.log(texts)
            });    
            DOM.response.innerHTML = ''
            DOM.response.append(texts)
        })
        ol.append(li)
        console.log(ol)

    }
    DOM.pokeList.append(ol)
}

async function getPokeList(){
    const data = await fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20');
    const result = (await data.json()).results;
    console.log(result)
    const resultArr = result.map((element) => (element.name))
    console.log(resultArr)
    getListDom(result)

}

function init(){
    console.log('start script')
    const list = getPokeList()
}

init()