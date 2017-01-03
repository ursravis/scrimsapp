import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }     from '@angular/common';
import { SharedModule } from '../shared/index';
import {AdminRoutingModule,AdminComponent} from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminComponent

  ]
  
})
export class AdminModule {}
