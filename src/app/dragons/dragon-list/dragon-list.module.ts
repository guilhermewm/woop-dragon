import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonListComponent } from './dragon-list.component';
import { DragonsComponent } from './dragons/dragons.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { DragonModule } from '../dragon/dragon.module';
import { SearchComponent } from './search/search.component';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { DragonFormComponent } from './dragon-form/dragon-form.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        DragonListComponent,
        DragonsComponent,
        FilterByDescription,
        SearchComponent,
        DragonFormComponent
    ],
    imports: [ 
        CommonModule,
        DragonModule,
        AlertsModule,
        FormsModule,
        VMessageModule,
        ReactiveFormsModule, 
    ],
    entryComponents: [DragonFormComponent],
    exports: [ DragonListComponent ]
})
export class DragonListModule {}