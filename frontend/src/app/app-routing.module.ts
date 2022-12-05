import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  /* Quando o usuário entrar na aplicação, ou seja, localhost:4200, será redirecionado para rota list-thought */
  /* full => siginifica a url inteira localhost:4200/list-thought. Prefix apenas a url raiz da aplicação: localhost:4200 */
  {path: "", redirectTo: "list-thought", pathMatch: "full"},
  {path: "create-thought", component: CreateThoughtsComponent},
  {path: "list-thought", component: ListThoughtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
