import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentGraphicsComponent } from './current-graphics.component';

describe('CurrentGraphicsComponent', () => {
  let component: CurrentGraphicsComponent;
  let fixture: ComponentFixture<CurrentGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
