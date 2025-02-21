//yahan hum ne custom hook banaya hai 
import { useState, useEffect } from "react";
const todaydate=new Date();

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) // Response ko JSON me convert kiya
            .then((res) => setData(res[currency])); // Jo currency chahiye sirf wahi store kiya
    }, [currency]); // Jab currency change hogi tabhi API call hoga
    console.log(data)
    return data; // Jo bhi data aaya vo return kar diya
}
export default useCurrencyInfo
/*
Hook kya hota hai?
React ka ek special feature hai jo functional components ko state aur lifecycle methods use karne deta hai bina class likhe.

Custom Hook kya hota hai?
Custom Hook ek apna banaya hua hook hota hai jo kisi bhi reusable logic ko ek jagah likhne aur baar-baar use karne me madad karta hai.
👉 Naam hamesha "use" se start hota hai, jaise useCurrencyInfo()

🛠 Yeh useCurrencyInfo() Custom Hook kya karta hai?
✅ API se currency ka data fetch karta hai
✅ Jab bhi currency change hogi, toh data refresh hoga
✅ Jo data chahiye sirf wahi return karega

💡Important
Custom Hook	    Ek baar likho, har jagah reuse karo
useState({})	API ka data rakhne ke liye
useEffect()	    Jab currency change ho tab API call kare
API Fetching	Data JSON me convert hota hai
setData(res[currency])	Sirf wahi currency ka data store hoga jo chahiye
Dynamic Fetching	    currency ke liye kaam karega

Agar har jagah API fetching ka code likhne lage toh code repeat hoga aur manage karna mushkil hoga. Isliye ek custom hook bana diya jo reusable hai.

*/

//res.currency nhi kara as . notation fixed property ke liye hai to vo currency ko dhundega as it is 
//[] notation dynamic ke liye hai ki if pata  na ho fixed valur=e