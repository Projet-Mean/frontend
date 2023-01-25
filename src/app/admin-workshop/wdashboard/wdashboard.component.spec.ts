import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdashboardComponent } from './wdashboard.component';

describe('WdashboardComponent', () => {
  let component: WdashboardComponent;
  let fixture: ComponentFixture<WdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
