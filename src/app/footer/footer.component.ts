import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  smIcons = [
    {
      path: 'github.png',
      url: 'https://github.com/KirillSurikow'
    },
    {
      path: 'mail.png',
      url: '#'
    }, {
      path: 'linkedIn.png',
      url: 'https://www.linkedin.com/in/kirill-surikow-162282260/'
    },
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