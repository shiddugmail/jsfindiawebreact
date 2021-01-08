import React from 'react';
import About from './about';
import Service from './service';
import Gallery from './gallery';
import Career from './career';
class Layout extends React.Component {
    render() {
        return(
            <div class="container marketing" id="services">
            <About />
            <Service />
            <Gallery />
            <Career />
         </div>
        );
    }
}
export default Layout;