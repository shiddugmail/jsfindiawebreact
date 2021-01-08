import React from 'react';
import Security4 from './assets/images/security4.jpg';
import Security2 from './assets/images/security2.jpg';
import Security5 from './assets/images/security5.jpg';

class MyCarousel extends React.Component {
    render() {
      return (
          <>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/>
            <image href={Security4} alt="Text" className="d-block w-100"/></svg>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>RECOMMENDED CASH OFFER
                  BY ALLIED UNIVERSAL</h1>
                <p><a className="btn btn-lg btn-primary" href="#Career" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/>
            <image href={Security2} alt="Text" className="d-block w-100"/></svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>WHY Jsfindia'S INTEGRATED SECURITY IS
                  THE GLOBAL GOLD STANDARD</h1>
                
                <p><a className="btn btn-lg btn-primary" href="#Service" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/>
            <image href={Security5} alt="Text" className="d-block w-100"/></svg>
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>ANCIENT MANUSCRIPTS
                  SECURED AT ATHENS CULTURAL SITE.</h1>
                
                <p><a className="btn btn-lg btn-primary" href="#Gallery" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </>
       );
    }
}
export default MyCarousel;
