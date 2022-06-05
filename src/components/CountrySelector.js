import React, {useState} from "react";

const CountrySelector = ({countries, addCountry, getPriorityCountries}) => {

    const [selectedCountry, setSelectedCountry] = useState({});
    
    let keys = [];
    for (let i = 1; i <=255; i++) {
        keys.push(i);
    }
    
    const handleSelect = (e) => {
        const foundCountry = countries.find((country) => country.name.official === e.target.value);
        foundCountry.priority = false;
        setSelectedCountry(foundCountry)
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (e.target.priorityCheckbox.checked === true){
            selectedCountry.priority = true;
        }
        addCountry(selectedCountry);
        getPriorityCountries(selectedCountry);
        e.target.reset();
    }


    const countryOptions = countries.map((country) => {
        return (
            <option key={keys.shift()} value={country.name.official}>{country.name.common}</option>
        )
    })

   

    return (
        <>
            <h2>Select a country you would like to visit:</h2>
            <form id="form" onSubmit={handleFormSubmit}>
                <select onChange={handleSelect}>
                    <option value="--">--</option>
                    {countryOptions}</select>
                <input type="checkbox" id="priorityCheckbox" />
                <input type="submit" value="Add Country"/>
            </form>
        </>
    );
};

export default CountrySelector;