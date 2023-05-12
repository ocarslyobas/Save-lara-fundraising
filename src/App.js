import React from 'react';
import "./App.css";
import Home from '../src/Pages/Landing/Home';
import AboutHeader from "../src/Pages/About/AboutHeader";
import Contactsetup from '../src/Pages/contact/Contact';
import Navheaders from '../src/Pages/Landing/Navheaders';
import Footer from '../src/Pages/Landing/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



const App =()=> {


    return (
        <div id='wrapper'>
    
               <BrowserRouter>
                    <Navheaders/>
                        <Routes>

                                <Route path='/' element={<Home/>}/>
                                <Route path='/About' element={<AboutHeader/>}/>
                                <Route path='/Contact' element={<Contactsetup/>}/>

                        </Routes>
                    <Footer/>
                </BrowserRouter>

        </div>
        
      );
}

export default App;