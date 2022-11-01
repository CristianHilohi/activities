import {Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, IconButton} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {Activity} from "../Models";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import TodoList from "./TodoList";

const SingleActivity: React.FC<{ activity: Activity }> = ({activity}) => {
    const {title, description, status, todoList} = activity;
    const hasTodos: boolean = todoList.length > 0;

    const [expanded, setExpanded] = useState<Boolean>(false);

    const handleChange = () => {
        setExpanded(!expanded);
    }


    return <div className='activity'>
        <Accordion onChange={handleChange}>
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
                    <span>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </span>
                </div>

                {hasTodos && <TodoList todoList={todoList}/>}

                <Button variant="outlined" color='primary' endIcon={<AddIcon/>}>
                    Add todo
                </Button>
            </AccordionDetails>
        </Accordion>
    </div>
}

export default SingleActivity;