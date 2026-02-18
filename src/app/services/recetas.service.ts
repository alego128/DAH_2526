// src/app/services/recetas.service.ts
import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _url = 'http://localhost:3000/recetas';

  constructor(private http: HttpClient) {}

  // ✅ Obtener recetas desde el servidor
  getRecetas(): Promise<Receta[]> {
    return firstValueFrom(this.http.get<Receta[]>(this._url));
  }

  // ✅ Agregar receta al servidor
  agregarReceta(receta: Receta): Promise<Receta> {
    const { id, ...recetaSinId } = receta;
    return firstValueFrom(this.http.post<Receta>(this._url, recetaSinId));
  }

  // 🟢 Actualizar receta (PUT /recetas/:id)
  updateReceta(receta: Receta): Promise<Receta> {
    const urlEspecifica = `${this._url}/${receta.id}`;
    return firstValueFrom(this.http.put<Receta>(urlEspecifica, receta));
  }

  // 🔴 Borrar receta (DELETE /recetas/:id)
  deleteReceta(id: number): Promise<void> {
    const urlEspecifica = `${this._url}/${id}`;
    return firstValueFrom(this.http.delete<void>(urlEspecifica));
  }
}
