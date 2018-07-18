import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingLetterComponent } from './moving-letter.component';

describe('MovingLetterComponent', () => {
  let component: MovingLetterComponent;
  let fixture: ComponentFixture<MovingLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
