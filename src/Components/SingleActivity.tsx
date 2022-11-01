import {Accordion, AccordionDetails, AccordionSummary, Checkbox} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {Activity} from "../Models";
import SingleTodo from "./SingleTodo";
import NewTodo from "./NewTodo";

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
                <Typography>
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Checkbox checked={status}/>
            </AccordionSummary>
            <AccordionDetails>
                <NewTodo />
                {hasTodos && todoList.map((todo) => <SingleTodo todo={todo} />)}
            </AccordionDetails>
        </Accordion>
    </div>
}

export default SingleActivity;