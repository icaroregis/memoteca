import { Thought } from 'src/app/interfaces/thought';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private api: string = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  listThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.api);
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.api, thought);
  }

  deleteThoughts(id: number): Observable<Thought> {
    const url: string = `${this.api}/${id}`;
    return this.http.delete<Thought>(url);
  }

  fetchThoughtById(id: number): Observable<Thought> {
    const url: string = `${this.api}/${id}`;
    return this.http.get<Thought>(url);
  }

  editThoughts(thought: Thought): Observable<Thought> {
    const url: string = `${this.api}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }
}
