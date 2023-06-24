import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alunos } from '../alunos';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  Alunos: alunos[] = [];
  isEditing: boolean = false;
  constructor(private alunosService: AlunosService, private router: Router) { }

  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos() {
    this.alunosService.getAlunos().subscribe({
      next: (data) => (this.Alunos = data),
    })
  }

  edit(aluno: alunos) {
    this.router.navigate(['alunosDetails', aluno.id]);
  }

  delete(Alunos: alunos) {
    this.alunosService.delete(Alunos).subscribe({
      next: () => this.loadAlunos(),
    })
  }

  onCleanEvent() {
    this.isEditing = false;
  }

  create() {
    this.router.navigate(['createAlunos']);
  }
}
