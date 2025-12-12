import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Receta } from 'src/app/interfaces/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta-item',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.scss']
})
export class RecetaItemComponent {
  @Input() receta!: Receta;

  constructor(private router: Router) {}

  abrirDetalle() {
  this.router.navigate(['/detalle'], {
    state: { receta: this.receta }
    });
  }
}