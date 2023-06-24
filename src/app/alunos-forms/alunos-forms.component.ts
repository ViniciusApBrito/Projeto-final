import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-forms',
  templateUrl: './alunos-forms.component.html',
  styleUrls: ['./alunos-forms.component.css']
})
export class AlunosFormsComponent {

  formGroupAlunos: FormGroup;

  submitted: boolean = false;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private alunosService: AlunosService, private route: ActivatedRoute, private router: Router) {

    this.formGroupAlunos = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      status: [''],
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getAlunosId(id);
  }

  getAlunosId(id: number) {
    this.alunosService.getAlunosId(id).subscribe({
      next: (data) => {
        this.formGroupAlunos.patchValue(data);
        this.isEditing = true;
      },
    });
  }
  
  save() {
    this.submitted = true;
    if (this.formGroupAlunos.valid) {
      if (this.isEditing) {
        this.alunosService.edit(this.formGroupAlunos.value).subscribe({
          next: () => {
            this.router.navigate(['alunos']);
          },
        });
      } else {
        this.alunosService.save(this.formGroupAlunos.value).subscribe({
          next: () => {
            this.router.navigate(['alunos']);
          },
        });
      }
    }
  }

  cancel() {
    this.router.navigate(['studants']);
  }
  get name(): any {
    return this.formGroupAlunos.get('name');
  }
  get email(): any {
    return this.formGroupAlunos.get('email');
  }
  get status(): any {
    return this.formGroupAlunos.get('status');
  }
  get location(): any {
    return this.formGroupAlunos.get('location');
  }
  get cpf(): any {
    return this.formGroupAlunos.get('cpf');
  }
}
