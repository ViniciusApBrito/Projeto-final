import { Component } from '@angular/core';
import { alunos } from '../alunos';
import { AlunosService } from '../alunos.service';
import { professores } from '../professores';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  alunos: alunos[] = [];
  Professores: professores[] = [];

  constructor(private alunosService: AlunosService, private professoresService: ProfessoresService) { }

  ngOnInit(): void {
    this.loadAlunos();
    this.loadProfessores();
  }
  loadAlunos() {
    this.alunosService.getAlunos().subscribe({
      next: (data) => (this.alunos = data),
    });
  }

loadProfessores() {
    this.professoresService.getProfessores().subscribe({
      next: (data) => (this.Professores = data),
    });
  }
}