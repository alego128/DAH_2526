import { Component } from '@angular/core';
import { AlertController, IonicModule, LoadingController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecetaItemComponent } from 'src/app/components/receta-item/receta-item.component';
import { Receta } from 'src/app/interfaces/receta';
import { RouterModule, Router } from '@angular/router'; 
import { addIcons } from 'ionicons';
import { settingsOutline, camera } from 'ionicons/icons';
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { TaskService } from '../services/recetas.service';
import { PhotoService } from '../services/photo'; 
import { LocationService } from '../services/location.service'; 
import { SettingsService } from '../services/settings.service'; 
import { searchOutline, filterOutline } from 'ionicons/icons';

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

  cargando = false;
  mostrarFormulario = false;
  recetas: Receta[] = [];
  nombreUsuario: string = '';
  textoBuscar: string = ''; 
  criterioOrden: string = 'nombre'; 

  // Para mostrar coordenadas en la vista
  latitud: number | null = null;
  longitud: number | null = null;

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
    private taskService: TaskService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public photoService: PhotoService,
    public locationService: LocationService,
    public settingsService: SettingsService
  ) {
    addIcons({ settingsOutline, camera, searchOutline, filterOutline});
  }

  async ionViewWillEnter() {
    this.nombreUsuario = await this.settingsService.get('nombre_usuario') || 'Chef';
  }

  // ---------- FAB Cámara ----------
  async addPhoto() {
    await this.photoService.addNewToGallery();

    if (this.photoService.foto) {
      this.nuevaReceta.imagen = this.photoService.foto;
    }
  }

  // ---------- GPS ----------
  async obtenerGPS() {
  try {
    await this.locationService.obtenerPosicionActual();

    if (this.locationService.latitud && this.locationService.longitud) {
      this.nuevaReceta.latitud = this.locationService.latitud;
      this.nuevaReceta.longitud = this.locationService.longitud;

      const toast = await this.toastCtrl.create({
        message: `Coordenadas guardadas: ${this.nuevaReceta.latitud}, ${this.nuevaReceta.longitud}`,
        duration: 2500,
        color: 'success'
      });
      await toast.present();
    }
  } catch (error) {
    console.log("El usuario denegó el permiso o el GPS está apagado");
    const toast = await this.toastCtrl.create({
      message: 'No se pudo obtener la ubicación.',
      duration: 3000,
      color: 'danger'
    });
    await toast.present();
  }
}

  // ---------- Skeletons ----------
  get skeletons() {
    return Array(this.recetas.length || 12);
  }

  // ---------- Mostrar/ocultar formulario ----------
  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  // ---------- ngOnInit ----------
  async ngOnInit() {
    await this.cargarRecetas();
  }

  // ---------- Mostrar error inteligente ----------
  async mostrarError(mensaje: string, codigo?: number) {
    let texto = mensaje;
    if (codigo) texto += ` (Código: ${codigo})`;

    const toast = await this.toastCtrl.create({
      message: texto,
      duration: 3000,
      color: 'danger',
      icon: 'alert-circle-outline',
      position: 'bottom'
    });

    await toast.present();
  }

  // ---------- Cargar recetas ----------
  async cargarRecetas() {
    this.cargando = true;
    const loading = await this.loadingCtrl.create({
      message: 'Cargando recetas...',
      spinner: 'crescent'
    });

    await loading.present();

    try {
      this.recetas = await this.taskService.getRecetas();
    } catch (error: any) {
      console.error('Error cargando recetas:', error);
      const codigo = error?.status;
      await this.mostrarError('No se pudieron cargar las recetas. Revisa tu conexión.', codigo);
    } finally {
      this.cargando = false;
      await loading.dismiss();
    }
  }

  get recetasVisibles() {
  // 1. Filtrar por texto (nombre o categoría)
  let filtradas = this.recetas.filter(r => {
    const busqueda = this.textoBuscar.toLowerCase();
    return r.nombre.toLowerCase().includes(busqueda) || 
           r.categoria.toLowerCase().includes(busqueda);
  });

  // 2. Ordenar según el criterio seleccionado
  return filtradas.sort((a, b) => {
    if (this.criterioOrden === 'tiempo') {
      return a.tiempoPreparacion - b.tiempoPreparacion;
    } else if (this.criterioOrden === 'dificultad') {
      const peso = { 'Fácil': 1, 'Media': 2, 'Difícil': 3 };
      return (peso[a.dificultad || 'Fácil']) - (peso[b.dificultad || 'Fácil']);
    } else {
      return a.nombre.localeCompare(b.nombre);
    }
  });
}

  // ---------- Agregar receta ----------
  async agregarReceta() {
    if (!this.nuevaReceta.nombre.trim()) return;

    const loading = await this.loadingCtrl.create({
      message: 'Guardando receta...',
      spinner: 'crescent'
    });

    await loading.present();

    const recetaParaAnadir: Receta = {
      ...this.nuevaReceta,
      ingredientes: this.nuevaReceta.ingredientes.length
        ? this.nuevaReceta.ingredientes
        : ['Ingrediente genérico']
    };

    try {
      await this.taskService.agregarReceta(recetaParaAnadir);

      // Limpiar formulario
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

      const toast = await this.toastCtrl.create({
        message: 'Receta guardada con éxito',
        duration: 2000,
        color: 'success'
      });
      await toast.present();

      await this.cargarRecetas();

    } catch (error: any) {
      console.error('Error al agregar receta:', error);
      const codigo = error?.status;
      await this.mostrarError('No se pudo guardar la receta.', codigo);
    } finally {
      await loading.dismiss();
    }
  }

  // ---------- Borrar receta ----------
  async borrarReceta(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar borrado',
      message: '¿Estás seguro de que quieres eliminar esta receta?',
      buttons: [
        { text: 'Cancelar', role: 'cancel', cssClass: 'secondary' },
        { 
          text: 'Sí, borrar', 
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Borrando receta...',
              spinner: 'crescent'
            });
            await loading.present();

            try {
              await this.taskService.deleteReceta(id);

              const toast = await this.toastCtrl.create({
                message: 'Receta eliminada',
                duration: 2000,
                color: 'success'
              });
              await toast.present();

              await this.cargarRecetas();
            } catch (error: any) {
              console.error('Error al borrar receta:', error);
              const codigo = error?.status;
              await this.mostrarError('No se pudo borrar la receta.', codigo);
            } finally {
              await loading.dismiss();
            }
          } 
        }
      ]
    });

    await alert.present();
  }

  // ---------- Actualizar receta ----------
  async guardarCambios(receta: Receta) {
    const loading = await this.loadingCtrl.create({
      message: 'Actualizando receta...',
      spinner: 'crescent'
    });

    await loading.present();

    try {
      await this.taskService.updateReceta(receta);

      const toast = await this.toastCtrl.create({
        message: 'Receta actualizada',
        duration: 2000,
        color: 'success'
      });
      await toast.present();

    } catch (error: any) {
      console.error('Error al actualizar receta:', error);
      const codigo = error?.status;
      await this.mostrarError('No se pudo actualizar la receta.', codigo);
    } finally {
      await loading.dismiss();
    }
  }

  // ---------- Ir a ajustes ----------
  irAjustes() {
    this.router.navigate(['/ajustes']);
  }
}