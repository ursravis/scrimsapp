import { NgModule } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, TodolistComponent,TodolistRouting ,TodoComponent} from './index';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
     imports: [
         CommonModule,
        FormsModule,
        DragulaModule,
        TodolistRouting
    ],
    declarations: [
        CompletedFilterPipe,
        TodolistComponent,
        TodoComponent
    ],
   
    exports: [TodolistComponent,
        CompletedFilterPipe
    ]
})
export class TodolistModule {
}
