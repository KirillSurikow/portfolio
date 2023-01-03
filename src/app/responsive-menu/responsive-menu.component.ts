import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss']
})
export class ResponsiveMenuComponent {
 @Output() 
  burgerMenuDeactivated : EventEmitter<boolean> = new EventEmitter <boolean>;

  menuImg : string = './../../assets/img/navigation/closeMenu.png';
  @Input() transitioning : boolean = false;

  closeRMenu(){
    this.menuImg = './../../assets/img/navigation/transitionMenu.png'
    this.burgerMenuDeactivated.emit(true)
    setTimeout(() => this.menuImg = './../../assets/img/navigation/closeMenu.png', 250);
  }
}
