import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecetaItemComponent } from 'src/app/components/receta-item/receta-item.component';
import { Receta } from 'src/app/interfaces/receta';
import { RouterModule, Router } from '@angular/router'; 
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { TaskService } from '../services/recetas.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetaItemComponent,
    RouterModule,
    AppHeaderComponent
  ],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cargando = true;
  mostrarFormulario = false;

  recetas: Receta[] = [];

  nuevaReceta: Receta = {
    id: 0,
    nombre: '',
    imagen: '',
    tiempoPreparacion: 0,
    descripcion: '',
    categoria: '',
    dificultad: 'Fácil',
    ingredientes: []
  };

  constructor(
    private alertController: AlertController,
    private router: Router,
    private taskService: TaskService
  ) {
    addIcons({ settingsOutline });
    setTimeout(() => {
      this.cargando = false;
    }, 2000);
  }

  // ---------- Skeletons ----------
  get skeletons() {
    return Array(this.recetas.length || 12);
  }

  // ---------- Mostrar/ocultar formulario ----------
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // ---------- Cargar recetas ----------
  async ngOnInit() {
    await this.cargarRecetas();
  }

  async cargarRecetas() {
    try {
      this.recetas = await this.taskService.getRecetas();
    } catch (error) {
      console.error('Error cargando recetas:', error);
    }
  }

  // ---------- Alert ----------
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: '¡Receta añadida!',
      message: 'La receta se ha agregado correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }

  // ---------- Agregar receta ----------
  async agregarReceta() {
    if (!this.nuevaReceta.nombre.trim()) return;

    const recetaParaAnadir: Receta = {
      ...this.nuevaReceta,
      ingredientes: this.nuevaReceta.ingredientes.length
        ? this.nuevaReceta.ingredientes
        : ['Ingrediente genérico']
    };

    try {
      await this.taskService.agregarReceta(recetaParaAnadir);

      this.nuevaReceta = {
        id: 0,
        nombre: '',
        imagen: '',
        tiempoPreparacion: 0,
        descripcion: '',
        categoria: '',
        dificultad: 'Fácil',
        ingredientes: []
      };

      this.mostrarFormulario = false;
      await this.mostrarAlerta();
      await this.cargarRecetas();

    } catch (error) {
      console.error('Error al agregar receta:', error);
    }
  }

  // ---------- DELETE ----------
  async borrarReceta(id: number) {
    try {
      await this.taskService.deleteReceta(id);
      await this.cargarRecetas();
    } catch (error) {
      console.error('Error al borrar receta:', error);
    }
  }

  // ---------- PUT ----------
  async guardarCambios(receta: Receta) {
    try {
      await this.taskService.updateReceta(receta);
      console.log('Receta actualizada');
    } catch (error) {
      console.error('Error al actualizar receta:', error);
    }
  }

  // ---------- Ir a ajustes ----------
  irAjustes() {
    this.router.navigate(['/ajustes']);
  }
}
