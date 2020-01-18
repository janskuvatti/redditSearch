import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Reddit = ({ title, text, link}) => {
  const shortenText = (text, limit) => {
    const shorter = text.indexOf(' ', limit);
    if(shorter === -1) return text;
    return text.substring(0, shorter)
    }
    return(
    
        
            <div className="card reddit">
            <img className='card-img-top' src='data:image/png;base64,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' alt='logo'/>
            <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{shortenText(text, 1000)}</p>
        <a href={link} target="_blank" className="btn btn-primary">Show post</a>
      </div>
        </div>
        
         
    )
}

export default  Reddit;