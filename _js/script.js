// Funktion um Witze zu laden
async function get_joke(url) {

    const output_text = document.getElementById("output_joke")

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        output_text.innerHTML = data.joke
        console.log(data.joke);

    } catch (error) {
        console.error("Fehler beim Abrufen des JSON:", error);
    }
}



// Funktion um Insult zu laden
async function get_insult(url) {


    const output_text = document.getElementById("output_insult")
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.text();
        console.log('test');
        output_text.innerHTML = data
        console.log(data);

    } catch (error) {
        console.error("Fehler beim Abrufen des JSON:", error);
    }
}


// Javascript für die Animationen
let currentPage = 1; // Start auf Seite 2 (Index 1)
const slider = document.getElementById('slider');
const totalPages = 3;

let jokeLoaded = false;
let insultLoaded = false;

function updateSlider() {
    slider.style.transform = `translateX(-${currentPage * 100}vw)`;

    if (currentPage === 0 && !jokeLoaded) {
        get_joke('https://v2.jokeapi.dev/joke/Any?lang=de&type=single');
        jokeLoaded = true;
    }

    if (currentPage === 2 && !insultLoaded) {
        get_insult('https://insult.mattbas.org/api/insult');
        insultLoaded = true;
    }
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

window.onload = () => {
    // Reset-Transition (falls nötig, aber hier kein updateSlider nötig)
    setTimeout(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
    }, 50);
};