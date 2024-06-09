import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import moment from 'moment'
import "./Card.css";

function Card(props) {
    const divStyle = {width: '18rem', marginTop: '10%', borderColor: 'grey'};
   const cardStyle = {borderColor: 'grey'}
    //const authorStyle = {height: '1rem'};
  const startOfHour = moment(props.publishedAt).startOf('hour');
  const timeFromNow = startOfHour.fromNow();

  return (
   <>
   <div className='col-md-3 mb-3'>
   <div className="card" style={divStyle}>
  <img src={props.img ? props.img : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} className="card-img-top" style = {cardStyle}alt="..."/>
  <img src = "https://cdn-icons-png.flaticon.com/512/2644/2644746.png" alt = "logo" className='logo'/>
  <div className="card-body align-items-left" >
    <div className="card-header d-flex justify-content-between align-items-left"> 
    <h7 className="card-subtitle fs-6 text-mute ms-auto ml-1">{props.source}</h7>
    <h9 className="card-subtitle">{props.author}</h9>
    
    </div>
    <h9 className="card-subtitle">
    <Moment fromNow>{startOfHour}</Moment></h9>
    <h9 className="card-subtitle">{timeFromNow}</h9>
  
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text d-flex align-items-left justify-content-around ">{props.content}</p>

    <a href={props.url} className={`btn btn-secondary`}>Click here for news source</a>
  </div>
  </div>
</div>
   </>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    url: PropTypes.string,
    content: PropTypes.string,
    source: PropTypes.string,
    author: PropTypes.string, 
    img: PropTypes.string
}

export default Card

