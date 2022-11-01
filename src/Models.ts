interface Todo {
    title: string;
    description: string;
    status: boolean;
}

export default interface Activity extends Todo{
    todoList: [Todo];
}