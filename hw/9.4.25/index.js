const DOM = {
    chart: document.getElementById('chart'),
    universitys: document.getElementById('universitys')
}

async function getApi(api) {
    const data = await fetch(api);
    const result = await data.json();
    return result;
}

function drawChart(arr) {
    console.log(arr)
    const population = {};
    arr.forEach(element => {
        population[element.Year] = element.Population;
    });
    const years = Object.keys(population);
    const pop = Object.values(population)
    console.log(years, pop)

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: 'USA Population',
                data: pop,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

function drawCards(arr) {
    console.log(arr)
    let cards = '';
    arr.forEach(element => {
        const card = `<div class="card" style="width: 18rem;">
                        <img src="${element.image.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text">id: ${element.id}</p>
                            <p class="card-text">score: ${element.score}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>`
        cards += card;
    })
    DOM.universitys.innerHTML += cards;
}

async function init() {
    console.log('script start')
    const chartApi = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const chart = await getApi(chartApi);
    console.log(chart.data)
    const dataApi = "https://datausa.io/api/searchLegacy/?limit=10&dimension=University&hierarchy=University&q=";
    const data = await getApi(dataApi)
    console.log(data.results)
    drawChart(chart.data)
    drawCards(data.results)
}

init()