import axios from "axios";

const options = {
    baseURL: 'https://covid-19-data.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '4f9743c401msh30ddf34a7cf894cp192b00jsn60a0cc6938b6',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
};

export const fetchData = async (country) => {
    let changeableUrl = country ? `/country?name=${country}` : '/totals';
    try {
        const { data } = await axios.request(changeableUrl, options);
        const { confirmed, recovered, critical, deaths, lastUpdate } = data[0]
        return { confirmed, recovered, critical, deaths, lastUpdate }
    } catch (error) {
        return (error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('/report/totals', options);
        return data
    } catch (error) {
        return error;
    }
};

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get('/help/countries', options)
        return data.map((country) => country.name);
    } catch (error) {
        return error;
    }
};