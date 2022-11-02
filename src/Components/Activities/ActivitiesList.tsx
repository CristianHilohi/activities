import {IconButton, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getActivities} from "../../Store/ActivitiesActions";
import {useDispatch, useSelector} from 'react-redux';
import SingleActivity from './SingleActivity';
import {Activity, Todo} from "../../Models";
import './activities.scss';
import AddIcon from '@mui/icons-material/Add';
import AddEditActivity from "./AddEditActivity";

const ActivitiesList = () => {
    const {activities, loading} = useSelector((state: any) => state.activities);// TODO: replace any with right object type

    const dispatch = useDispatch();


    const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);
    const [activityToBeEdited, setActivityToBeEdited] = useState<Activity | null>(null);

    const openNewActivityDialog = () => {
        setIsDialogVisible(true);
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(getActivities());
        // eslint-disable-next-line
    }, []);

    return <div className='activities-list'>
        <Typography variant="h3" component="h2">
            My activities:
        </Typography>
        {activities.map((activity: Activity) => <SingleActivity activity={activity} setActivityToBeEdited={setActivityToBeEdited} setIsActivityDialogVisible={setIsDialogVisible} key={'activity' + activity.id}/>)}
        <IconButton onClick={openNewActivityDialog}>
            <AddIcon sx={{height: '50px', width: '50px'}}/>
        </IconButton>

        {isDialogVisible &&
            <AddEditActivity
                isDialogOpen={isDialogVisible}
                setDialogOpen={setIsDialogVisible}
                activity={activityToBeEdited}
            />}
    </div>
}

export default ActivitiesList;