import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Project } from './project';

@Injectable()
export class ProjectService {
    private _projectUrl = '';
    //private _projectUrl = 'http://localhost:2196/api/projects';
private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private _http: Http) { 
       this._projectUrl=process.env.API_URL;
    }

    getProjects(): Observable<Project[]> {
       
        return this._http.get(this._projectUrl)
            .map((response: Response) => <Project[]> response.json())
            .do(data => console.log('All: ' ))
            .catch(this.handleError);
    }

    getProject(id: number): Observable<Project> {
        return this.getProjects()
            .map((projects: Project[]) => projects.find(p => p.projectId === id));
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
}
