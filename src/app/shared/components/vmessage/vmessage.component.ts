import { Component, Input } from '@angular/core';

@Component({
    selector: 'ws-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

    @Input() text = '';
}