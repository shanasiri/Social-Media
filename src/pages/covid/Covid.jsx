import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
import React, {useEffect} from 'react';
import './covid.css';
import { useState } from 'react';
import NavBar from '../../components/navbar/Navbar'
import InfoBox from '../../components/infoBox/InfoBox';
import Map from '../../components/map/Map';
import Table from '../../components/table/Table';
import { sortData, prettyPrintStat } from '../../util';
import LineGraph from '../../components/lineGraph/LineGraph';
import 'leaflet/dist/leaflet.css';
import numeral from 'numeral';

export default function Covid() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({}); 
    const [tableData, setTableData] = useState([])
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then(response => response.json())
                .then(data => {
                    const countries = data.map(item => ({
                        name : item.country,
                        value : item.countryInfo.iso2
                    }))
                    const sortedData = sortData(data);
                    setTableData(sortedData);
                    setMapCountries(data);
                    setCountries(countries);
                })
        }
        getData();
    }, []);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then(response => response.json())
            .then(data => setCountryInfo(data))
    }, []);

    const onCountryChange = async (e) => {
        const url = e.target.value === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${e.target.value}`

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(e.target.value);
                setCountryInfo(data);
                setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
                setMapZoom(4);
            })   
    }

    return (
        <>
            <NavBar></NavBar>
            <div className='covid'>
                <div className="covid-left">
                    <div className='covid-header'>
                        <h1>COVID-19 TRACKER</h1>
                        <FormControl className='country-dropdown'>
                            <Select variant='outlined' value={country} onChange={onCountryChange}>
                                <MenuItem value='worldwide'>Worldwide</MenuItem>
                                {countries.map(country => <MenuItem value={country.value}>{country.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>

                    <div className="covid-status">
                        <InfoBox onClick={() => setCasesType("cases")} title="Covid cases" active={casesType==="cases"} cases={prettyPrintStat(countryInfo.todayCases)} total={numeral(countryInfo.cases).format("0.0a")}></InfoBox>
                        <InfoBox onClick={() => setCasesType("recovered")} title="Recovered" active={casesType==="recovered"} isGreen cases={prettyPrintStat(countryInfo.todayRecovered)} total={numeral(countryInfo.recovered).format("0.0a")}></InfoBox>
                        <InfoBox onClick={() => setCasesType("deaths")} title="Deaths" active={casesType==="deaths"} cases={prettyPrintStat(countryInfo.todayDeaths)} total={numeral(countryInfo.deaths).format("0.0a")}></InfoBox>
                    </div>

                    <Map countries={mapCountries} casesType={casesType} center={mapCenter} zoom={mapZoom}/>
                </div>
                
                <Card className="covid-right">
                    <CardContent>
                        <h3>live cases by country</h3>
                        <Table countries={tableData}></Table>
                        <h3 style={{marginTop: "25px", marginBottom: "20px"}}>Worldwide new {casesType}</h3>
                        <LineGraph casesType={casesType}/>
                    </CardContent>
                </Card>
            </div>
        </>
        
    );
}
