import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCrmComponent } from './project-crm.component';

describe('ProjectCrmComponent', () => {
  let component: ProjectCrmComponent;
  let fixture: ComponentFixture<ProjectCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
