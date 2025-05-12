const DOM = {
    dropdown: null,
    submit: null
}


async function getData() {
    const data = await fetch('https://restcountries.com/v3.1/all')
    const result = await data.json()
    console.log(result)
    return result;
}

function getDropdown(data) {
    let dropdown = ''
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        dropdown += `<option value=${element.name.common}> ${element.cca3} </option>`
    }
    return dropdown;

}

async function getPromise(element) {
    const promise = await fetch(`https://restcountries.com/v3.1/name/${element}`)
    console.log(promise)
    return promise
}

async function init() {
    DOM.dropdown = document.getElementById('dropdown')
    DOM.submit = document.getElementById('submitBtn')
    console.log('script start')
    const data = await getData()
    DOM.dropdown.innerHTML = getDropdown(data)

    DOM.submit.addEventListener('click', async () => {
        console.log('clicked')
        const selectedOption = [...Array.from(DOM.dropdown.selectedOptions).map(OptionHTML => OptionHTML.value), 'wer/3']
        // selectedOption.map(element => getPromise(element))
        // console.log(selectedOption)
        const promises = []
        for (let index = 0; index < selectedOption.length; index++) {
            const element = selectedOption[index];
            const promise = getPromise(element)
            promises.push(promise)
        }
        console.log(promises)
        try {
            const result = await Promise.allSettled([...promises, Promise.reject("Liran?")])
            console.log(result)
            result.forEach((currentPromise, index) => {
                console.log(`promise${index}`)
                const box = document.getElementById(`promise${index}`)
                console.log(box)
                if (currentPromise.status === "fulfilled"){
                    box.style.background = "green"
                    box.innerHTML = ""
                }else {
                    box.style.background = "red"
                    box.innerHTML = '<h1>something went wrong</h1>'
                }
            })

        } catch (error) {
            console.log("error")
        }
    })
}

init()

