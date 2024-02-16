
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import "./App.css"
import {action,originals,comedy} from './urls'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>


    </div>
  );
}

export default App;
