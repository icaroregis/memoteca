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
    },
    {
      id: "2",
      conteudo: "Alegre-se a terra que era deserta e intransitável, exulte a solidão e floresça como um lírio. 2Germine e exulte de alegria e louvores. Foi-lhe dada a glória do Líbano, o esplendor do Carmelo e de Saron; seus habitantes verão a glória do Senhor, a majestade do nosso Deus. Fortalecei as mãos enfraquecidas e firmai os joelhos debilitados. Dizei às pessoas deprimidas: “Criai ânimo, não tenhais medo! Vede, é vosso Deus, é a vingança que vem, é a recompensa de Deus; é ele que vem para vos salvar”. Então se abrirão os olhos dos cegos e se descerrarão os ouvidos dos surdos. O coxo saltará como um cervo e se desatará a língua dos mudos, assim como brotarão águas no deserto e jorrarão torrentes no ermo. A terra árida se transformará em lago, e a região sedenta, em fontes d’água; nas cavernas onde viviam dragões crescerá o caniço e o junco.",
      autoria: "Isaías 35,1-10",
      modelo: "modelo3"
    }
  ];

  constructor() { }
  ngOnInit(): void {
  }

}
