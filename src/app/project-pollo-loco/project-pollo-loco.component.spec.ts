import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPolloLocoComponent } from './project-pollo-loco.component';

describe('ProjectPolloLocoComponent', () => {
  let component: ProjectPolloLocoComponent;
  let fixture: ComponentFixture<ProjectPolloLocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPolloLocoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPolloLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
