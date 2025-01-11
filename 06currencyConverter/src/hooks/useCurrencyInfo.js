import { useEffect, useState } from "react";

/* i am making my own custom hook. 
"currency"  is the variable here.
It depends on you, whether your hook takes optional argument or not. My hook is not taking optional argument thats why we are giving it info that is"currency"
This hook will return some data.*/

//  a custom React hook named useCurrencyInfo for fetching currency data from an external API.


function useCurrencyInfo(currency){  /* The currency parameter specifies the currency code (e.g., usd, eur).*/
    const[data , setData] = useState({})
    // we are using this hook here so that fetch will automatically be called and there is no usse to make another function in this function. Purpose: Automatically fetches currency data when the currency value changes.
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`) //The fetch function calls the currency-api endpoint for the given currency. Example: If currency is usd, the API URL becomes: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json
        .then((res) => res.json()) //Processes the API response and converts it to JSON.
        .then((res) => setData(res[currency])) // Extracts the relevant data from the API response.and Updates the data state variable with the currency information.
        console.log(data);
    }, [currency]); // Dependency Array: [currency] ensures the effect runs whenever currency changes.  
    console.log (data); // Logs the data state to the console after fetching, for debugging purposes.
    return data //The custom hook returns the fetched currency data so that it can be used in the component where this hook is called.
}

export default useCurrencyInfo;


/* This file creates a custom hook called useCurrencyInfo.
When you call useCurrencyInfo(currency):
  It fetches the latest data for the specified currency using an API.
  The fetched data is stored in the data state.
The hook automatically fetches data whenever the currency value changes.
The fetched data is returned to be used in other components. */