import {Button, CircularProgress, IconButton, Typography} from "@mui/material";
import './header.scss';
import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import InfoIcon from '@mui/icons-material/Info';

const HeaderBar = () => {
    const {loginWithRedirect, logout, user, isAuthenticated, isLoading} = useAuth0();

    const [buttonText, setButtonText] = useState<string>('Log in');

    useEffect(() => {
        if (isAuthenticated) {
            setButtonText('Log out');
        } else {
            setButtonText('Log in');
        }
    }, [isAuthenticated]);

    const handleButtonClick = () => {
        if(isLoading) {
            return;
        }
        if (isAuthenticated) {
            logout({returnTo: window.location.origin});
        } else {
            loginWithRedirect();
        }
    }

    const navigateToInfo = () => {
        window.location.href = '/';
    }

    return <div className='header-bar'>
        <div>
            <IconButton onClick={navigateToInfo}>
                <InfoIcon/>
            </IconButton>

            <Button variant='contained' onClick={handleButtonClick}>
                {!isLoading ? buttonText : <CircularProgress color={'info'} size={25}/>}
            </Button>
        </div>

        {isAuthenticated &&
            <Typography variant='h5'>Hi {user?.name}!</Typography>}

    </div>
}

export default HeaderBar;