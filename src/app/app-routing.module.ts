import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { DragonListComponent } from './dragons/dragon-list/dragon-list.component';
import { DragonDetailComponent } from './dragons/dragon-detail/dragon-detail.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', 
    component: LoginComponent
  },  
  { 
    path: 'dragons', 
    pathMatch: 'full',
    component: DragonListComponent,
    canActivate: [AuthGuardService]
  },  
  { 
    path: 'dragons/:id', 
    component: DragonDetailComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
