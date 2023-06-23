import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { professores } from './professores';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  url = 'http://localhost:3000/professores';
  constructor(private http: HttpClient) {}
  getProfessores(): Observable<professores[]> {
    return this.http.get<professores[]>(this.url);
  }
  save(professores: professores): Observable<professores> {
    return this.http.post<professores>(this.url, professores);
  }
  edit(professores: professores): Observable<professores> {
    return this.http.put<professores>(`${this.url}/${professores.id}`, professores);
  }
  delete(professores: professores): Observable<void> {
    return this.http.delete<void>(`${this.url}/${professores.id}`);
  }
}
