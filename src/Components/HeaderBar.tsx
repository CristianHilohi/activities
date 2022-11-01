import {Button, Typography} from "@mui/material";
import './header.scss';
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";

const HeaderBar = () => {
    const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    const [buttonText, setButtonText] = useState<string>('Log in');

    useEffect(() => {
        if(isAuthenticated) {
            setButtonText('Log out');
        } else {
            setButtonText('Log in');
        }
    }, [isAuthenticated]);

    const handleButtonClick = () => {
        if (isAuthenticated) {
            logout({returnTo: window.location.origin});
        } else {
            loginWithRedirect();
        }
    }

    return <div className='header-bar'>
        <Button variant='contained' onClick={handleButtonClick}>
            {buttonText}
        </Button>
        {isAuthenticated &&
            <Typography variant='h5'>Hi {user?.name}!</Typography>}

    </div>
}

export default HeaderBar;