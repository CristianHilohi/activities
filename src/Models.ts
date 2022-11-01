export interface Todo {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

export interface Activity extends Todo{
    todoList: Array<Todo> | [];
}