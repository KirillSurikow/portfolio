import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraetComponent } from './portraet.component';

describe('PortraetComponent', () => {
  let component: PortraetComponent;
  let fixture: ComponentFixture<PortraetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortraetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortraetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
