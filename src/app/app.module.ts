import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorsModule } from './errors/errors.module';
import { DragonsModule } from './dragons/dragons.module';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserService } from './user/user.service';
import { LoginModule } from './login/login.module';
import { DragonsComponent } from './dragons/dragon-list/dragons/dragons.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragonsModule,
    LoginModule,
    AppRoutingModule,
    ErrorsModule,
    NgbModule,    
  ],
  providers: [
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
