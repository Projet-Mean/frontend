import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdasboardComponent } from './fdasboard.component';

describe('FdasboardComponent', () => {
  let component: FdasboardComponent;
  let fixture: ComponentFixture<FdasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdasboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
