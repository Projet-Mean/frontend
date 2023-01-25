import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelleComponent } from './personnelle.component';

describe('PersonnelleComponent', () => {
  let component: PersonnelleComponent;
  let fixture: ComponentFixture<PersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
