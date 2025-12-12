import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  constructor(private router: Router) {}

  irAjustes() {
    // navega a la página de ajustes
    this.router.navigate(['/ajustes']); // reemplaza con la ruta correcta
  }
}
