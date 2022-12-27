import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRingOfFireComponent } from './project-ring-of-fire.component';

describe('ProjectRingOfFireComponent', () => {
  let component: ProjectRingOfFireComponent;
  let fixture: ComponentFixture<ProjectRingOfFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRingOfFireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRingOfFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
