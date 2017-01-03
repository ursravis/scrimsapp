import { Component, OnInit, }  from '@angular/core';
import { CommonModule }     from '@angular/common';
import { UserService,User } from '../shared/index';

@Component({
template: `
    <div>
      <h1>404: page missing</h1>
    </div>
  `})
export class AdminComponent  {

   
    errorMessage: string;

  public pieChartType:string = 'pie';

    constructor(private userService: UserService) {

    }

   


    
}
