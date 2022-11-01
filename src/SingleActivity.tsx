import Activity from "./Models";
import {Checkbox} from "@mui/material";

const SingleActivity = (activity : Activity) => {
    const {title, description, status, todoList} = activity;
    const hasTasks: boolean = todoList.length > 0;

    return <div className='activity'>
        <div className='title'>
            {title}
        </div>
        <div className='description'>
            {description}
        </div>
        <div className='status'>
            <Checkbox checked={status}/>
        </div>
    </div>
}

export default SingleActivity;