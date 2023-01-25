import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlayoutComponent } from './wlayout.component';

describe('WlayoutComponent', () => {
  let component: WlayoutComponent;
  let fixture: ComponentFixture<WlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
