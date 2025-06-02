// Joke API
async function randomjoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any?lang=de&type=single';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const joke = await randomjoke();
console.log(joke);


// Insult API
async function randominsult() {
    const url = 'https://insult.mattbas.org/api/en_corporate/insult.json';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return false;
    }
}
const insult = await randominsult();
console.log(insult);



// Javascript für die Animationen
let currentPage = 1; // Start auf Seite 2 (Index 1)
const slider = document.getElementById('slider');
const totalPages = 3;

function updateSlider() {
    slider.style.transform = `translateX(-${currentPage * 100}vw)`;
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateSlider();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateSlider();
    }
}

// Lädt die funktion beim öffnen der Seite
window.onload = updateSlider;