import React from 'react';
import Security11 from './assets/images/security11.jpg';
import Security13 from './assets/images/security13.jpg';
import Security8 from './assets/images/security8.jpg';
import Security12 from './assets/images/security12.jpg';


class Gallery extends React.Component {
    render() {
      return (
          <>
        <hr class="featurette-divider"/>
  

    

        <div class="row featurette" id="Gallery">
          <div class="col-md-7 order-md-2">
            <h1>Gallery</h1>
            <p class="lead"><h4>At jsfindia you are assured a world of opportunities. Our employees and services touch the lives of others every day.At jsfindia you are assured a world of opportunities. Our employees and services touch the lives of others every day. At jsfindia you are assured a world of opportunities. Our employees and services touch the lives of others every day.  </h4></p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
              
              <title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
              <image href={Security11} height="500" width="500"/></svg>
          
          </div>
        </div>
    
        <hr class="featurette-divider"/>
      
        <div class="album py-5 bg-light">
            <div class="container">
        
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    <image href={Security13} width="100%" height="100%"/></svg>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">More</button>
                       
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    <image href={Security8} width="100%" height="100%"/></svg>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">More</button>
                        
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4 shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    <image href={Security12} width="100%" height="100%"/></svg>
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">More</button>
                          
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </>
          
        );
    }
}
export default Gallery;
