import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOpeningComponent } from './edit-opening.component';

describe('EditOpeningComponent', () => {
  let component: EditOpeningComponent;
  let fixture: ComponentFixture<EditOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
