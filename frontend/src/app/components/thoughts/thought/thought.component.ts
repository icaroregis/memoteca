import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  /* Comunicação de pai pra filho. Aqui no caso estamos recebendo dados do pai, para isso basta colocar o decorator @input na frente do método da classe. Depois podemos pegar esses dados e acessá-los através do double mustache no nosso html para mostrar os dados capturados */
  @Input() pensamento: any;

  constructor() { }
  ngOnInit(): void { }

  public thoughtCardWidth(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return "pensamento-g";
    }

    return "pensamento-p";
  }
}
