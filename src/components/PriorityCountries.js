import React from "react";

const PriorityCountries = ({priorityCountries, removeFromPriority}) => {

    console.log(priorityCountries)

    if (priorityCountries.length > 0) {
        return (
            <>
            <div class="list-container">
                <div class="list-heading">
                    <h3>Priority Countries:</h3>
                    <p>Remove:</p>
                </div>
                
                {priorityCountries.map(country => 
                    <>
                        <div class="country-container">
                            <p>{country.flag} {country.name.official}</p>
                            <button type="submit" onClick={() => {removeFromPriority(country)}}>x</button> 
                        </div>
                        <hr />
                    </>
                )}
            </div>
            </>

        )
    }

};

export default PriorityCountries;