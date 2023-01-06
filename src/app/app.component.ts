import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LanguageService, TranslateService]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  menuSwipe = false;

  constructor(private activatedRoute: ActivatedRoute, public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((value) => {
      this.jumpTo(value)
    })
  }

  jumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }
}
