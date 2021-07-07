import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action,originals,romance,latest, comedy, documentary} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App(){
  return(
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={originals} title='Netflix Originals'/>
       <RowPost url={latest} title='Trending Movies' isSmall />
       <RowPost url={action} title='Action Movies' isSmall />
       <RowPost url={romance} title='Romantic Movies' isSmall />
       <RowPost url={comedy} title='Comedy Movies' isSmall />
       <RowPost url={documentary} title='Documentary Movies' isSmall />
    </div>
  );
}

export default App;
