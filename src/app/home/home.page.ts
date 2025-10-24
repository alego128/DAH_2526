import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RecetaItemComponent } from 'src/app/components/receta-item/receta-item.component';
import { Receta } from 'src/app/interfaces/receta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, RecetaItemComponent, CommonModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recetas: Receta[] = [
    {
      nombre: 'Spaghetti Carbonara',
      imagen: 'assets/spa.avif',
      tiempoPreparacion: 30,
      descripcion: 'Una deliciosa receta italiana con pasta, huevo, queso y panceta.',
      categoria: 'Italiana',
      dificultad: 'Media',
      ingredientes: ['Spaghetti', 'Huevos', 'Queso Pecorino', 'Panceta', 'Pimienta negra']
    },
    {
      nombre: 'Ensalada César',
      imagen: 'assets/ensalada-cesar.avif',
      tiempoPreparacion: 15,
      descripcion: 'Clásica ensalada con lechuga, pollo, crutones y aderezo César.',
      categoria: 'Ensaladas',
      dificultad: 'Fácil',
      ingredientes: ['Lechuga', 'Pollo', 'Crutones', 'Queso parmesano', 'Aderezo César']
    },
    {
      nombre: 'Tacos de Carnitas',
      imagen: 'assets/tacos-carnitas.jpg',
      tiempoPreparacion: 45,
      descripcion: 'Tacos mexicanos con carne de cerdo cocida lentamente y salsas frescas.',
      categoria: 'Mexicana',
      dificultad: 'Fácil',
      ingredientes: ['Cerdo', 'Tortillas', 'Salsa verde', 'Cebolla', 'Cilantro']
    },
    {
      nombre: 'Sushi Rolls',
      imagen: 'assets/sushi-rolls.jpg',
      tiempoPreparacion: 60,
      descripcion: 'Rollos de sushi con arroz, pescado fresco y vegetales.',
      categoria: 'Japonesa',
      dificultad: 'Difícil',
      ingredientes: ['Arroz', 'Alga nori', 'Pescado fresco', 'Aguacate', 'Pepino']
    }
  ];
}
