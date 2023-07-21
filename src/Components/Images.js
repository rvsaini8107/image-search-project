import React,{useState} from 'react'

function image(props) {
  
  return (
    <div className='main-div-img'>
      {props.imagesObj && props.imagesObj.map((value,index)=>(
        
          <div className="img-Div" key={index} >
              <img className='image-this' src={value.urls.small} alt="ram" />
          </div>

        ))}
        
        
    </div>
    
  )
}

export default image;
