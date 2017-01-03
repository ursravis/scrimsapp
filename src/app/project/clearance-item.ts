import {ClearanceImage} from './clearance-image';
export class ClearanceItem{
    clearanceItemName:string;
    clearanceItemID:number;
    status:string;
      description:string;
       useDescription:string;
    tags:string[];
    releaseAdded:boolean;
    createdBy:string;
    images:ClearanceImage[];
    
constructor(clearanceItemName:string,
    clearanceItemID:number,
    status:string,
      description:string,
    tags:string[],
    releaseAdded:boolean,
    createdBy:string,
    images:ClearanceImage[])
{
    this.clearanceItemName=clearanceItemName;
    this.clearanceItemID=clearanceItemID;
    this.status=status;
    this.description=description;
    this.tags=tags;
    this.releaseAdded=releaseAdded;
    this.createdBy=createdBy;
    this.images=images;

}
}
