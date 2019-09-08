import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonDetailComponent } from './dragon-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { AlertsComponent } from 'src/app/shared/components/alerts/alerts.component';

@NgModule({
    declarations: [DragonDetailComponent],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule,
        VMessageModule,
        AlertsModule 
    ]
})
export class DragonDetailModule { }