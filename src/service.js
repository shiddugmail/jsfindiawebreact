import React from 'react';
import Security13 from './assets/images/security13.jpg';

class Service extends React.Component {
    render() {
      return (
          <>
        <hr class="featurette-divider"/>
        <div class="row featurette" id="Services"> 
          <div class="col-md-7">
            <h1> Services</h1><br/>
            <p class="lead">Integrated Security is now at the core of our business and our strategy to drive profitable growth.
    
              jsf Integrated Security combines two or more of the following services to a customer - our risk consulting expertise, security professionals,  technology and data analytics - to manage risks and enhance value for our customers</p>
          <ul>
            <li>
              Security
            </li>
    
            <li>
              Home nursing
            </li>
    
            <li>
              Home keeping
            </li>
    
            <li>
              Event Manegement
            </li>
    
            <li>
              Drivers
            </li>
    
            <li>
              Personal Gaurds and Gunner
            </li>
    
            <li>
              Man Power
            </li>
          </ul>
        </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            <image href={Security13} height="500" width="500"/></svg>
          </div>
        </div>
       
        </>
       );
    }
}
export default Service;
