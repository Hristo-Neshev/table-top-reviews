import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRewiewsComponent } from './my-rewiews.component';

describe('MyRewiewsComponent', () => {
  let component: MyRewiewsComponent;
  let fixture: ComponentFixture<MyRewiewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRewiewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRewiewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
