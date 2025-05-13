const DOM = {
    pokeList: document.getElementById('pokeList')
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
        li.onclick(getData(element.url))
        ol.append(li)
        
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