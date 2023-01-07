import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-headline',
  templateUrl: './portfolio-headline.component.html',
  styleUrls: ['./portfolio-headline.component.scss']
})
export class PortfolioHeadlineComponent {
  @Input() visible: boolean = false;
}
