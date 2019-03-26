import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Agent } from '../models/Agent.model';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private url = `${environment.api_url}/agent`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.url);
  }

  get(): Observable<Agent> {
    return this.http.get<Agent>(this.url);
  }

  post(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.url, agent);
  }

  put(agent: Agent): Observable<Agent> {
    return this.http.put<Agent>(this.url, agent);
  }
}
