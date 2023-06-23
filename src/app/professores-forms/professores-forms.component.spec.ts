import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresFormsComponent } from './professores-forms.component';

describe('ProfessoresFormsComponent', () => {
  let component: ProfessoresFormsComponent;
  let fixture: ComponentFixture<ProfessoresFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessoresFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessoresFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
