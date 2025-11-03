import { useState } from "react";
import "./App.css";
import { currencyConverter } from "./api/postApi";

export const App = ()=>{

    const [loading,setLoading] = useState(false);
    const [amount,setAmount] = useState(0);
    const [fromCurrency,setFromCurrency] = useState("USD");
    const [toCurrency,setToCurrency] = useState("INR");
    const [convertedAmount,setConvertedAmount] = useState(null);

    const handleConvertAmount = async()=>{
        setLoading(true);
        try{
            const response = await currencyConverter(fromCurrency,toCurrency,amount);
            setConvertedAmount(response.data.conversion_result);
        }catch(error){
            console.error("Error converting currency:",error);
        }
        setLoading(false);
    }

    return <section className="currency-converter">
        <div className="currency-div">
            <h2>Currency Converter</h2>
            <div>
                <label htmlFor="currency_amount">Amount :</label>
                <input type="number" 
                id="currency_amount" 
                placeholder="Enter Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
            <div className="currency-selector">
                <div>
                    <label>From : 
                        <select value={fromCurrency} 
                        onChange={(e)=>setFromCurrency(e.target.value)}>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>To : 
                        <select value={toCurrency} 
                        onChange={(e)=>setToCurrency(e.target.value)}>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </label>
                </div>
            </div>
            <button disabled={loading || amount<=0} onClick={handleConvertAmount}>{loading?"Converting..." : "Convert"}</button>
        </div>
        <hr/>
        {convertedAmount && <div className="result-div">
            <h3>Converted Amount:</h3>
            <p>{`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}</p>
        </div>}
    </section>
}