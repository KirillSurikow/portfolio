import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  invalidName = false;
  invalidEmail = false;
  invalidMessage = false;

  typing($event: any, slot: string) {
    if (slot == 'name') {
      if ($event.target.value.includes('<') || $event.target.value.includes('>'))
        this.invalidName = true;
      else
        this.invalidName = false;
    }
    if (slot == 'mail') {
      if ($event.target.value.includes('<') || $event.target.value.includes('>'))
        this.invalidEmail = true;
      else
        this.invalidEmail = false;
    }
    if (slot == 'message') {
      if ($event.target.value.includes('<') || $event.target.value.includes('>'))
        this.invalidMessage = true;
      else
        this.invalidMessage = false;
    }

  }
}


