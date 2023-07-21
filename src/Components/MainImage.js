import React,{useState} from "react";
import Search from "./Search";
import Image from "./Images";
const MainImage = () =>{
    const [imagesValue,setImagesValue] = useState("");
   
    return(
        <div className="container">
           <Search setImagesValue={setImagesValue}/>
           <Image imagesObj = {imagesValue}/>
        </div>
    );
}
export default MainImage;