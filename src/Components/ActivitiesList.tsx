import {IconButton, Typography} from "@mui/material";
import {useEffect} from "react";
import {getActivities} from "../Store/ActivitiesActions";
import {useDispatch, useSelector} from 'react-redux';
import SingleActivity from "./SingleActivity";
import {Activity, Todo} from "../Models";
import './activities.scss';
import AddIcon from '@mui/icons-material/Add';

const ActivitiesList = () => {
    const {activities, loading, error} = useSelector((state: any) => state.activities);// TODO: replace any with right object type

    const dispatch = useDispatch();

    const demoTodos: Array<Todo> = [
        {id: 1, title: 'push-ups', description: '', status: true},
        {id: 1, title: 'russian twists', description: 'with 10 kg', status: false},
    ];

    const demoActivities: Array<Activity> = [
        {id: 1, title: 'drink water', description: 'stay hydrated bro', status: false, todoList: []},
        {id: 2, title: 'sport', description: 'do exercises', status: false, todoList: demoTodos},
        {id: 3, title: 'call Saul Goodman for the \'thing\'', description: '', status: false, todoList: []}
    ];

    useEffect(() => {
        // @ts-ignore
        dispatch(getActivities());
        // eslint-disable-next-line
    }, []);

    return <div className='activities-list'>
        <Typography variant="h3" component="h2">
            My activities:
        </Typography>
        {demoActivities.map((activity) => <SingleActivity activity={activity} />)}
        <IconButton>
            <AddIcon sx={{height: '50px', width: '50px'}}/>
        </IconButton>
    </div>
}

export default ActivitiesList;