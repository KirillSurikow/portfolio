import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  aboutMeHover : boolean = false;
  skillsHover : boolean = false;
  portfolioHover : boolean = false;

    highlight(link : any){
       link = true;
       console.log(link);
    }

    unHighlight(link : any){
      link = false;
      console.log(link);
    }

}
