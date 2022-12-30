import { Component } from '@angular/core';
import { ResponsiveMenuComponent } from '../responsive-menu/responsive-menu.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  aboutMeHover: boolean = false;
  skillsHover: boolean = false;
  portfolioHover: boolean = false;

 constructor(public dialog: MatDialog){

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


  openRMenu():void{
    const responsiveMenu = this.dialog.open(ResponsiveMenuComponent);
  }

}
