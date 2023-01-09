import { AfterContentInit, Component,  } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']

})
export class MainPageComponent  {
  components: any;

  // ngAfterContentInit() {
  //   this.components = document.querySelectorAll('.component');
  //   this.components.forEach(component => {
  //     this.observer.observe(component)
  //   })
  // }

  // observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     this.checkComponent(entry)
  //     console.log(entry)
  //     // if (entry.isIntersecting)
  //     //   this.observer.unobserve(entry.target)
  //   })
  // }, {
  //   threshold: 0.5,
  // }
  // )

  // checkComponent(entry: any) {
  //   if (entry.target.id == 'frontPage')
  //     console.log('frontPage')
  //   this.fpInSceen();
  //   if (entry.target.id == 'portraet')
  //     console.log('portraet')
  //   this.pInSceen();
  //   if (entry.target.id == 'aboutMe')
  //     this.amInSceen();
  //   if (entry.target.id == 'skills')
  //     console.log('skills')
  //   this.sInSceen;
  //   if (entry.target.id == 'portfolioHeadline')
  //     this.phInSceen;
  //   if (entry.target.id == 'portfolioContent')
  //     this.pcInSceen;
  //   if (entry.target.id == 'contactHeadline')
  //     this.chInSceen;
  //   if (entry.target.id == 'contactContent')
  //     this.ccInSceen;
  //   if (entry.target.id == 'footer')
  //     this.fInSceen;
  // }

  // fpInSceen() {
  //   return true;
  // }

  // pInSceen() {
  //   return true;
  // }

  // amInSceen() {
  //   return true;
  // }

  // sInSceen() {
  //   return true;
  // }

  // phInSceen() {
  //   return true;
  // }

  // pcInSceen() {
  //   return true;
  // }

  // chInSceen() {
  //   return true;
  // }

  // ccInSceen() {
  //   return true;
  // }

  // fInSceen() {
  //   return true;
  // }

}

