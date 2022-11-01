import Typography from "@mui/material/Typography";
import {Checkbox} from "@mui/material";
import {Todo} from "../Models";

const SingleTodo: React.FC<{todo: Todo}> = ({todo}) => {
    const {title, description, status} = todo;
    return<>
        <Typography>
            {title}
        </Typography>
        <Typography>
            {description}
        </Typography>
        <Checkbox checked={status}/>
    </>
}

export default SingleTodo;