import { Component, Output, Input, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss'],
})
export class ResponsiveMenuComponent {
 @Output() 
  burgerMenuDeactivated : EventEmitter<boolean> = new EventEmitter <boolean>;

  menuImg : string = './../../assets/img/navigation/closeMenu.png';
  @Input() transitioning : boolean = false;

  constructor(public translate: TranslateService, private languageService: LanguageService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');
  }

  closeRMenu(){
    this.menuImg = './../../assets/img/navigation/transitionMenu.png'
    this.burgerMenuDeactivated.emit(true)
    setTimeout(() => this.menuImg = './../../assets/img/navigation/closeMenu.png', 250);
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
