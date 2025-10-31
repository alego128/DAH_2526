import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecetaItemComponent } from 'src/app/components/receta-item/receta-item.component';
import { Receta } from 'src/app/interfaces/receta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RecetaItemComponent],
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
      imagen: 'assets/Cesar.jpg',
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
    },
    {
      nombre: 'Paella Valenciana',
      imagen: 'assets/paella.jpg',
      tiempoPreparacion: 70,
      descripcion: 'Arroz español con mariscos, pollo y verduras, cocido con azafrán.',
      categoria: 'Española',
      dificultad: 'Media',
      ingredientes: ['Arroz', 'Mariscos', 'Pollo', 'Pimiento', 'Azafrán']
    },
    {
      nombre: 'Hamburguesa Clásica',
      imagen: 'assets/res.jpg',
      tiempoPreparacion: 25,
      descripcion: 'Hamburguesa jugosa con carne de res, queso, lechuga y tomate.',
      categoria: 'Americana',
      dificultad: 'Fácil',
      ingredientes: ['Pan de hamburguesa', 'Carne de res', 'Queso cheddar', 'Lechuga', 'Tomate']
    },
    {
      nombre: 'Curry de Pollo',
      imagen: 'assets/crrrr.jpg',
      tiempoPreparacion: 50,
      descripcion: 'Pollo cocinado con especias y leche de coco en una salsa cremosa.',
      categoria: 'India',
      dificultad: 'Media',
      ingredientes: ['Pollo', 'Curry en polvo', 'Leche de coco', 'Cebolla', 'Jengibre']
    },
    {
      nombre: 'Ratatouille',
      imagen: 'assets/rata.jpg',
      tiempoPreparacion: 40,
      descripcion: 'Guiso francés de verduras como berenjena, calabacín y tomate.',
      categoria: 'Francesa',
      dificultad: 'Media',
      ingredientes: ['Berenjena', 'Calabacín', 'Tomate', 'Pimiento', 'Aceite de oliva']
    },
    {
      nombre: 'Pad Thai',
      imagen: 'assets/pad.jpg',
      tiempoPreparacion: 35,
      descripcion: 'Fideos de arroz salteados con camarones, tofu, huevo y salsa de tamarindo.',
      categoria: 'Tailandesa',
      dificultad: 'Media',
      ingredientes: ['Fideos de arroz', 'Camarones', 'Tofu', 'Huevo', 'Salsa de tamarindo']
    },
    {
      nombre: 'Brownie de Chocolate',
      imagen: 'assets/brownie.jpg',
      tiempoPreparacion: 30,
      descripcion: 'Postre esponjoso y húmedo con intenso sabor a chocolate.',
      categoria: 'Postres',
      dificultad: 'Fácil',
      ingredientes: ['Chocolate', 'Harina', 'Mantequilla', 'Azúcar', 'Huevos']
    },
    {
      nombre: 'Gazpacho Andaluz',
      imagen: 'assets/gazpa.jpg',
      tiempoPreparacion: 20,
      descripcion: 'Sopa fría española hecha con tomate, pepino y pimiento.',
      categoria: 'Española',
      dificultad: 'Fácil',
      ingredientes: ['Tomate', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de oliva']
    },
    {
      nombre: 'Pancakes Americanos',
      imagen: 'assets/pancakes.jpg',
      tiempoPreparacion: 20,
      descripcion: 'Tortitas esponjosas ideales para el desayuno, servidas con miel o jarabe.',
      categoria: 'Desayunos',
      dificultad: 'Fácil',
      ingredientes: ['Harina', 'Leche', 'Huevos', 'Mantequilla', 'Polvo de hornear']
    },
    {
      nombre: 'Lasaña de Carne',
      imagen: 'assets/lasagna.jpg',
      tiempoPreparacion: 75,
      descripcion: 'Capas de pasta, carne, salsa de tomate y queso gratinado.',
      categoria: 'Italiana',
      dificultad: 'Media',
      ingredientes: ['Pasta para lasaña', 'Carne molida', 'Tomate', 'Queso', 'Bechamel']
    },
    {
      nombre: 'Falafel con Hummus',
      imagen: 'assets/hum.jpg',
      tiempoPreparacion: 40,
      descripcion: 'Bolitas de garbanzo fritas servidas con hummus y ensalada.',
      categoria: 'Vegetariana',
      dificultad: 'Media',
      ingredientes: ['Garbanzos', 'Cebolla', 'Perejil', 'Comino', 'Aceite de oliva']
    },
    {
      nombre: 'Pollo al horno con papas',
      imagen: 'assets/pollo.jpg',
      tiempoPreparacion: 60,
      descripcion: 'Pollo asado al horno con papas y hierbas aromáticas.',
      categoria: 'Casera',
      dificultad: 'Fácil',
      ingredientes: ['Pollo', 'Papas', 'Romero', 'Ajo', 'Aceite de oliva']
    },
    {
      nombre: 'Ceviche Peruano',
      imagen: 'assets/ceviche.jpg',
      tiempoPreparacion: 25,
      descripcion: 'Pescado fresco marinado en limón con cebolla y ají.',
      categoria: 'Peruana',
      dificultad: 'Media',
      ingredientes: ['Pescado blanco', 'Limón', 'Cebolla roja', 'Ají', 'Cilantro']
    },
    {
      nombre: 'Crepes Dulces',
      imagen: 'assets/crepes.jpg',
      tiempoPreparacion: 25,
      descripcion: 'Deliciosos crepes rellenos de chocolate, fruta o crema.',
      categoria: 'Postres',
      dificultad: 'Fácil',
      ingredientes: ['Harina', 'Leche', 'Huevos', 'Mantequilla', 'Azúcar']
    },
    {
      nombre: 'Pizza Margarita',
      imagen: 'assets/pizza.webp',
      tiempoPreparacion: 30,
      descripcion: 'Clásica pizza italiana con tomate, mozzarella y albahaca fresca.',
      categoria: 'Italiana',
      dificultad: 'Fácil',
      ingredientes: ['Masa de pizza', 'Tomate', 'Queso mozzarella', 'Albahaca', 'Aceite de oliva']
    }
  ];

  // Objeto enlazado al formulario
  nuevaReceta: Receta = {
    nombre: '',
    imagen: '',
    tiempoPreparacion: 0,
    descripcion: '',
    categoria: '',
    dificultad: '',
    ingredientes: []
  };

  // Variable para mostrar/ocultar formulario
  mostrarFormulario: boolean = false;

  constructor() { }

  // Alternar visibilidad del formulario
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // Método para agregar receta desde el formulario
  agregarReceta() {
    if (this.nuevaReceta.nombre.trim().length === 0) return;

    const recetaParaAnadir: Receta = {
      ...this.nuevaReceta,
      ingredientes: this.nuevaReceta.ingredientes!.length
        ? this.nuevaReceta.ingredientes!
        : ['Ingrediente genérico']
    };

    this.recetas.unshift(recetaParaAnadir);

    // Resetear el formulario
    this.nuevaReceta = {
      nombre: '',
      imagen: '',
      tiempoPreparacion: 0,
      descripcion: '',
      categoria: '',
      dificultad: '',
      ingredientes: []
    };

    // Ocultar formulario después de agregar receta
    this.mostrarFormulario = false;
  }
}