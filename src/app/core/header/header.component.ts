import { Component } from '@angular/core';
import { MenuOption } from 'src/types/menu.options';

@Component({
  selector: 'isd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string;

  menuOptions: MenuOption[];
  constructor() {
    this.title = 'Learning Angular';
    this.menuOptions = [
      { path: '/home', label: 'Inicio' },
      { path: '/todo', label: 'ToDo' },
      { path: '/about', label: 'Acerca de' },
    ];
  }
}
