import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {  Observable } from 'rxjs';
import { Thought } from 'src/app/interfaces/thought';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private api: string = "http://localhost:3000/thoughts"

  constructor(private http: HttpClient ) { }

  listThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.api)
  }

  createThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.api, thought)
  }

}
