export interface Receta {
  id : number;
  nombre: string;
  imagen: string;
  tiempoPreparacion: number;
  descripcion: string;
  categoria: string;
  dificultad: string;
  ingredientes: string[]; 
}
