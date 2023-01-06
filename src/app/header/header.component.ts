import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[TranslateService]
})
export class HeaderComponent {
  aboutMeHover: boolean = false;
  skillsHover: boolean = false;
  portfolioHover: boolean = false;
  burgerMenuActive : boolean = false;
  transitioning : boolean = false;


  constructor(public translate: TranslateService, private languageService: LanguageService) {
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

  translateToDE(){
    this.translate.use('de');
    this.languageService.language = 'de';
    this.languageService.changeLanguage('de')
  }

  translateToEN(){
    this.translate.use('en');
    this.languageService.language = 'en';
    this.languageService.changeLanguage('en')
  }
}
 