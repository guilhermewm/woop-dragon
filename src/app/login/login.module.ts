import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { AlertsModule } from '../shared/components/alerts/alerts.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [ 
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        VMessageModule,
        AlertsModule
    ]
})
export class LoginModule {}