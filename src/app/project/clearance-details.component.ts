import { Component, OnInit, }  from '@angular/core';
import { CommonModule }     from '@angular/common';
import { ClearanceItem } from './clearance-item';
import { ProjectService } from './project.service';
import { SmartImage } from './smartImage';
import { UserService,User } from '../shared/index';
import { Subscription }       from 'rxjs/Subscription';
import {ActivatedRoute,Router} from '@angular/router';
import {S3Service} from './s3-service'
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
    images:SmartImage[]=[];
   private sub:Subscription;
    constructor(private projectService: ProjectService,private s3Service:S3Service, private userService: UserService,private _router:Router,private _route:ActivatedRoute) {
 //this.pageTitle = 'Project List : ' + userService.loggedInUser.firstName+' '+userService.loggedInUser.lastName;
this.images=[];
    }

   

    ngOnInit(): void {   
this.clearanceItem=new ClearanceItem('',0,'','',[''],false,'',null,null);
         this.sub = this._route.params.subscribe(
            params => {
                this.projectID= params['id'];
                this.claranceItemId=params['ciId'];
                  if(this.claranceItemId>0)
                {
                    this.projectService.getCIDetails(this.claranceItemId)
                    .subscribe(
                         ci => {
                             this.clearanceItem =  ci;
                            },
                     error => this.errorMessage = <any>error);
                }
                else{
                    this.clearanceItem=new ClearanceItem('Item1',123,'added','New item desc',['pen','check'],false,'raviaa',null,null);
                    this.clearanceItem.clearanceItemUniqueId="CIUnique1023";
                    this.clearanceItem.createdByProduction=true;
                        this.clearanceItem.useDescription="This item is used to demo this application";
                    this.clearanceItem.createdDate='01/02/2013';

                }
         })

    }

     saveClearanceItem():void{

           this.projectService.updateClearanceItem(this.clearanceItem)
                    .then(()=>{});
        
    }

    fileChange(input:any){

        //this.handleFiles(input.files);
         this.s3Service.uploadFiles(input.files[0],this.clearanceItem.clearanceItemUniqueId)
         .then(result=>this.reloadImages());
        
    }

    handleFiles(files:File[])
    {
// Loop through each picture file
        for (var i = 0; i < files.length; i++) {

            //this.files.push(input.files[i]);
            var file=files[i];

            // Create an img element and add the image file data to it
            var img = document.createElement("img");
            //img.src = window.URL.createObjectURL(input.files[i]);

            // Create a FileReader
            var reader = new FileReader();

            // Add an event listener to deal with the file when the reader is complete
            reader.addEventListener("load", (event: any) => {
                // Get the event.target.result from the reader (base64 of the image)
               img.src = event.target.result;
               // img.src =reader.result;

                // Resize the image
                //var resized_img = this.resize(img);
               // var thumbNail=this.createThumbnail(img,64,file.type);
                var imageData=new SmartImage();
               // imageData.thumbnailSrc=thumbNail;
                imageData.imageSrc=event.target.result;
                imageData.imageName=file.name;
                imageData.imageType=file.type;
                // Push the img src (base64 string) into our array that we display in our html template
                this.images.push(imageData);
                //this.projectService.uploadFiles(imageData,this.clearanceItem.clearanceItemID)
            }, false);

            reader.readAsDataURL(files[i]);
        }
    }
reloadImages():void{
    this.images=[];
 this.s3Service.getAllFiles(this.clearanceItem.clearanceItemUniqueId)
 .then((urls)=>
 {
    if(urls != null)
     urls.forEach(url=>
     {
     var imageData=new SmartImage();
               // imageData.thumbnailSrc=thumbNail;
                imageData.imageURL=url;
                this.images.push(imageData);
 })
 });
}
 
    stepOneClick():void{
        $('#stepOne').toggle('slow');
    }
      stepTwoClick():void{
        $('#stepTwo').toggle('slow');
    }
      stepThreeClick():void{
        $('#stepThree').toggle('slow');
          this.reloadImages();
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
