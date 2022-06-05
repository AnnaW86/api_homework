const CountryDetails = ({selectedCountries, removeCountry}) => {

    if (selectedCountries.length > 0){
        return (
            <>
            <p>All selected countries:</p>
                {selectedCountries.map(country => 
                    <> 
                        <p>{country.flag} {country.name.official}</p>
                        <button type="submit" onClick={() => {removeCountry(country)}}>x</button>   
                    </>
                    )}

            </>
        )
    }
}
export default CountryDetails;