import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-block',
  templateUrl: './social-media-block.component.html',
  styleUrls: ['./social-media-block.component.scss']
})
export class SocialMediaBlockComponent {
   smIcons = [
       'github.png',
       'mail.png',
       'linkedIn.png'
   ]

}
