import React from 'react';
import './theme/App.scss';
import ActivitiesList from "./Components/ActivitiesList";
import HeaderBar from "./Components/HeaderBar";

function App() {
  return (
    <div className="App">
        <HeaderBar />
        <ActivitiesList />
    </div>
  );
}

export default App;
