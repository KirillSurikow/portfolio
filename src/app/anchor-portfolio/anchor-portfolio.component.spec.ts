import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorPortfolioComponent } from './anchor-portfolio.component';

describe('AnchorPortfolioComponent', () => {
  let component: AnchorPortfolioComponent;
  let fixture: ComponentFixture<AnchorPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
