import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealAboutUsComponent } from './real-about-us.component';

describe('RealAboutUsComponent', () => {
  let component: RealAboutUsComponent;
  let fixture: ComponentFixture<RealAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
