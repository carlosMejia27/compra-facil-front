import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
})
export class MenuLateralComponent {
  public sidebarItem = [
    { label: 'crear', icon: 'person', url: './crear' },
    { label: 'editar', icon: 'edit', url: './editar' },
    { label: 'eliminar', icon: 'delete', url: './eliminar' },
    { label: 'filtar', icon: 'filter_alt', url: './filter' },
  ];
}
