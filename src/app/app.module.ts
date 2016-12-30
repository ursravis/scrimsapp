import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent, UnAuthorizeComponent } from './no-content';
import { SharedModule } from './shared/index';
import { LoginModule } from './login/index';
import { NotificationsService, NotificationComponent } from './notification/index';
import {
  ErrorLogService,
  LOGGING_ERROR_HANDLER_OPTIONS,
  LOGGING_ERROR_HANDLER_PROVIDERS
} from './infra/index';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  NotificationsService,
  ErrorLogService,
  LOGGING_ERROR_HANDLER_PROVIDERS,
  {
    provide: LOGGING_ERROR_HANDLER_OPTIONS,
    useValue: {
      rethrowError: false,
      unwrapError: false
    }
  }
];



/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    UnAuthorizeComponent,
    NotificationComponent

  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    RouterModule.forRoot(ROUTES, {}),
    SharedModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
 

}

