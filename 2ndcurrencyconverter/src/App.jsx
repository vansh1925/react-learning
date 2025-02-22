import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox  from "./components/InputBox";

function App() {
  const [amount, setamount] = useState(0);
  const [convertedamount, setconvertedamount] = useState(0);
  const [from, setfrom] = useState("INR");
  const [to, setto] = useState("USD");

  // API Call
  const currencyinfo = useCurrencyInfo(from);
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
          label="From"
          amount={amount}
          currencylist={currencylist}
          selectedCurrency={from}
          oncurrencychange={(currency) => setfrom(currency)}
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
        <button type="submit">Convert</button>
      </form>
    </>
  );
}

export default App;
