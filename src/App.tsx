import React from 'react';
import './theme/App.scss';
import ActivitiesList from "./Components/ActivitiesList";
import HeaderBar from "./Components/HeaderBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
            <div className="App">
                <HeaderBar/>
                <ActivitiesList/>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
    );
}

export default App;
