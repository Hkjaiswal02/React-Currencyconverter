import { useEffect,useState } from "react";

function useCurrencyaInfo(currency){
  const[data,setData]=useState({});
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((resp)=>{resp.json()})
    .then((respdata)=>setData(respdata[currency]))
    .catch((err) => console.error("Error fetching currency data:", err));
    console.log(data);
    
  },[currency])
  return data;
}

export default useCurrencyaInfo;
