import axios from 'axios'

const api = axios.create({
    baseURL : "https://v6.exchangerate-api.com/v6/b94f639672eadd95f7421c2b"
})

//we need to create get request to get data
export const currencyConverter = (fromCurrency,toCurrency,amount)=>{
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
}