import { ThoughtService } from './../thought.service';
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
  constructor(private fb: FormBuilder, private router: Router, private service: ThoughtService){}
  ngOnInit(): void { }

  public fg: FormGroup = this.fb.group({
    pensamento: [null, Validators.required],
    autoria: [null, Validators.required],
    cardType: ["modelo1"]
  })

  createThought(e: any) {
    e.preventDefault();

    const objeto: Thought = {
      conteudo: this.fg.get("pensamento")?.value,
      autoria: this.fg.get("autoria")?.value,
      modelo: this.fg.get("cardType")?.value
    }

    if(objeto) {
      this.service.createThought(objeto).subscribe(() => {
        this.router.navigate(["/list-thought"]);
      })
    }
  }

  cancelThought() {
    this.router.navigate(["/list-thought"]);
  }
}
