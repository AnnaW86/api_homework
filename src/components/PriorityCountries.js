import React from "react";

const PriorityCountries = ({priorityCountries, removeFromPriority}) => {

    console.log(priorityCountries)

    if (priorityCountries.length > 0) {
        return (
            <>
            <p>Priority Countries:</p>
            {priorityCountries.map(country => 
                <>
                    <p>{country.flag} {country.name.official}</p>
                    <button type="submit" onClick={() => {removeFromPriority(country)}}>Mark as not priority</button> 
                </>
                )}
            </>

        )
    }

};

export default PriorityCountries;