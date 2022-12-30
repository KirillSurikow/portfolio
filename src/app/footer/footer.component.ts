import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  smIcons = [
    'github.png',
    'mail.png',
    'linkedIn.png'
  ]

  legalNotiveHover: boolean = false;


  highlight() {
    console.log('works')
    this.legalNotiveHover = true;
  }

  unHighlight() {
    console.log('works')
    this.legalNotiveHover = false;
  }
}