import {useAuth0} from "@auth0/auth0-react";
import {Button, CircularProgress} from "@mui/material";
import { useNavigate } from "react-router-dom";
import './infoPage.scss'

const InfoPage = () => {
    const {loginWithRedirect, user, isAuthenticated, isLoading} = useAuth0();
    const navigate = useNavigate();

    const navigateToActivities = () => navigate("/activities");

    return <div className='info-page'>
        <section>
            <h2>Welcome to {process.env.REACT_APP__NAME}!</h2>
            <p>This is you ready to use digital activities list.</p>
            <p>You can add multiple activities, and for each, multiple todos, to keep everything organized!</p>
        </section>
        {isLoading ? <CircularProgress /> :
        isAuthenticated ?
            <section>
                <h3>Welcome back, {user?.name}!</h3>
                <Button variant='outlined' onClick={navigateToActivities}>
                    See your activities
                </Button>
            </section>
            :
            <section>
                <h3>Start by making a free account!</h3>
                <Button variant='outlined' onClick={() => loginWithRedirect()}>
                    Sign up
                </Button>
            </section>
        }
        <address>
            <p>For any other information, you can write us on
                {' '}<a href='mailto:cristian.hilohi@gmail.com'>cristian.hilohi@gmail.com</a>
            </p>
        </address>
    </div>

}

export default InfoPage;