const CountryDetails = ({selectedCountries, removeCountry}) => {

    if (selectedCountries.length > 0){
        return (
            <>
            <div class="list-container" id="selected-countries">
                <div class="list-heading">
                    <h3>All selected countries:</h3>
                    <p>Remove:</p>
                </div>
                    {selectedCountries.map(country => 
                        <>
                            <div class="country-container">
                                <p>{country.flag} {country.name.official}</p>
                                <button type="submit" onClick={() => {removeCountry(country)}}>x</button>  
                            </div> 
                            <hr /> 
                        </>
                        )}
            </div>
            </>
        )
    }
}
export default CountryDetails;