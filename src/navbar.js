import React from 'react';

class NavBar extends React.Component {
    render() {
      return (
                <header id="top">
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a class="navbar-brand" href="index.html">Jatayu Staffing Force</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#index.html">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#About">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Services">Services</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Gallery">Gallery</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Career">Career</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#Contact">Contact</a>
                    </li>
                    
                    
                    </ul>
                    
                </div>
                </nav>
            </header>
     );
    }
}
export default NavBar;
