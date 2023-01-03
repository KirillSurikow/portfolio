import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-block',
  templateUrl: './social-media-block.component.html',
  styleUrls: ['./social-media-block.component.scss']
})
export class SocialMediaBlockComponent {
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

}
