import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulayoutComponent } from './aulayout.component';

describe('AulayoutComponent', () => {
  let component: AulayoutComponent;
  let fixture: ComponentFixture<AulayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
