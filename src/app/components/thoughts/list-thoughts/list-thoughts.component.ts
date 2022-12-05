import { Component } from '@angular/core';
import { Thought } from 'src/app/interfaces/thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent {
  public listOfThought: Thought[] = [
    {
      id: "0",
      conteudo: "Eu amo Jesus Cristo!!",
      autoria: "Ícaro Régis",
      modelo: "modelo1"
    },
    {
      id: "1",
      conteudo: "Eu amo a Vírgem Maria minha mãe e minha rainha!",
      autoria: "Ícaro Régis",
      modelo: "modelo3"
    }
  ];

  constructor() { }
  ngOnInit(): void {
  }

}
