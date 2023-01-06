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
  dataProtectionHover: boolean = false;


  highlight(link: string) {
    if (link == 'legalNotiveHover')
      this.legalNotiveHover = true;
    if (link == 'dataProtectionHover')
      this.dataProtectionHover = true;
  }

  unHighlight(link: string) {
    if (link == 'legalNotiveHover')
      this.legalNotiveHover = false;
    if (link == 'dataProtectionHover')
      this.dataProtectionHover = false;
  }
}