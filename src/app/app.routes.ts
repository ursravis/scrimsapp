import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent ,UnAuthorizeComponent} from './no-content';

import { DataResolver } from './app.resolver';
import { LoggedInGuard ,AdminGuard} from './shared/index';
import { LoginComponent } from './login/index';

export const ROUTES: Routes = [
  { path: '',redirectTo:'projects',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'projects', loadChildren: './project/project.module#ProjectModule?'},//, canLoad: [LoggedInGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},//, canLoad: [AdminGuard] },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail')
  //     .then((comp: any) => comp.default)
  //     , canActivate: [LoggedInGuard]
  // },
  { path: '401', component: UnAuthorizeComponent },
  { path: '**', component: NoContentComponent },
];
