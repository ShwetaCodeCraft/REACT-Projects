import { useEffect, useState } from "react";

/* i am making my own custom hook. 
"currency"  is the variable here.
It depends on you, whether your hook takes optional argument or not. My hook is not taking optional argument thats why we are giving it info that is"currency"
This hook will return some data.*/
function useCurrencyInfo(currency){
    const[data , setData] = useState({})
    // we are using this hook here so that fetch will automatically be called and there is no usse to make another function in this function.
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) //converting data into jason
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log (data);
    return data
}

export default useCurrencyInfo;