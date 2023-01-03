import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  aboutMeHover: boolean = false;
  skillsHover: boolean = false;
  portfolioHover: boolean = false;
  burgerMenuActive : boolean = false;
  transitioning : boolean = false;

  constructor(public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');
  }
 
  highlight(link: string) {
    if (link == 'aboutMeHover')
      this.aboutMeHover = true;
    if (link == 'skillsHover')
      this.skillsHover = true;
    if (link == 'portfolioHover')
      this.portfolioHover = true;
  }

  unHighlight(link: string) {
    if (link == 'aboutMeHover')
      this.aboutMeHover = false;
    if (link == 'skillsHover')
      this.skillsHover = false;
    if (link == 'portfolioHover')
      this.portfolioHover = false;
  }

  openRMenu(){
      this.burgerMenuActive = true;
  }

  deactivateRMenu(){
    this.burgerMenuActive = false;
    this.transitioning = true;
  }
}
