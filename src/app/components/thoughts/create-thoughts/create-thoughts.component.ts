import { Thought } from './../../../interfaces/thought';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent {
  pensamento: Thought = {
    id: "1",
    conteudo: "aprendendo angular",
    autoria: "Dev",
    modelo: ""
  }

  constructor(
    private fb: FormBuilder
  ){}
  ngOnInit(): void {}

}
