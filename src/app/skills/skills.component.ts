import { Component } from '@angular/core';


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


}
