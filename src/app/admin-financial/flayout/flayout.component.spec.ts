import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlayoutComponent } from './flayout.component';

describe('FlayoutComponent', () => {
  let component: FlayoutComponent;
  let fixture: ComponentFixture<FlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
