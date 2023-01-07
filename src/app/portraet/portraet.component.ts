import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portraet',
  templateUrl: './portraet.component.html',
  styleUrls: ['./portraet.component.scss']
})
export class PortraetComponent {
    @Input() visible : boolean = false;
}
