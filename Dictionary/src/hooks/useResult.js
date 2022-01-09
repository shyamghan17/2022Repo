
import dictionary from "../Api/dictionary"
import { useEffect, useState } from "react"

export default()=>{


const [results, setResults] =useState([])
const [errorMessage, setErrorMessage] = useState()


const searchApi = async ()=>{
try{
    const response = await dictionary.get('/search', {
       
    });
    setResults(response.data.id)
}catch(err){
   setErrorMessage('Something went wrong')

}
 }
useEffect(()=>{
   searchApi('');
}, [])
return[searchApi, results, errorMessage]
}