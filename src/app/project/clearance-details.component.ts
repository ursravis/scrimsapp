import { Component, OnInit, }  from '@angular/core';
import { CommonModule }     from '@angular/common';
import { ClearanceItem } from './clearance-item';
import { ProjectService } from './project.service';
import { UserService,User } from '../shared/index';
import { Subscription }       from 'rxjs/Subscription';
import {ActivatedRoute,Router} from '@angular/router';
declare var $:any;
@Component({
    templateUrl: './clearance-details.component.html'
})
export class ClearanceDetailsComponent implements OnInit {
    pageTitle: string = 'Clearance Item';
   projectID:number;
     claranceItemId:number;
    errorMessage: string;
    clearanceItem: ClearanceItem;
   private sub:Subscription;
    constructor(private projectService: ProjectService,private userService: UserService,private _router:Router,private _route:ActivatedRoute) {
 //this.pageTitle = 'Project List : ' + userService.loggedInUser.firstName+' '+userService.loggedInUser.lastName;

    }

   

    ngOnInit(): void {   
         this.sub = this._route.params.subscribe(
            params => {
                this.projectID= +params['id'];
                this.claranceItemId=params['ciId'];
         })
this.clearanceItem=new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null,null);
      this.clearanceItem.clearanceItemUniqueId="CIUnique1023";
      this.clearanceItem.createdByProduction=true;
        this.clearanceItem.useDescription="This item is used to demo this application";
       this.clearanceItem.createdDate='01/02/2013';
    }

    stepOneClick():void{
        $('#stepOne').toggle('slow');
    }
      stepTwoClick():void{
        $('#stepTwo').toggle('slow');
    }
      stepThreeClick():void{
        $('#stepThree').toggle('slow');
    }
      stepFourClick():void{
        $('#stepFour').toggle('slow');
    }

     stepOneNextClick():void{
        $('#stepOne').hide('slow');
        $('#stepTwo').show('slow');
    }
      stepTwoNextClick():void{
          $('#stepTwo').hide('slow');
        $('#stepThree').show('slow');
    }
      stepThreeNextClick():void{
         $('#stepThree').hide('slow');
        $('#stepFour').show('slow');
    }


   
      stepTwoPrevClick():void{
          $('#stepOne').show('slow');
        $('#stepTwo').hide('slow');
    }
      stepThreePrevClick():void{
         $('#stepTwo').show('slow');
        $('#stepThree').hide('slow');
    }
       stepFourPrevClick():void{
       $('#stepThree').show('slow');
        $('#stepFour').hide('slow');
    }
    
    
}
