import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { professores } from '../professores';

@Component({
  selector: 'app-professores-forms',
  templateUrl: './professores-forms.component.html',
  styleUrls: ['./professores-forms.component.css']
})
export class ProfessoresFormsComponent implements OnChanges {
  @Input()
  Professores: professores = {} as professores;

  @Output()
  saveEvent = new EventEmitter<professores>();

  @Output()
  cleanEvent = new EventEmitter<void>();
  formGroupProfessores: FormGroup;
  submitted: boolean = false;
  isEditing: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formGroupProfessores = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      location: ['', [Validators.required]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupProfessores.setValue(this.Professores);
  }

  save() {
    this.submitted = true;
    if (this.formGroupProfessores.valid) {
      this.saveEvent.emit(this.formGroupProfessores.value);
      this.formGroupProfessores.reset();
      this.submitted = false;
    }
  }
  clean() {
    this.cleanEvent.emit();
    this.formGroupProfessores.reset();
    this.submitted = false;
  }
  get name(): any {
    return this.formGroupProfessores.get('name');
  }
  get email(): any {
    return this.formGroupProfessores.get('email');
  }
  get cpf(): any {
    return this.formGroupProfessores.get('cpf');
  }
  get location(): any {
    return this.formGroupProfessores.get('location');
  }

}
