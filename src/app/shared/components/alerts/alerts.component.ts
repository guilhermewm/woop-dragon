import { Component, Input } from '@angular/core';

@Component({
    selector: 'ws-alerts',
    templateUrl: './alerts.component.html'
})
export class AlertsComponent {

    @Input() text: string = '';

    @Input() type: string = '';

    @Input() visible: boolean = false;
}