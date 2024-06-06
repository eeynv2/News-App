import React from 'react'
import PropTypes from 'prop-types'


function Card(props) {
    const divStyle = {width: '18rem', marginTop: '10%'};
    //const authorStyle = {height: '1rem'};

  return (
   <>
   <div className='col-md-3 mb-3'>
   <div className="card" style={divStyle}>
  <img src={props.img} className="card-img-top" alt="..."></img>
  <div className="card-body" >
    <div className="card-header">
    <h9 className="card-subtitle">{props.author}</h9>
    <h7 className="card-subtitle text-mute ms-auto ml-1">{props.source}</h7>
    </div>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text text-left">{props.content}</p>

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

