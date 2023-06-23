import { Component } from '@angular/core';
import { professores } from '../professores';
import { ProfessoresService } from '../professores.service';
@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent {
  Professores: professores[] = [];

  professores: professores = {} as professores;
  isEditing: boolean = false;

  constructor(private ProfessoresService: ProfessoresService) { }

  ngOnInit(): void {
    this.loadProfessores();
  }
  
  loadProfessores() {
    this.ProfessoresService.getProfessores().subscribe({
      next: (data) => (this.Professores = data),
    });
  }
  onCleanEvent() {
    this.isEditing = false;
  }

  onSaveEvent(professor: professores) {
    if (this.isEditing) {
      this.ProfessoresService.edit(professor).subscribe({
        next: data => {
          const index = this.Professores.findIndex(p => p.id === data.id);
          if (index !== -1) {
            this.Professores[index] = data;
          }
        }
      });
    } else {
      this.ProfessoresService.save(professor).subscribe({
        next: data => {
          this.Professores.push(data);
        }
      });
    }
  }
  
  

  edit(professores: professores) {
    this.professores = professores;
    this.isEditing = true;
  }
  

  delete(professor: professores) {
    this.ProfessoresService.delete(professor).subscribe({
      next: () => this.loadProfessores()
    });
  }
  

}

