import React from 'react/'
import { BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const openMenu =() =>{
     document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
     document.querySelector(".sidebar").classList.remove("open");
  }
  return (
     <BrowserRouter>
    <div class="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">CARफेंको</Link>
                    
                </div>
                <div className="header-links">
                    <a href="signnin.html">SignIn</a>
                    <a href="sell.html">SellCars</a>
                    <a href="buy.html">BuyCars</a>
                    <a href="news.html">News</a>
                    <a href="reviews.html">Reviews</a>

                </div>
            </header>
            <aside className="sidebar">
                <h3><i className="fa fa-home"></i></h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html" >SignIn</a>
                    </li>
                    <li>
                        <a href="sell.html">Sellyourcar</a>
                    </li>
                    <li>
                        <a href="buy.html">Buynewcar</a>
                    </li>
                    <li>
                        <a href="news.html">News</a>
                    </li>
                    <li>
                        <a href="reviews.html">Reviews</a>
                    </li>
                </ul>

            </aside>
            
            <main className="main">
                <div className="content">
                  <Route path="/product/:id"  component={ProductScreen}/>
                  <Route path="/" exact={true} component={HomeScreen}/>
                    
                </div>
                
            </main>
            <footer className="footer">
                All right reserved.
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
