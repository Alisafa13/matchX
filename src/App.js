import React, {useEffect} from 'react';
import './App.css';
import TopRated10Team from './components/TopRated10Team';
import Namiq from "./components/Namiq"
import Header from './components/Header';
import Top10User from './components/Top10User';
import Division from './components/Division';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
     <TopRated10Team/>
     <Namiq/>
     <Top10User/>
     <Division/>
     <Footer/>
    </div>
  );
}

export default App;
