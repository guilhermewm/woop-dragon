import { NgModule } from '@angular/core';
import { DragonComponent } from './dragon.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [DragonComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [ DragonComponent ]
})
export class DragonModule { }