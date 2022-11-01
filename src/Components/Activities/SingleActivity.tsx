import {Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, IconButton} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {Activity} from "../../Models";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import TodoList from "../Todos/TodoList";
import {useDispatch} from "react-redux";
import {checkActivity, deleteActivity} from "../../Store/ActivitiesActions";

const SingleActivity: React.FC<{
    activity: Activity,
    setActivityToBeEdited: Function,
    setIsDialogVisible: Function
}> = ({
          activity,
          setActivityToBeEdited,
          setIsDialogVisible
      }) => {
    const {title, description, status, todoList} = activity;

    const dispatch = useDispatch();

    const [expanded, setExpanded] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(status);

    useEffect(() => {
        if(todoList.length > 0) {
            let allDone = true;
            todoList.forEach((todo) => {
                if(!todo.status) {
                    allDone = false;
                }
            });

            if(allDone) {
                // @ts-ignore
                dispatch(checkActivity(true));
            }

            if(!allDone) {
                // @ts-ignore
                dispatch(checkActivity(false));
            }
        }
    }, [activity])

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    const handleChange = () => {
        setExpanded(!expanded);
    }

    // @ts-ignore
    const handleDeleteActivity = () => dispatch(deleteActivity(activity.id));

    const handelEditActivity = () => {
        setActivityToBeEdited(activity, setIsDialogVisible(true));
    }

    return <div className='activity'>
        <Accordion onChange={handleChange}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h4" component="h3">
                    {title}
                </Typography>
                <Checkbox checked={checked} disabled={activity.todoList.length > 0} onChange={handleCheck}/>
            </AccordionSummary>
            <AccordionDetails>
                <div className='activity-details'>
                    <Typography>
                        {description}
                    </Typography>
                    <span>
                        <IconButton onClick={handelEditActivity}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton onClick={handleDeleteActivity}>
                            <DeleteIcon/>
                        </IconButton>
                    </span>
                </div>

                {todoList.length > 0 && <TodoList todoList={todoList}/>}

                <Button variant="outlined" color='primary' endIcon={<AddIcon/>}>
                    Add todo
                </Button>
            </AccordionDetails>
        </Accordion>
    </div>
}

export default SingleActivity;