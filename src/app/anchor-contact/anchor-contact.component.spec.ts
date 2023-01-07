import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorContactComponent } from './anchor-contact.component';

describe('AnchorContactComponent', () => {
  let component: AnchorContactComponent;
  let fixture: ComponentFixture<AnchorContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
