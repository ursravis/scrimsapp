import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/index';
import { LoginComponent } from './index';
import { FormsModule } from '@angular/forms';
import { CommonModule }     from '@angular/common';

@NgModule({
  declarations:[LoginComponent],
  imports:[SharedModule,   
   CommonModule,
    FormsModule,],
  exports:[LoginComponent]
})
export class LoginModule {}