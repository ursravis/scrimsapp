import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Project } from './project';
import { ClearanceItem } from './clearance-item';
import { SmartImage } from './smartImage';

@Injectable()
export class ProjectService {
    private _projectUrl = '';
    //private _projectUrl = 'http://localhost:2196/api/projects';
private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private _http: Http) { 
       this._projectUrl=process.env.API_URL;
    }

    getProjects(): Observable<Project[]> {
       
        return this._http.get(this._projectUrl+'dashboardProjects',{headers:this.headers})
            .map((response: Response) => <Project[]> response.json())
            .do(data => console.log('All: ' ))
            .catch(this.handleError);
    }

    getProject(id: number): Observable<Project> {
        return this._http.get(this._projectUrl+'projects/'+id,{headers:this.headers})
            .map((response: Response) => <Project> response.json())
            .do(data => console.log('All: ' ))
            .catch(this.handleError);
        // return this.getProjects()
        //     .map((projects: Project[]) => projects.find(p => p.projectId === id));
    }
    createProject(project:Project){
     var body=JSON.stringify(project);
        return this._http.post(this._projectUrl,body,{headers:this.headers})
            .toPromise()
            .then(()=>project)
            .catch(this.handleError);
    }
 updateProject(project:Project):Promise<Project>{
     var updateURL=this._projectUrl+'/'+project.projectId;
     var body=JSON.stringify(project);
        return this._http.put(updateURL,body,{headers:this.headers})
         
            .toPromise()
            .then(()=>project)
            .catch(this.handleError);
    }

     createThumb(projectId:number):Promise<Project>{
     var updateURL=this._projectUrl+'/'+projectId;
    
        return this._http.get(updateURL)
            .toPromise()
            .then(response=>response.json().data as Project)
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        //console.error(error);
       
        return Observable.throw(error || 'Server error');
    }
    getCIsOfProject(id: number): Observable<ClearanceItem[]> {
        return this._http.get(this._projectUrl+'projects/'+id +'/cis',{headers:this.headers})
            .map((response: Response) => <ClearanceItem[]> response.json())
            .do(data => console.log('All: ' ))
            .catch(this.handleError);
        // return this.getProjects()
        //     .map((projects: Project[]) => projects.find(p => p.projectId === id));
    }
        getCIDetails(id: number): Observable<ClearanceItem> {
        return this._http.get(this._projectUrl+'ClearanceItems/'+id,{headers:this.headers})
            .map((response: Response) => <ClearanceItem> response.json())
            .do(data => console.log('All: ' ))
            .catch(this.handleError);
        // return this.getProjects()
        //     .map((projects: Project[]) => projects.find(p => p.projectId === id));
    }

     updateClearanceItem(clearanceItem:ClearanceItem):Promise<ClearanceItem>{
     var updateURL=this._projectUrl+'ClearanceItems/'+clearanceItem.clearanceItemID;
     var body=JSON.stringify(clearanceItem);
        return this._http.put(updateURL,body,{headers:this.headers})
         
            .toPromise()
            .then(()=>clearanceItem)
            .catch(this.handleError);
    }
    uploadFiles(smartImage:SmartImage,id) :Promise<boolean>
{
     let formData = new FormData();
     var updateURL=this._projectUrl+'S3Proxy';
       var body=JSON.stringify(smartImage);
        // if (files.length > 0) { // a file was selected
        //     for (let i = 0; i < files.length; i++) {
        //         formData.append('file[]',files[i]);
        //     }
       return      this._http
                .post(updateURL, body,{headers:this.headers})
                   .toPromise()
            .then(()=>true)
            .catch(this.handleError);
                // do whatever you do...
                // subscribe to observable to listen for response
       // }
}
}
