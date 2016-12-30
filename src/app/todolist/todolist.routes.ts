import { Routes,RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { TodolistComponent } from './todolist.component';

export const TodolistRoutes: Routes = [
  { path: '', component: TodolistComponent }
];
export const TodolistRouting: ModuleWithProviders =
                RouterModule.forChild(TodolistRoutes);

