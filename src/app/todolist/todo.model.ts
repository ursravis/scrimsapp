export class Todo {
    public name: string;
    public done: boolean;
    public todoId: number;
    static clone(todo: Todo): Todo {
        return new Todo(todo.name, todo.done,todo.todoId);
    }

    constructor(name: string, done = false, todoId: number) {
        this.name = name;
        this.done = done;
        this.todoId=todoId;
    }

    clear() {
        this.name = '';
        this.done = false;
        this.todoId=0;
    }
}
