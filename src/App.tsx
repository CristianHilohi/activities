import React from 'react';
import './theme/App.scss';
import ActivitiesList from "./Components/ActivitiesList";
import HeaderBar from "./Components/HeaderBar";
import {useUser} from "./useUser";

export const UserContext = React.createContext(null);

function App() {
    const userContext = useUser();
    return (
        // @ts-ignore
        <UserContext.Provider value={userContext}>
            <div className="App">
                <HeaderBar/>
                <ActivitiesList/>
            </div>
        </UserContext.Provider>
    );
}

export default App;
