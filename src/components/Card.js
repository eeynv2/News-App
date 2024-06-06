import React from 'react'
import PropTypes from 'prop-types'


function Card(props) {
    const divStyle = {width: '18rem', marginTop: '10%'};
  return (
   <>
   <div className='col-md-3 mb-3'>
   <div className="card" style={divStyle}>
  <img src="https://placehold.co/300x200" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
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
    //source: PropTypes.string,
    author: PropTypes.string
}

export default Card

