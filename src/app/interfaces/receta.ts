export interface Receta {
  id: number;
  nombre: string;
  imagen?: string;
  tiempoPreparacion: number;
  descripcion?: string;
  categoria: string;
  dificultad?: 'Fácil' | 'Media' | 'Difícil';
  ingredientes: string[];
}
