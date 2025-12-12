// Contenido de: src/app/services/task.service.ts

import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta'; // Importamos nuestra interfaz

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // ¡La lógica de negocio vive aquí ahora!
  // Hacemos el array 'private' para que los componentes
  // no pueden modificarlo directamente, solo a través de nuestros métodos.
  private listaDeRecetas: Receta[] = [
    {
      id : 1,
      nombre: 'Spaghetti Carbonara',
      imagen: 'assets/spa.avif',
      tiempoPreparacion: 30,
      descripcion: 'Una deliciosa receta italiana con pasta, huevo, queso y panceta.',
      categoria: 'Italiana',
      dificultad: 'Media',
      ingredientes: ['Spaghetti', 'Huevos', 'Queso Pecorino', 'Panceta', 'Pimienta negra']
    },
    {
      id : 2,
      nombre: 'Ensalada César',
      imagen: 'assets/Cesar.jpg',
      tiempoPreparacion: 15,
      descripcion: 'Clásica ensalada con lechuga, pollo, crutones y aderezo César.',
      categoria: 'Ensaladas',
      dificultad: 'Fácil',
      ingredientes: ['Lechuga', 'Pollo', 'Crutones', 'Queso parmesano', 'Aderezo César']
    },
    {
      id : 3,
      nombre: 'Tacos de Carnitas',
      imagen: 'assets/tacos-carnitas.jpg',
      tiempoPreparacion: 45,
      descripcion: 'Tacos mexicanos con carne de cerdo cocida lentamente y salsas frescas.',
      categoria: 'Mexicana',
      dificultad: 'Fácil',
      ingredientes: ['Cerdo', 'Tortillas', 'Salsa verde', 'Cebolla', 'Cilantro']
    },
    {
      id : 4,
      nombre: 'Sushi Rolls',
      imagen: 'assets/sushi-rolls.jpg',
      tiempoPreparacion: 60,
      descripcion: 'Rollos de sushi con arroz, pescado fresco y vegetales.',
      categoria: 'Japonesa',
      dificultad: 'Difícil',
      ingredientes: ['Arroz', 'Alga nori', 'Pescado fresco', 'Aguacate', 'Pepino']
    },
    {
      id : 5,
      nombre: 'Paella Valenciana',
      imagen: 'assets/paella.jpg',
      tiempoPreparacion: 70,
      descripcion: 'Arroz español con mariscos, pollo y verduras, cocido con azafrán.',
      categoria: 'Española',
      dificultad: 'Media',
      ingredientes: ['Arroz', 'Mariscos', 'Pollo', 'Pimiento', 'Azafrán']
    },
    {
      id : 6,
      nombre: 'Hamburguesa Clásica',
      imagen: 'assets/res.jpg',
      tiempoPreparacion: 25,
      descripcion: 'Hamburguesa jugosa con carne de res, queso, lechuga y tomate.',
      categoria: 'Americana',
      dificultad: 'Fácil',
      ingredientes: ['Pan de hamburguesa', 'Carne de res', 'Queso cheddar', 'Lechuga', 'Tomate']
    },
    {
      id : 7,
      nombre: 'Curry de Pollo',
      imagen: 'assets/crrrr.jpg',
      tiempoPreparacion: 50,
      descripcion: 'Pollo cocinado con especias y leche de coco en una salsa cremosa.',
      categoria: 'India',
      dificultad: 'Media',
      ingredientes: ['Pollo', 'Curry en polvo', 'Leche de coco', 'Cebolla', 'Jengibre']
    },
    {
      id : 8,
      nombre: 'Ratatouille',
      imagen: 'assets/rata.jpg',
      tiempoPreparacion: 40,
      descripcion: 'Guiso francés de verduras como berenjena, calabacín y tomate.',
      categoria: 'Francesa',
      dificultad: 'Media',
      ingredientes: ['Berenjena', 'Calabacín', 'Tomate', 'Pimiento', 'Aceite de oliva']
    },
    {
      id : 9,
      nombre: 'Pad Thai',
      imagen: 'assets/pad.jpg',
      tiempoPreparacion: 35,
      descripcion: 'Fideos de arroz salteados con camarones, tofu, huevo y salsa de tamarindo.',
      categoria: 'Tailandesa',
      dificultad: 'Media',
      ingredientes: ['Fideos de arroz', 'Camarones', 'Tofu', 'Huevo', 'Salsa de tamarindo']
    },
    {
      id : 10,
      nombre: 'Brownie de Chocolate',
      imagen: 'assets/brownie.jpg',
      tiempoPreparacion: 30,
      descripcion: 'Postre esponjoso y húmedo con intenso sabor a chocolate.',
      categoria: 'Postres',
      dificultad: 'Fácil',
      ingredientes: ['Chocolate', 'Harina', 'Mantequilla', 'Azúcar', 'Huevos']
    },
    {
      id : 11,
      nombre: 'Gazpacho Andaluz',
      imagen: 'assets/gazpa.jpg',
      tiempoPreparacion: 20,
      descripcion: 'Sopa fría española hecha con tomate, pepino y pimiento.',
      categoria: 'Española',
      dificultad: 'Fácil',
      ingredientes: ['Tomate', 'Pepino', 'Pimiento', 'Ajo', 'Aceite de oliva']
    },
    {
      id : 12,
      nombre: 'Pancakes Americanos',
      imagen: 'assets/pancakes.jpg',
      tiempoPreparacion: 20,
      descripcion: 'Tortitas esponjosas ideales para el desayuno, servidas con miel o jarabe.',
      categoria: 'Desayunos',
      dificultad: 'Fácil',
      ingredientes: ['Harina', 'Leche', 'Huevos', 'Mantequilla', 'Polvo de hornear']
    },
    {
      id : 13,
      nombre: 'Lasaña de Carne',
      imagen: 'assets/lasagna.jpg',
      tiempoPreparacion: 75,
      descripcion: 'Capas de pasta, carne, salsa de tomate y queso gratinado.',
      categoria: 'Italiana',
      dificultad: 'Media',
      ingredientes: ['Pasta para lasaña', 'Carne molida', 'Tomate', 'Queso', 'Bechamel']
    },
    {
      id : 14,
      nombre: 'Falafel con Hummus',
      imagen: 'assets/hum.jpg',
      tiempoPreparacion: 40,
      descripcion: 'Bolitas de garbanzo fritas servidas con hummus y ensalada.',
      categoria: 'Vegetariana',
      dificultad: 'Media',
      ingredientes: ['Garbanzos', 'Cebolla', 'Perejil', 'Comino', 'Aceite de oliva']
    },
    {
      id : 15,
      nombre: 'Pollo al horno con papas',
      imagen: 'assets/pollo.jpg',
      tiempoPreparacion: 60,
      descripcion: 'Pollo asado al horno con papas y hierbas aromáticas.',
      categoria: 'Casera',
      dificultad: 'Fácil',
      ingredientes: ['Pollo', 'Papas', 'Romero', 'Ajo', 'Aceite de oliva']
    },
    {
      id : 16,
      nombre: 'Ceviche Peruano',
      imagen: 'assets/ceviche.jpg',
      tiempoPreparacion: 25,
      descripcion: 'Pescado fresco marinado en limón con cebolla y ají.',
      categoria: 'Peruana',
      dificultad: 'Media',
      ingredientes: ['Pescado blanco', 'Limón', 'Cebolla roja', 'Ají', 'Cilantro']
    },
    {
      id : 17,
      nombre: 'Crepes Dulces',
      imagen: 'assets/crepes.jpg',
      tiempoPreparacion: 25,
      descripcion: 'Deliciosos crepes rellenos de chocolate, fruta o crema.',
      categoria: 'Postres',
      dificultad: 'Fácil',
      ingredientes: ['Harina', 'Leche', 'Huevos', 'Mantequilla', 'Azúcar']
    },
    {
      id : 18,
      nombre: 'Pizza Margarita',
      imagen: 'assets/pizza.webp',
      tiempoPreparacion: 30,
      descripcion: 'Clásica pizza italiana con tomate, mozzarella y albahaca fresca.',
      categoria: 'Italiana',
      dificultad: 'Fácil',
      ingredientes: ['Masa de pizza', 'Tomate', 'Queso mozzarella', 'Albahaca', 'Aceite de oliva']
    }
  ];

  constructor() { }

  /**
   * Método público para obtener todas las tareas.
   * Devuelve una copia del array para proteger el original.
   */
  getRecetas(): Receta[] {
    return [...this.listaDeRecetas]; // Usamos '...' (spread syntax) para devolver una copia
  }

  /**
   * Método público para añadir una nueva tarea.
   * Recibe el título de la nueva tarea como argumento.
   * @param nombre El nombre de la nueva receta.
   */
  agregarReceta(nombre: string) {
    // Verificamos que el título no esté vacío
    if (nombre.trim().length === 0) {
      return; // No hacemos nada si está vacío
    }

    // Creamos la nueva tarea
    const nuevaTarea: Receta = {
      id : 0,
    nombre: '',
    imagen: '',
    tiempoPreparacion: 0,
    descripcion: '',
    categoria: '',
    dificultad: '',
    ingredientes: []
    };

    // Añadimos la nueva tarea al principio de nuestro array
    this.listaDeRecetas.unshift(nuevaTarea);
  }
}