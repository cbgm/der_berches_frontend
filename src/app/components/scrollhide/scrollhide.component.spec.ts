import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollhideComponent } from './scrollhide.component';

describe('ScrollhideComponent', () => {
  let component: ScrollhideComponent;
  let fixture: ComponentFixture<ScrollhideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollhideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollhideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
