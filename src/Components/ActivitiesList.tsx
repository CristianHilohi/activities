import {Typography} from "@mui/material";
import {useEffect} from "react";
import {getActivities} from "../Store/ActivitiesActions";
import {useDispatch, useSelector} from 'react-redux';
import SingleActivity from "./SingleActivity";
import {Activity, Todo} from "../Models";

const ActivitiesList = () => {
    const {activities, loading, error} = useSelector((state: any) => state.activities);// TODO: replace any with right object type

    const dispatch = useDispatch();

    const demoTodos: Array<Todo> = [
        {id: 1, title: 'push-ups', description: '', status: true},
        {id: 1, title: 'russian twists', description: 'with 10 kg', status: false},
    ];

    const demoActivities: Array<Activity> = [
        {id: 1, title: 'drink water', description: 'stay hydrated bro', status: false, todoList: []},
        {id: 2, title: 'sport', description: 'do exercises', status: false, todoList: demoTodos}
    ];

    useEffect(() => {
        // @ts-ignore
        dispatch(getActivities());
        // eslint-disable-next-line
    }, []);

    return <div>
        <Typography variant="h2" component="h2">
            My activities:
            {demoActivities.map((activity) => <SingleActivity activity={activity} />)}
        </Typography>
    </div>
}

export default ActivitiesList;