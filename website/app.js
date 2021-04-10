//api call using zip code as provided by OpenWeatherMap
/**
 * api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
 */

//base url for the api call
const baseURL = "https://api.openweathermap.org/data/2.5/weather";

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
    getWeatherData(baseURL, zipCode, apiKey).then(function(data) {
        //get the temperature to pass into the post request
        console.log('temp from data: ', data.main.temp);
        const kelvinTemp = data.main.temp;
        const convertedTemp = (1.8 * (kelvinTemp - 273) + 32).toFixed(2);
        const temp = convertedTemp.toString() + ' F';
        //get today's date
        const fullDate = new Date();
        const datePart = fullDate.toDateString();
        const timePart = fullDate.toLocaleString([],{hour: '2-digit', minute: '2-digit'});
        const comboDate = datePart + ' ' + timePart;
        postJournalData('/addEntry', {temperature: temp, date: comboDate, userResponse: journalEntry});
    });
}

const getWeatherData = async(baseURL, zipCode, key) => {
    const res = await fetch(baseURL + '?zip=' + zipCode + ',us&appid=' + key);
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log('error', error);
    }
}

const postJournalData = async(url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try{
        const resData = await res.json();
        console.log(resData);
        return resData;
    } catch(error) {
        console.log('error', error);
    }
}