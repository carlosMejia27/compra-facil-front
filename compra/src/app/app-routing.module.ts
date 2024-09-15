import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './share/page/error/error-404-page.component';

//localhost:420/
const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () =>
      import('./clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
