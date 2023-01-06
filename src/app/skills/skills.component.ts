import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  allSkills = [
    {
      'name':'Angular',
      'img':'angular.png'
    },
    {
      'name':'Rest-API',
      'img':'api.png'
    },
    {
      'name':'CSS',
      'img':'css.png'
    },
    {
      'name':'Firebase',
      'img':'firebase.png'
    },
    {
      'name':'GIT',
      'img':'git.png'
    },
    {
      'name':'HTML',
      'img':'html.png'
    },
    {
      'name':'JavaScript',
      'img':'javascript.png'
    },
    {
      'name':'Material design',
      'img':'material.png'
    },
    {
      'name':'Scrum',
      'img':'scrum.png'
    },
    {
      'name':'Typescript',
      'img':'typescript.png'
    },
  ]

  constructor(public translate: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('de');
    console.log(translate.store.currentLang)
  }
}
