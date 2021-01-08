import React from 'react';
import Security6 from './assets/images/security6.jpg';
import Security8 from './assets/images/security8.jpg';
import Security9 from './assets/images/security9.jpg';

class About extends React.Component {
    render() {
      return (
        <div class="album py-5 bg-light">
        <div class="container"id="About">
          <h1>About</h1>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                <image href={Security6} height="100%" width="100%"/></svg>
                <div class="card-body">
                 
                  <p class="card-text"><h2>About the Company</h2>INFORMATION REGARDING UNSOLICITED CASH OFFER 
                    The following page provides information relating to GardaWorld's cash offer for the Company.
                    .</p>
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
                <image href={Security8} height="100%" width="100%"/></svg>
                <div class="card-body">
                  <p class="card-text"><h2>About the President</h2>ANCIENT MANUSCRIPTS SECURED AT ATHENS CULTURAL SITE
                    Visitor numbers at the SNFCC, one of Athens' newest tourist destinations, have exceeded expectations, and G4S has been on board.</p>
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
                <image href={Security9} height="100%" width="100%"/></svg>
                <div class="card-body">
                  <p class="card-text"><h2>About Share Holders</h2>PLACING INTEGRATED SECURITY AT THE HEART OF WORLD-LEADING SOLUTIONS
                    Steen Bonke Sorensen, Global Director of the G4S Academy, explains what the term ‘integrated security’.</p>
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
       );
    }
}
export default About;
