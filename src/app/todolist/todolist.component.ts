import { Component } from '@angular/core';

import { Todo } from './todo.model';
import { NotificationsService,Notification } from '../notification/index';


@Component({
    selector: 'as-todolist',
    templateUrl: './todolist.html'
})
export class TodolistComponent {
    public todo: Todo;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor(private notificationsService: NotificationsService) {
        this.showCompleted = true;
        this.todo = new Todo('Add me to list!', false,0);
        this.list = [
            new Todo('Its cool',false,1),
            new Todo('Hello', true,2)
        ];
    }

    addTodo(event:Event) {
        event.preventDefault();
    
        var newTodo=Todo.clone(this.todo);
        newTodo.todoId=this.list.length+1;
        this.list = this.list.concat(newTodo);
        this.todo.clear();
        this.notificationsService.add(new Notification('success','Todo item is added!'));
    }

    onDelete(todoId: number) {
        this.list = this.list.filter(
            (todo, index) => todo.todoId !== todoId);
            this.notificationsService.add(new Notification('error','Todo item is deleted!'));
    }
}
