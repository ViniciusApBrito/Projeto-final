import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  url = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<alunos[]> {
    return this.http.get<alunos[]>(this.url);
  }

  getAlunosId(id: number): Observable<alunos> {
    return this.http.get<alunos>(`${this.url}/${id}`);
  }

  save(alunos: alunos): Observable<alunos> {
    return this.http.post<alunos>(this.url, alunos);
  }

  edit(alunos: alunos): Observable<alunos> {
    return this.http.put<alunos>(`${this.url}/${alunos.id}`, alunos);
  }

  delete(alunos: alunos): Observable<void> {
    return this.http.delete<void>(`${this.url}/${alunos.id}`);
  }
}
