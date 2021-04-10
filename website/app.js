//api call using zip code as provided by OpenWeatherMap
/**
 * api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
 */
//base url for the api call
const baseURL = "api.openweathermap.org/data/2.5/weather";

//key for OpenWeatherMap
const apiKey = "d8c0569efacca60538fd3c70f85fa060";

//onclick for the generate/journal button
document.getElementById('generate').addEventListener('click', addJournalItem);

//helper functions
function addJournalItem(event) {
    const zipCode = document.getElementById('zip').value;
    const journalEntry = document.getElementById('feelings').value;
    console.log('zip code: ', zipCode);
    console.log('journal entry: ', journalEntry);
    getWeatherData(baseURL, zipCode, apiKey, journalEntry);
}

const getWeatherData = async(baseURL, zipCode, key, journalEntry) => {
    const res = await fetch(baseURL + '?zip=' + zipCode + ',us&appid=' + key);
    try {
        const data = await res.json();
        console.log(data);
    } catch(error) {
        console.log('error', error);
    }
}