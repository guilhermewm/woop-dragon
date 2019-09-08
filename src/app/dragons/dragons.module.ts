import { NgModule } from '@angular/core';

import { DragonModule } from './dragon/dragon.module';
import { DragonListModule } from './dragon-list/dragon-list.module';
import { DragonDetailModule } from './dragon-detail/dragon-detail.module';

@NgModule({
    imports: [ 
        DragonModule,
        DragonListModule,
        DragonDetailModule,
    ],
    declarations: []
})
export class DragonsModule {}