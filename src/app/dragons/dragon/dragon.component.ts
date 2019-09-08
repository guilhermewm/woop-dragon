import { Component, Input } from '@angular/core';

import { Dragon } from './dragon';
import { DragonListComponent } from '../dragon-list/dragon-list.component';

@Component({
    selector: 'ws-dragon',
    templateUrl: 'dragon.component.html'
})
export class DragonComponent {
        
    constructor(
        private dragonListComponent: DragonListComponent
    ){}

    @Input() dragon: Dragon = {
        createdAt: null,
        history: "",
        id: "",
        name: "",
        type: "",
    }

    deleteDragon(id: string) {
        this.dragonListComponent.deleteDragon(id);
    }
}