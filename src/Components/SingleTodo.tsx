import Typography from "@mui/material/Typography";
import {Checkbox, IconButton} from "@mui/material";
import {Todo} from "../Models";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleTodo: React.FC<{todo: Todo}> = ({todo}) => {
    const {title, description, status} = todo;
    return<div className='single-todo'>
        <Typography variant="h5">
            {title}
        </Typography>
        <Typography>
            {description}
        </Typography>
        <span className='actions'>
            <IconButton>
            <EditIcon/>
        </IconButton>
        <IconButton>
            <DeleteIcon/>
        </IconButton>
        <Checkbox checked={status}/>
        </span>

    </div>
}

export default SingleTodo;