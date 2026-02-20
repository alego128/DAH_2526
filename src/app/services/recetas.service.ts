// src/app/services/recetas.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, catchError, throwError } from 'rxjs';
import { Receta } from '../interfaces/receta';
import { environment } from '../../environments/environment'; // <-- importamos environment

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Usamos la URL base desde environment
  private readonly url = `${environment.apiUrl}/recetas`;

  constructor(private http: HttpClient) {}

  // ---------- GET: Obtener todas las recetas ----------
  getRecetas(): Promise<Receta[]> {
    return firstValueFrom(
      this.http.get<Receta[]>(this.url).pipe(
        catchError((error) => {
          console.error('Error en getRecetas:', error);
          return throwError(() => error);
        })
      )
    );
  }

  // ---------- POST: Agregar receta ----------
  agregarReceta(receta: Receta): Promise<Receta> {
    const { id, ...recetaSinId } = receta;

    return firstValueFrom(
      this.http.post<Receta>(this.url, recetaSinId).pipe(
        catchError((error) => {
          console.error('Error en agregarReceta:', error);
          return throwError(() => error);
        })
      )
    );
  }

  // ---------- PUT: Actualizar receta ----------
  updateReceta(receta: Receta): Promise<Receta> {
    const urlEspecifica = `${this.url}/${receta.id}`;

    return firstValueFrom(
      this.http.put<Receta>(urlEspecifica, receta).pipe(
        catchError((error) => {
          console.error('Error en updateReceta:', error);
          return throwError(() => error);
        })
      )
    );
  }

  // ---------- DELETE: Borrar receta ----------
  deleteReceta(id: number): Promise<void> {
    const urlEspecifica = `${this.url}/${id}`;

    return firstValueFrom(
      this.http.delete<void>(urlEspecifica).pipe(
        catchError((error) => {
          console.error('Error en deleteReceta:', error);
          return throwError(() => error);
        })
      )
    );
  }
}
