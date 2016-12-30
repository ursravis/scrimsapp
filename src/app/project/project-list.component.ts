import { Component, OnInit, }  from '@angular/core';
import { CommonModule }     from '@angular/common';
import { IProject } from './project';
import { ProjectService } from './project.service';
import { UserService,User } from '../shared/index';

@Component({
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    pageTitle: string = 'Project List';
   
    errorMessage: string;
    projects: IProject[];

    constructor(private _productService: ProjectService,private userService: UserService) {
 this.pageTitle = 'Project List : ' + userService.loggedInUser.firstName+' '+userService.loggedInUser.lastName;

    }

   

    ngOnInit(): void {   
           this._productService.getProjects()
                     .subscribe(
                       projects => this.projects = projects,
                       error =>  this.errorMessage = <any>error);
    }
    
}
