import { ThoughtService } from './../thought.service';
import { Component } from '@angular/core';
import { Thought } from 'src/app/interfaces/thought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thoughts',
  templateUrl: './delete-thoughts.component.html',
  styleUrls: ['./delete-thoughts.component.css'],
})
export class DeleteThoughtsComponent {
  public thought: Thought | any;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBuId();
  }

  getBuId() {
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

  deleteThought() {
    if (this.thought.id) {
      this.service.deleteThoughts(this.thought.id).subscribe({
        next: () => {
          this.router.navigate(['/list-thought']);
        },
        error: (err: any) => {
          throw err;
        },
      });
    }
  }

  cancelOperation() {
    this.router.navigate(['/list-thought']);
  }
}
