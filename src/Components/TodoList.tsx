import {Todo} from "../Models";
import SingleTodo from "./SingleTodo";
import './todos.scss'

const TodoList: React.FC<{todoList:Array<Todo>}> = ({todoList}) => {
    return <div className='todo-list'>
        {todoList.map((todo) => <SingleTodo todo={todo} />)}
        </div>
}

export default TodoList;