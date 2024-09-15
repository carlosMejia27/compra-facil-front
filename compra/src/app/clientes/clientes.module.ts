import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './page/menu-lateral/menu-lateral.component';
import { CrearPaginaClienteComponent } from './page/crear/crear-pagina-cliente.component';
import { EditarPaginaClienteComponent } from './page/editar/editar-pagina-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { FilterPaginaClienteComponent } from './page/filter/filter-pagina-cliente.component';
import { EliminarPaginaClienteComponent } from './page/eliminar/eliminar-pagina-cliente.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MenuLateralComponent,
    CrearPaginaClienteComponent,
    EditarPaginaClienteComponent,
    FilterPaginaClienteComponent,
    EliminarPaginaClienteComponent,
  ],
  imports: [CommonModule, ClientesRoutingModule, MaterialModule],
})
export class ClientesModule {}
