import React, { useEffect, useState } from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetails";
import PriorityCountries from "../components/PriorityCountries";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [priorityCountries, setPriorityCountries] = useState([]);

    const getCountries = () => {
        console.log("Getting country data");
        fetch("https://restcountries.com/v3.1/all")
        .then( response => response.json())
        .then( data => setCountries(data.sort(sortCountries)))
    };

    const sortCountries = ( a, b ) => {
        if ( a.name.official < b.name.official ){
          return -1;
        }
        if ( a.name.official > b.name.official ){
          return 1;
        }
        return 0;
      }

    const addCountry = (submittedCountry) => {
        setSelectedCountries([...selectedCountries, submittedCountry]);
    }

    const getPriorityCountries = (submittedCountry) => {
        if (submittedCountry.priority === true) {
            setPriorityCountries([...priorityCountries, submittedCountry]);
        }
    }

    const removeCountry = (country) => {
        let selectedCountriesFiltered = selectedCountries.filter(selectedCountry => selectedCountry.name.official !== country.name.official);
        setSelectedCountries(selectedCountriesFiltered);
        removeFromPriority(country);
    }

    const removeFromPriority = (country) => {
        country.priority = false;
        let priorityCountriesFiltered = priorityCountries.filter(priorityCountry => priorityCountry.name.official !== country.name.official);
        setPriorityCountries(priorityCountriesFiltered);

    }

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <>
            <h1>Plan your travels</h1>
            <CountrySelector countries={countries} addCountry={addCountry} getPriorityCountries={getPriorityCountries}/>
            <div class="display-container">
                <CountryDetails selectedCountries={selectedCountries} removeCountry={removeCountry}/>
                <PriorityCountries priorityCountries={priorityCountries} removeFromPriority={removeFromPriority}/>
            </div>
        </>
    );
};

export default CountriesContainer;