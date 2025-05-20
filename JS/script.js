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

