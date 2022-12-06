import { Component } from '@angular/core';
import { Thought } from 'src/app/interfaces/thought';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css'],
})
export class EditThoughtsComponent {
  public thought: Thought | any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ThoughtService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getById();
  }

  public fg: FormGroup = this.fb.group({
    pensamento: [null, Validators.required],
    autoria: [null, Validators.required],
    cardType: '',
  });

  getById() {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    this.service.fetchThoughtById(Number(id)).subscribe({
      next: (response) => {
        this.thought = response;
      },
      error: (err: any) => {
        throw err;
      },
    });
  }

  public editThought() {
    this.service.editThoughts(this.thought).subscribe({
      next: () => {
        this.router.navigate(['/list-thought']);
      },
      error: (err: any) => {
        throw err;
      },
    });
  }

  cancelOperation() {
    this.router.navigate(['/list-thought']);
  }
}
