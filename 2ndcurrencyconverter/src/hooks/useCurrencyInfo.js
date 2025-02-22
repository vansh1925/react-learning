// import { useState } from "react";

// function useCurrentInfo (currency) {
//     const [data,setData]=useState('INR')
//     fetch('https://api.frankfurter.app/latest?from=${currency}')
//     .then((res)=>res.json())
//     .then((res)=>setData(res[currency]))
//     return (data);
// }

// export default useCurrentInfo;

//upar vala code first time likha tha to gltiyan
/*
1️⃣ fetch ko useEffect ke andar likhna chahiye

Abhi ye har render pe API call kar raha hai (infinite loop ho sakta hai)
useEffect ka use kare taki sirf currency change hone par API call ho
2️⃣ Wrong useState default value

useState('INR') nahi, useState({}) rakhna chahiye
API se rates ka object aayega
3️⃣ Wrong template string syntax

${currency} ko backticks (`) me likhna hota hai
*/
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Default empty object

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates)); // `rates` ko store karna hai

    }, [currency]); // Jab bhi currency change ho, tabhi API call ho

    return data; // Exchange rates return karega
}

export default useCurrencyInfo;
