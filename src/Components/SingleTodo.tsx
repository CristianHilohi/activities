import Typography from "@mui/material/Typography";
import {Checkbox} from "@mui/material";
import {Todo} from "../Models";

const SingleTodo: React.FC<{todo: Todo}> = ({todo}) => {
    const {title, description, status} = todo;
    return<div className='single-todo'>
        <Typography variant="h5">
            {title}
        </Typography>
        <Typography>
            {description}
        </Typography>
        <Checkbox checked={status}/>
    </div>
}

export default SingleTodo;