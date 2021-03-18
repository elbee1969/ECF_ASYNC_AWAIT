async function doFetch(endpoint) {
    try {
        const resp = await fetch("https://restcountries.eu/" + endpoint, { method: 'GET' });
        if (resp.ok) {
            return await resp.json();
        } else {
            return `error fetching endpoint: /${endpoint}`;
        }
    } catch (err) {
        console.log(err);
    }
}

let arrivalOrder = 0;

const endpoint = 'rest/v2/name/france';
function display(data, selector) {
    arrivalOrder++;
    const container = document.querySelector(selector);
    container.innerHTML = data + " (odre d'arrivéede la reqête : " + arrivalOrder + ")";
    container.classList.add('be-bold');
}

async function fetchA() {
    const data = await doFetch(endpoint);
    const pays = data[0]["name"];
    display(pays, '#pays');
}

async function fetchB() {
    const data = await doFetch(endpoint);
    const capital = data[0]["capital"];
    display(capital, '#capital');
}

async function fetchC() {
    const data = await doFetch(endpoint);
    const population = data[0]["population"];
    display(population, '#population');
}

async function fetchD() {
    const data = await doFetch(endpoint);
    const cioc = data[0]["cioc"];
    display(cioc, '#code');
}

function fetchAndDisplayData() {
    arrivalOrder = 0;
    fetchA();
    fetchB();
    fetchC();
    fetchD();
}