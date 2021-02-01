import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from "./api";
import covid19 from './images/covid-19.png';
import covidtitle from './images/title.png';

export class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data })
    console.log(this.state)
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country });
    console.log(this.state)
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidtitle} alt="covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <p>Last Updated on {new Date(data.lastUpdate).toUTCString()}</p>
        <p>Information provided by RapidApi's top Covid-19 data api:</p>
        <a href="https://rapidapi.com/Gramzivi/api/covid-19-data">
          <div className={styles.credits} >
            <img className={styles.logoimg} src={covid19} alt="covid19" />
            <span>COVID-19 data</span>
          </div>
        </a>
      </div>
    )
  }
}

export default App

