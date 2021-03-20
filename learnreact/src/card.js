import React from 'react';
class Card extends React.Component{
 
    render(){
      return(
    <div className="cards">
      <div className="card">
       <img src={this.props.imgsrc} alt={this.props.alt} className="card_img"/>
       <div className="card-info">
         <span className="card_title">{this.props.title}</span>
         <h3 className="card_title">{this.props.sname}</h3>
         <a href={this.props.link} target="_blank">
           <button> Watch Now</button>
         </a>
         
      
       </div>
    
      </div>
    
    </div>
    
    
    
    
      )
    }
    
    }
    export default Card;