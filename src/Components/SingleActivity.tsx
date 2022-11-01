import {Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, IconButton} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {Activity} from "../Models";
import SingleTodo from "./SingleTodo";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./TodoList";

const SingleActivity: React.FC<{activity: Activity}> = ({activity}) => {
    const {title, description, status, todoList} = activity;
    const hasTodos: boolean = todoList.length > 0;

    const [expanded, setExpanded] = useState<Boolean>(false);

    const handleChange = () => {
        setExpanded(!expanded);
    }


    return <div className='activity'>
        <Accordion  onChange={handleChange}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h4" component="h3">
                    {title}
                </Typography>
                <Checkbox checked={status}/>
            </AccordionSummary>
            <AccordionDetails>
                <div className='activity-details'>
                    <Typography>
                        {description}
                    </Typography>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </div>

                {hasTodos && <TodoList todoList={todoList}/>}

                <Button variant="outlined" endIcon={<AddIcon/>}>
                    Add todo
                </Button>
            </AccordionDetails>
        </Accordion>
    </div>
}

export default SingleActivity;