import { ThoughtService } from './../thought.service';
import { Thought } from 'src/app/interfaces/thought';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  public listOfThought: Thought[] = [];

  constructor(private service: ThoughtService) {}
  /* assim que o componente é carregado, semelhante ao useEffect */
  ngOnInit(): void {
    this.getThoughts();
  }

  getThoughts() {
    this.service.listThoughts().subscribe({
      next: (response: any) => {
        if (response) {
          this.listOfThought = response;
        }
      },
      error: (error: any) => {
        throw error;
      },
    });
  }
}
