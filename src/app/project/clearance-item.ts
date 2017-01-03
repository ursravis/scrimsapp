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
    clearanceItemUniqueId:string;
    createdByProduction:boolean;
    createdDate:string;
    imageUrl:string;

    
constructor(clearanceItemName:string,
    clearanceItemID:number,
    status:string,
      description:string,
    tags:string[],
    releaseAdded:boolean,
    createdBy:string,
    images:ClearanceImage[],imageUrl:string)
{
    this.clearanceItemName=clearanceItemName;
    this.clearanceItemID=clearanceItemID;
    this.status=status;
    this.description=description;
    this.tags=tags;
    this.releaseAdded=releaseAdded;
    this.createdBy=createdBy;
    this.images=images;
    this.imageUrl=imageUrl;

}
}
