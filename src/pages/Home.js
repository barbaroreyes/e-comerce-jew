import React from 'react';
import NavBar from '../Compo/NavBar'
import Anouncement from '../Compo/Anouncement';
import Slider from '../Compo/Slider';
import Categories from '../Compo/Categories';
import NewLetter from '../Compo/NewLetter';
import Footer from '../Compo/Footer';

const Home = (props) => {
  return (
    <div>
     < NavBar/>
     <Anouncement/> 
     <Slider/>
     <Categories {...props}/>
     <NewLetter/>
     <Footer/>
    </div>
  );
}

export default Home;
