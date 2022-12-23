import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   public hoveringAboutMe : boolean = false;
   public hoveringSkills : boolean = false;
   public hoveringPortfolio : boolean = false;

    highlight(){
      console.log('works')
    }

    unHighlight(){
      
    }

}
