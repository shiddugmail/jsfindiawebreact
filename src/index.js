import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import MyCarousel from './mycarousel';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/carousel.css';
// import './assets/css/font-awesome.min.css';
import Layout from './layout';
class LearnReact extends React.Component {
    render() {
      return (
          <myReact>
            <NavBar />
            <main role="main">
            <MyCarousel />
            <Layout >
            </Layout>
            <Footer />
            </main>
        </myReact>
      )
    }
  }
  ReactDOM.render(<LearnReact />, document.getElementById('root'));