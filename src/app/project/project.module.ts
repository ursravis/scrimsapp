import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }     from '@angular/common';
import { projectRouting } from './project.routes';
import { ProjectListComponent } from './project-list.component';
import { ClearanceListComponent,ClearanceDetailsComponent,BarChartDirective } from './index';
import {ProjectDetailsComponent} from './project-details.component';
import {ProjectService } from './project.service';
import { S3Service} from './s3-service';
import { SharedModule } from '../shared/index';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    SharedModule,
    projectRouting
  ],
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ClearanceListComponent,
    ClearanceDetailsComponent

  ],
  providers:[
    ProjectService,
    S3Service
  ],
  
})
export class ProjectModule {}
