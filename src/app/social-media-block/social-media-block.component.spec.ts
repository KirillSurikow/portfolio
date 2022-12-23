import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaBlockComponent } from './social-media-block.component';

describe('SocialMediaBlockComponent', () => {
  let component: SocialMediaBlockComponent;
  let fixture: ComponentFixture<SocialMediaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
