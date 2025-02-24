import { useEffect, useState } from "react";
//import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox  from "./components/InputBox";

function App() {
  const [amount, setamount] = useState(0);
  const [convertedamount, setconvertedamount] = useState(0);
  const [from, setfrom] = useState("USD");
  const [to, setto] = useState("INR");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchExchangeRates = async (from) => {
    setLoading(true)
    return fetch(`https://api.frankfurter.app/latest?from=${from}`)
      .then((res) => res.json())
      .then((res) => {
        //issue aaya bhai ise solve krne main kahi ghante lag gye yahan api main jo selct hoga vo vahan show nhi hoga jaise usa liya to 
        //usa vahan hai nhi aur main starting main select krunga to vo vahan aayega hi nhi vo inside treat aur convert usa se ho karega but
        //show api ki list ka pehala option krega which is aud to yahan jo data hai vahan purana copy kiya ...res.rates se then jo abhi from hai
        //use add kiya aur uska rate 1 kr diya taaki if convert ho to 1 se hi multiply hoga
        const newData = {
          ...res.rates,
          [from]: 1,
        }

        setData(newData)
        setLoading(false)

        return newData
      })
  }

  const onCurrencyChange = (from) => {
    setfrom(from)
    fetchExchangeRates(from)
  }

  // API Call
  const currencyinfo = data
  const currencylist = Object.keys(currencyinfo);

  // Currency Convert Function
  const convert = () => {
    setconvertedamount(amount * (currencyinfo[to] || 1));
  };

  // Swap Function
  const swap = () => {
    setamount(convertedamount);
    setconvertedamount(amount);
    setfrom(to);
    setto(from);
  };

  useEffect(() => {
    fetchExchangeRates(from)
  }, [])

  return (
    <>
      <h1>Currency Converter</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        {/* From Currency Input */}
        <InputBox
          key={from}
          label="From"
          amount={amount}
          currencylist={currencylist}
          selectedCurrency={from}
          oncurrencychange={(currency) => onCurrencyChange(currency)}
          onamountchange={(amount) => setamount(amount)}
        />

        {/* Swap Button */}
        <div>
          <button onClick={swap}>Swap</button>
        </div>

        {/* To Currency Input */}
        <InputBox
          label="To"
          amount={convertedamount}
          currencylist={currencylist}
          selectedCurrency={to}
          oncurrencychange={(currency) => setto(currency)}
          onamountchange={(amount) => setconvertedamount(amount)}
        />

        {/* Convert Button */}
        <button type="submit" disabled={loading}>Convert</button>
      </form>
    </>
  );
}

export default App;
