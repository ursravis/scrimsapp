import { NgModule, ModuleWithProviders } from '@angular/core';
import { UserService,LoggedInGuard ,AdminGuard} from './index';

@NgModule({})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [UserService,LoggedInGuard,AdminGuard]
    };
  }
}