import { useId } from "react";

function InputBox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencylist = [],
    selectedCurrency, 
}) {
    const uniqueId = useId();

    return (
        <div>
            <div>
                <label htmlFor={uniqueId}>{label}</label>
                <input
                    id={uniqueId}
                    type="text"
                    placeholder="From"
                    value={amount}
                    onChange={(e) => onamountchange(Number(e.target.value))}
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select
                    name="currencies"
                    value={selectedCurrency} // Yeh selected value rakhega
                    onChange={(e) => oncurrencychange(e.target.value)}
                >
                    {currencylist.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
