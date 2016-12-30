import { Component,Input,Output,EventEmitter } from '@angular/core';

import { Todo } from './todo.model';

@Component({
    selector: 'todo-view',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    @Input() todo: Todo;
    @Output() onDeleted=new EventEmitter<number>();
    constructor() {
       
    }

    delTodo() {
       this.onDeleted.emit(this.todo.todoId);
    }
}
