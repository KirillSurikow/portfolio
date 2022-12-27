import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  aboutMeHover: boolean = false;
  skillsHover: boolean = false;
  portfolioHover: boolean = false;

  highlight(link: string) {
    if (link == 'aboutMeHover')
      this.aboutMeHover = true;
      console.log(this.aboutMeHover);
    if (link == 'skillsHover')
      this.skillsHover = true;
      console.log(this.skillsHover);
    if (link == 'portfolioHover')
      this.portfolioHover = true;
      console.log();
  }

  unHighlight(link: string) {
    if (link == 'aboutMeHover')
      this.aboutMeHover = false;
      console.log(this.aboutMeHover);
    if (link == 'skillsHover')
      this.skillsHover = false;
      console.log(this.skillsHover);
    if (link == 'portfolioHover')
      this.portfolioHover = false;
      console.log(this.portfolioHover);
  }

}
