import { Component, OnInit, }  from '@angular/core';
import { CommonModule }     from '@angular/common';
import { Project } from './project';
import {BarChartDirective } from './index';
import { ProjectService } from './project.service';
import { UserService,User } from '../shared/index';

@Component({
    templateUrl: './project-list.component.html',
    styles: [require('./list.scss').toString()]
})
export class ProjectListComponent implements OnInit {
    pageTitle: string = 'Project List';
   
    errorMessage: string;
    projects: Project[];

  public pieChartType:string = 'pie';

    constructor(private _productService: ProjectService,private userService: UserService) {
        // if(userService.loggedInUser != null)
        // {
        //     this.pageTitle = 'Project List : ' + userService.loggedInUser.firstName+' '+userService.loggedInUser.lastName;
        // }

    }

   

    ngOnInit(): void {   
           this._productService.getProjects()
                     .subscribe(
                       projects => {
                           this.projects = projects;
                        //    this.projects.forEach(element => {
                        //        element.reviewQueueCount=6;
                        //        element.totalCICount=22;
                        //        element.statusNames=['Created', 'Cleared', 'Pending'];
                        //        element.statusValues= [10, 5, 7];
                        //    });
                           },
                       error =>  this.errorMessage = <any>error);
    }
    
}
