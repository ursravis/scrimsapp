import { Component, OnInit, }  from '@angular/core';
import { CommonModule }     from '@angular/common';
import { ClearanceItem } from './clearance-item';
import { ProjectService } from './project.service';
import { UserService,User } from '../shared/index';
import { Subscription }       from 'rxjs/Subscription';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    templateUrl: './clearance-list.component.html',
    styles: [require('./ci-list.scss').toString()]
})
export class ClearanceListComponent implements OnInit {
    pageTitle: string = 'Clearance Items';
   projectID:number;
   projectName:string;
    errorMessage: string;
    clearanceItemList: ClearanceItem[];
   private sub:Subscription;
    constructor(private projectService: ProjectService,private userService: UserService,private _router:Router,private _route:ActivatedRoute) {
 //this.pageTitle = 'Project List : ' + userService.loggedInUser.firstName+' '+userService.loggedInUser.lastName;

    }

   

    ngOnInit(): void {   
         this.sub = this._route.params.subscribe(
            params => {
                this.projectID= +params['id'];
                this.projectName="Test Project";
         })
this.clearanceItemList=[];
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
          this.clearanceItemList.push(new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null));
    }
    
}
