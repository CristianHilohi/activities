import React from 'react';
import './theme/App.scss';
import ActivitiesList from "./Components/Activities/ActivitiesList";
import HeaderBar from "./Components/HeaderBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPage from "./Components/Static/InfoPage";

function App() {
    return (
            <div className="App">
                <HeaderBar/>
                <div className='page'>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<InfoPage />} />
                        <Route path='activities' element={<ActivitiesList />} />
                        <Route path='*' element={<InfoPage />} />
                    </Routes>
                </BrowserRouter>
                </div>
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
