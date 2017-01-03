import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ProjectDetailsComponent } from './project-details.component';
import {ProjectListComponent} from './project-list.component';
import {ClearanceListComponent,ClearanceDetailsComponent} from './index';

export const ProjectRoutes: Routes = [
  { path: '', component: ProjectListComponent },
  {path:':id',component:ProjectDetailsComponent},
    {path:':id/cis',component:ClearanceListComponent},
     {path:':id/cis/:ciId',component:ClearanceDetailsComponent}
];

export const projectRouting: ModuleWithProviders =
                RouterModule.forChild(ProjectRoutes);

