import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Receta } from 'src/app/interfaces/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta-item',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.scss']
})
export class RecetaItemComponent {
  @Input() receta!: Receta;

  // Eventos hacia el padre
  @Output() onGuardar = new EventEmitter<Receta>();
  @Output() onBorrar = new EventEmitter<void>();

  constructor(private router: Router) {}

  // Navegar a detalle
  abrirDetalle() {
    this.router.navigate(['/detalle'], {
      state: { receta: this.receta }
    });
  }

  // Emitir guardar cambios al padre
  guardarClick() {
    this.onGuardar.emit(this.receta);
  }

  // Emitir borrar receta al padre
  borrarClick(event: Event) {
    event.stopPropagation(); // evita abrir detalle
    this.onBorrar.emit();
  }
}
