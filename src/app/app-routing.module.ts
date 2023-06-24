import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosFormsComponent } from './alunos-forms/alunos-forms.component';

const routes: Routes = [
  { path: 'professores', component: ProfessoresComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createAlunos', component: AlunosFormsComponent },
  { path: '', component: AlunosFormsComponent },
  { path: 'alunosDetails/:id', component: AlunosFormsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
