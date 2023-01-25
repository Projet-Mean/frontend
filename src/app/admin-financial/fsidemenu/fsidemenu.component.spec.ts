import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsidemenuComponent } from './fsidemenu.component';

describe('FsidemenuComponent', () => {
  let component: FsidemenuComponent;
  let fixture: ComponentFixture<FsidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsidemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
