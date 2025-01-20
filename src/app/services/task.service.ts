import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefas';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }
  getTasks():Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.apiUrl)
  }
}
