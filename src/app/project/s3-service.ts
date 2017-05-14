
import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import AWS = require('aws-sdk');
//import * as AWS from 'aws-sdk';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Project } from './project';
import { ClearanceItem } from './clearance-item';
import { SmartImage } from './smartImage';
import {Credentials} from './credentials';

@Injectable()
export class S3Service {
    private _projectUrl = '';
    // AWS:any= window.AWS;
    private awsBucketName='clearanceitems';
    private awsCredentials:Credentials;
    //private _projectUrl = 'http://localhost:2196/api/projects';
private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private _http: Http) { 
       this._projectUrl=process.env.API_URL;
       this.getCredentials().subscribe(c=>this.awsCredentials=c);
       
    }

  

    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        //console.error(error);
       
        return Observable.throw(error || 'Server error');
    }
   
    uploadFiles(file :File,uniqueId:string) :Promise<boolean>
{
      var s3=this.loginAWSS3();

        if (file) {

            var objKey = uniqueId+'/' + file.name;
            var params = {
                Key: objKey,
                ContentType: file.type,
                Body: file,
                ACL: 'public-read',
                Bucket:'clearanceitems'
            };

         var putPromise=   s3.putObject(params).promise();
         return putPromise
         .then(data=> data.ETag != null)
         .catch(function(err) {
                console.log( 'ERROR: ' + err);
                return false;
        });
        }

        
     
}
getAllFiles(uniqueId:string):Promise<string[]>
{
     var s3=this.loginAWSS3();
     var imageURLs=[];
    var params={
           Bucket:'clearanceitemsresized',
            Prefix: uniqueId
            };
     var listPromise=  s3.listObjectsV2(params).promise();
           

      return  listPromise.then(data=> {
            console.log('Success');
             var objKeys = "";
             if(data != null && data.Contents != null)
                data.Contents.forEach(function(obj) {
                    objKeys += obj.Key + "<br>";
                    console.log(obj.Key);
                    var params = {Bucket: 'clearanceitemsresized', Key: obj.Key, Expires: 60};
                    var url = s3.getSignedUrl('getObject', params);
                    imageURLs.push(url);
                    console.log('The URL is', url);
                    // s3.getSignedUrl({ Bucket: 'clearanceitems', Key: obj.Key ,ResponseContentEncoding:'base64'}, function(err, data)
                    // {
                    //     if (!err)
                    //         console.log(data.Body.toString());
                    // });
                });
                return imageURLs;
        }).catch(function(err) {
                console.log( 'ERROR: ' + err);
        });


}

loginAWSS3():AWS.S3{
    // if(this.awsCredentials == null || this.awsCredentials.Expiration<=new Date())
    // {
    // this.getCredentials()
    // .subscribe(c=>{
    //     this.awsCredentials=c;
        
    // });
//}
   
     window.AWS.config.region = 'us-west-2'; // 1. Enter your region
    window.AWS.config.accessKeyId=this.awsCredentials.accessKeyId;
    window.AWS.config.secretAccessKey=this.awsCredentials.secretAccessKey;
    window.AWS.config.sessionToken=this.awsCredentials.sessionToken;

    // window.AWS.config.credentials = new window.AWS.CognitoIdentityCredentials({
    //     IdentityPoolId: 'us-west-2:641f00d8-ef35-4835-9485-ead99965a139' // 2. Enter your identity pool
    // });

    // window.AWS.config.getCredentials(function(err) {
    //     if (err) alert(err);
    //     console.log(window.AWS.config.credentials);
    // });

    var bucketName = 'clearanceitems'; // Enter your bucket name
    var s3 = new window.AWS.S3({
        params: {
            Bucket: bucketName
        }
    });
    return s3;
}
  getCredentials(): Observable<Credentials> {
       
        return this._http.get(this._projectUrl+'AWSCredentials',{headers:this.headers})
            .map((response: Response) =>
             <Credentials> response.json()
             )
            .do(data => console.log('All: ' ))
            .catch(this.handleError);
    }
}
