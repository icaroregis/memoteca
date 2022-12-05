import { Thought } from './../../../interfaces/thought';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent {
  cardTemplates : Thought[] = [];
  pensamento: Thought = {
    id: "1",
    conteudo: "aprendendo angular",
    autoria: "Dev",
    modelo: ""
  }

  constructor(private fb: FormBuilder, private router: Router){}
  ngOnInit(): void { }

  public fg: FormGroup = this.fb.group({
    pensamento: [null, Validators.required],
    autoria: [null, Validators.required],
    cardType: ["modelo1"]
  })

  createThought() {
    console.log("pensamento criado")
    console.log(this.fg.value)
  }

  cancelThought() {
    this.router.navigate(["/list-thought"])
  }
}
