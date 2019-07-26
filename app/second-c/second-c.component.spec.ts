import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCComponent } from './second-c.component';

describe('SecondCComponent', () => {
  let component: SecondCComponent;
  let fixture: ComponentFixture<SecondCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
