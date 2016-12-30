import {SmartImage} from './SmartImage';
export class IProject{
    projectName:string;
    projectId:number;
    totalCICount:number=5;
      reviewQueueCount:number=3;
    filesSrc:string[];
    noOfImages:number;
    createdBy:string;
    images:SmartImage[];
constructor()
{
    
}
}
