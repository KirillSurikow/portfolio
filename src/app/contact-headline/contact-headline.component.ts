import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-headline',
  templateUrl: './contact-headline.component.html',
  styleUrls: ['./contact-headline.component.scss']
})
export class ContactHeadlineComponent {

  @Input() visible : boolean = false;
}
