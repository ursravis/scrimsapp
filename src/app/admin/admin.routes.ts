import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './index';

export const AdminRoutes: Routes = [
  { path: '', component: AdminComponent }
];

export const AdminRoutingModule:ModuleWithProviders =
                RouterModule.forChild(AdminRoutes);
