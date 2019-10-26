import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLandingContentComponent } from './module-landing-content.component';

describe('BookLandingContentComponent', () => {
  let component: ModuleLandingContentComponent;
  let fixture: ComponentFixture<ModuleLandingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleLandingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleLandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
