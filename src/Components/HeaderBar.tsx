import {Button, Typography} from "@mui/material";
import './header.scss';

const HeaderBar = () => {
    const username: string = 'user';
    const isLoggedIn: boolean = true;

    return <div className='header-bar'>
        {isLoggedIn ? <>
                <Button variant='contained'>
                    Log out
                </Button>
                <Typography variant='h5'>Hi {username}!</Typography>
            </> :
            <Button variant='contained'>
                Log in
            </Button>}
    </div>
}

export default HeaderBar;