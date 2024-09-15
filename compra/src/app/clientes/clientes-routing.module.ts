import { CrearPaginaClienteComponent } from './page/crear/crear-pagina-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuLateralComponent } from './page/menu-lateral/menu-lateral.component';
import { EditarPaginaClienteComponent } from './page/editar/editar-pagina-cliente.component';
import { EliminarPaginaClienteComponent } from './page/eliminar/eliminar-pagina-cliente.component';
import { FilterPaginaClienteComponent } from './page/filter/filter-pagina-cliente.component';

//localhost:4200/clientes
const routes: Routes = [
  {
    path: '',
    component: MenuLateralComponent,
    children: [
      { path: 'crear', component: CrearPaginaClienteComponent },
      { path: 'editar/:id', component: EditarPaginaClienteComponent },
      { path: 'eliminar', component: EliminarPaginaClienteComponent },
      { path: 'filter', component: FilterPaginaClienteComponent },
      { path: ':id', component: FilterPaginaClienteComponent },
      { path: '**', redirectTo: 'filter' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
