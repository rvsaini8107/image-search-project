import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Search({setImagesValue}) {
const [inputSearchValue,setInputSearchValue] = useState("");
// console.log(process.env.REACT_APP_API_KEY_MY,"this")
const [loading, setLoading] = useState(false);
useEffect(()=>{callBackfuntion()},[])
function searchButtonSubmit (event){
    event.preventDefault();
    // console.log(inputSearchValue);
    callBackfuntion()
//    ${process.env.REACT_APP_API_KEY_MY}
}
async function callBackfuntion(){
     
   try{
    setLoading(true);
    const response = await axios("https://api.unsplash.com/search/photos",{
            params:{
                query:inputSearchValue||"girl",
                },
            headers:{
                Authorization: `Client-ID joQDfTE7cUFuXbxfidYUBv4G3pk4U0zOqpEmHPXm9iA`,
            }
        },

     );
     console.log(response.data.results,"searchFun")
     setLoading(false);
     setImagesValue(response.data.results)
}catch(error){console.log(error,"erro")}
}
  return (
    < >
    <form className='Search' onSubmit={(e)=>(searchButtonSubmit(e))}>
        <input type="text" className='inputSeach' onChange={(e)=>(setInputSearchValue(e.target.value))} />
        <button className='searchButton' type='submit'><i className="fa fa-search"></i>Search</button>
        
    </form>
    {loading && <h3>Loading...</h3>} 
       
    </>
  )
}

export default Search
